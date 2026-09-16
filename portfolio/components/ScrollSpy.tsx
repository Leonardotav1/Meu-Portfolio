"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/data";

export default function ScrollSpy() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1));

    const onScroll = () => {
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 240) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="ml-auto flex flex-wrap gap-x-5 text-xs">
      {nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`transition-colors ${
            active === item.href.slice(1)
              ? "glow text-phosphor"
              : "text-foreground/60 hover:text-phosphor"
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}