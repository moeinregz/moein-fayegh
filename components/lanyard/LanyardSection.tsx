"use client";

import dynamic from "next/dynamic";

// The 3D card needs WebGL + a physics engine (rapier/wasm), so it can only
// run in the browser — load it lazily, client-side only, with a simple
// placeholder while the ~1MB+ of three.js/rapier chunks come down.
const Lanyard = dynamic(() => import("./Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-2 border-line border-t-bloodBright" />
    </div>
  ),
});

export default function LanyardSection() {
  return (
    <Lanyard
      position={[0, 0, 20]}
      gravity={[0, -40, 0]}
      transparent
      frontImage="/lanyard/moein-photo.png"
      imageFit="cover"
      lanyardWidth={1}
    />
  );
}
