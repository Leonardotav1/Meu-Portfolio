"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#inicio"
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 right-6 z-50 border border-phosphor/40 bg-background/90 px-4 py-2 text-xs text-phosphor transition-all duration-300 hover:bg-phosphor hover:text-black ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      [ subir ]
    </a>
  );
}