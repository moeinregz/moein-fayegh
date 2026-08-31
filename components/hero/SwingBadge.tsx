"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useT } from "@/components/Providers";
import { XMark } from "@/components/XMark";

/**
 * A hand-rolled "swinging ID badge" — no three.js / react-three-fiber / glb
 * files needed. It's a pure CSS card hanging from a strap, driven by a tiny
 * spring simulation on a single rotation value (angle around the top pivot).
 *
 * - Idle: a gentle perpetual sway (a soft driving sine wave feeds the spring).
 * - Hover: subtle 3D tilt following the pointer.
 * - Drag: grab the card and fling it — it swings and settles back like a
 *   real lanyard on release.
 */
export default function SwingBadge() {
  const t = useT();
  const pivotRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Physics state lives in refs so the rAF loop never re-renders React.
  const angle = useRef(0); // rotateZ, degrees, around the top pivot
  const velocity = useRef(0);
  const tiltX = useRef(0); // pointer-follow 3D tilt while hovering
  const tiltY = useRef(0);
  const dragging = useRef(false);
  const dragTarget = useRef(0);
  const hovering = useRef(false);

  useEffect(() => {
    let raf = 0;
    let t0 = performance.now();
    const STIFFNESS = 26;
    const DAMPING = 4.2;

    const tick = (now: number) => {
      const dt = Math.min((now - t0) / 1000, 1 / 30);
      t0 = now;

      if (dragging.current) {
        angle.current = dragTarget.current;
        velocity.current = 0;
      } else {
        // tiny perpetual driving force so it never fully stops
        const drive = Math.sin(now / 1400) * 0.55 + Math.sin(now / 530) * 0.18;
        const accel = -STIFFNESS * ((angle.current - drive) * (Math.PI / 180)) - DAMPING * velocity.current;
        velocity.current += accel * dt;
        angle.current += velocity.current * dt * (180 / Math.PI);
      }

      angle.current = Math.max(-34, Math.min(34, angle.current));

      if (pivotRef.current) {
        pivotRef.current.style.transform = `rotate(${angle.current.toFixed(2)}deg)`;
      }
      if (cardRef.current) {
        const tx = hovering.current || dragging.current ? tiltY.current : 0;
        const ty = hovering.current || dragging.current ? tiltX.current : 0;
        cardRef.current.style.transform = `rotateX(${tx.toFixed(2)}deg) rotateY(${ty.toFixed(2)}deg)`;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const angleFromPivot = (clientX: number, clientY: number) => {
    const pivot = pivotRef.current;
    if (!pivot) return 0;
    const rect = pivot.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top; // pivot sits at the top edge
    const dx = clientX - originX;
    const dy = Math.max(clientY - originY, 40);
    return (Math.atan2(dx, dy) * 180) / Math.PI;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    dragging.current = true;
    dragTarget.current = angleFromPivot(e.clientX, e.clientY);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) {
      dragTarget.current = angleFromPivot(e.clientX, e.clientY);
    }
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      tiltX.current = px * 14;
      tiltY.current = -py * 14;
    }
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      className="relative flex h-full w-full items-start justify-center"
      style={{ perspective: 1400 }}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={() => {
        hovering.current = false;
        onPointerUp();
      }}
    >
      <div ref={pivotRef} className="flex flex-col items-center will-change-transform" style={{ transformOrigin: "top center" }}>
        {/* strap */}
        <div className="relative h-[130px] w-[26px] overflow-hidden rounded-b-sm2 shadow-hard">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #5c0c1a 0px, #5c0c1a 8px, #a01128 8px, #a01128 16px)",
            }}
          />
          <div className="absolute inset-x-0 top-1/2 h-px bg-black/30" />
        </div>

        {/* metal clip */}
        <div className="-mt-1 h-4 w-9 rounded-sm border border-black/40 bg-gradient-to-b from-[#c9c9cf] via-[#8f8f96] to-[#55555b] shadow-hard" />
        <div className="h-3 w-[6px] rounded-b-sm bg-gradient-to-b from-[#8f8f96] to-[#3a3a3d]" />

        {/* the card itself */}
        <div
          ref={cardRef}
          onPointerDown={onPointerDown}
          onPointerEnter={() => (hovering.current = true)}
          className="glass-strong will-change-transform mt-1 w-[240px] cursor-grab select-none overflow-hidden rounded-lg2 shadow-liquid active:cursor-grabbing sm:w-[270px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* punch hole */}
          <div className="mx-auto mt-2.5 h-2.5 w-2.5 rounded-full bg-black/60 shadow-[inset_0_1px_2px_rgba(0,0,0,.8)]" />

          <div className="flex items-center gap-2 px-4 pb-2 pt-2">
            <XMark className="h-3.5 w-3.5 flex-none text-bloodBright" />
            <span className="mono ltr text-[0.68rem] tracking-wide text-textFaint">DEV-ACCESS // 0x2F</span>
          </div>

          <div className="px-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md2 border border-line">
              <Image
                src="/hero/moein-photo.png"
                alt="Moein Fayegh"
                fill
                sizes="270px"
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blood/25 via-transparent to-transparent" />
            </div>
          </div>

          <div className="px-4 py-4">
            <p className="font-display text-[1.35rem] leading-tight text-bone">{t("معین فایق", "Moein Fayegh")}</p>
            <p className="mono mb-3 mt-0.5 text-[0.74rem] font-bold uppercase tracking-wider text-bloodBright">
              {t("مهندس نرم‌افزار", "Software Engineer")}
            </p>

            <div className="mono ltr space-y-1 border-t border-line pt-2.5 text-[0.68rem] leading-relaxed text-textFaint">
              <div>
                <span className="text-textDim">stack</span> React · Next.js · Node.js
              </div>
              <div>
                <span className="text-textDim">status</span>{" "}
                <span className="text-bloodBright">{t("در دسترس", "open to work")}</span>
              </div>
            </div>
          </div>

          {/* barcode flourish */}
          <div
            className="h-5 w-full opacity-80"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 5px)",
              color: "rgba(217,214,210,0.35)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
