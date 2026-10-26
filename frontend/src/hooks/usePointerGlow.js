import { useEffect, useRef } from "react";

export function usePointerGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (!element || reducedMotion || coarsePointer) return undefined;

    let frame = 0;
    const reset = () => {
      element.style.setProperty("--pointer-x", "50%");
      element.style.setProperty("--pointer-y", "50%");
    };
    const move = (event) => {
      const bounds = element.getBoundingClientRect();
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;
        element.style.setProperty("--pointer-x", `${x}%`);
        element.style.setProperty("--pointer-y", `${y}%`);
        frame = 0;
      });
    };

    element.addEventListener("pointermove", move, { passive: true });
    element.addEventListener("pointerleave", reset);
    return () => {
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}
