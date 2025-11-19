"use client";

export default function NavToggle() {
  const toggleMenu = () => {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-menu");
    
    if (toggle && menu) {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", (!expanded).toString());
      menu.classList.toggle("active");
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = expanded ? "" : "hidden";
    }
  };
  
  return (
    <button 
      className="nav-toggle" 
      aria-expanded="false" 
      aria-controls="primary-menu" 
      aria-label="Toggle navigation"
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
