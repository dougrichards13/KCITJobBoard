"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";

interface DropdownMenuProps {
  label: string;
  href: string;
  children: React.ReactNode;
}

export default function DropdownMenu({ label, href, children }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  // Close dropdown on blur (when focus leaves the menu)
  const handleBlur = (e: React.FocusEvent) => {
    if (!menuRef.current?.contains(e.relatedTarget as Node)) {
      setOpen(false);
    }
  };

  return (
    <li
      className={`dropdown${open ? " open" : ""}`}
      ref={menuRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={handleBlur}
    >
      <Link
        href={href}
        className="dropdown-toggle"
        tabIndex={0}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={e => {
          if (e.key === "Escape") setOpen(false);
        }}
      >
        {label}
      </Link>
      <ul className="dropdown-menu" style={{ display: open ? "block" : "none" }}>
        {children}
      </ul>
    </li>
  );
} 