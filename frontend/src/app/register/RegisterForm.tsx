"use client";
import React from "react";

export default function RegisterForm() {
  return (
    <form className="bg-white rounded-xl px-8 py-8 shadow border max-w-md mx-auto flex flex-col gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name" className="block font-semibold text-[#495464] mb-2" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>Full Name</label>
        <input id="name" name="name" type="text" className="faq-input w-full" placeholder="Jane Doe" required />
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold text-[#495464] mb-2" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>Work Email</label>
        <input id="email" name="email" type="email" className="faq-input w-full" placeholder="you@company.com" required />
      </div>
      <div>
        <label htmlFor="company" className="block font-semibold text-[#495464] mb-2" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>Company</label>
        <input id="company" name="company" type="text" className="faq-input w-full" placeholder="Your Company" required />
      </div>
      <button className="cta-btn py-3 text-lg w-full shadow" disabled>
        Submit Request (demo)
      </button>
    </form>
  );
}


