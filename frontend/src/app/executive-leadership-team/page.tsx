"use client";

import React, { useState } from "react";

const executives = [
  {
    name: "Alice Johnson",
    title: "Chief Executive Officer",
    shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullBio: "Alice Johnson has led CFAFS since 2018. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna ac nulla accumsan dictum nec et nunc. Vivamus at risus sit amet est porttitor rhoncus.",
    photo: "/images/executive-placeholder.jpg",
  },
  {
    name: "Brad Lin",
    title: "Chief Financial Officer",
    shortBio: "Pellentesque facilisis mi at mattis accumsan.",
    fullBio: "Brad Lin manages all financial operations and compliance at CFAFS. Pellentesque facilisis mi at mattis accumsan. Nunc tincidunt, leo at ultricies tincidunt, velit nibh dictum erat, sed mattis arcu.",
    photo: "/images/executive-placeholder.jpg",
  },
  {
    name: "Sonia Patel",
    title: "Chief Operations Officer",
    shortBio: "Sed consectetur augue eget dictum cursus.",
    fullBio: "Sonia oversees all core processes and member onboarding. Sed consectetur augue eget dictum cursus. Maecenas cursus, est vel laoreet commodo, massa urna vehicula magna, sed suscipit turpis lorem non ex.",
    photo: "/images/executive-placeholder.jpg",
  },
];

export default function ExecutiveLeadershipTeamPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center pt-10 pb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
          Executive Leadership Team
        </h1>
        <p className="text-lg text-[#495464] max-w-xl mx-auto" style={{ fontFamily: "Lato, Arial, sans-serif" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Meet the senior executives guiding CFAFS.
        </p>
      </section>

      {/* Executives Grid/List */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-16">
        {executives.map((exec, idx) => (
          <div
            key={exec.name}
            className="bg-white border rounded-2xl shadow-sm flex flex-col items-center px-6 py-8 hover:shadow-lg transition-all group cursor-pointer"
            tabIndex={0}
            aria-label={`${exec.name}, ${exec.title}`}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") setOpenIdx(openIdx === idx ? null : idx);
            }}
            style={{ outline: openIdx === idx ? "2px solid #4F7942" : undefined }}
          >
            <img
              src={exec.photo}
              alt={`${exec.name} portrait`}
              className="w-24 h-24 object-cover mb-4 rounded-full border-4 border-[#5CA4EA] group-hover:border-[#FFC857] transition-all"
              style={{ background: "#ececed" }}
            />
            <div className="text-lg font-bold mb-1" style={{ color:"#4F7942", fontFamily:"Montserrat,Arial,sans-serif" }}>
              {exec.name}
            </div>
            <div className="text-sm text-[#5CA4EA] font-semibold mb-3">{exec.title}</div>
            <p className="text-sm text-[#495464] leading-normal" style={{ fontFamily:"Lato,Arial,sans-serif" }}>
              {exec.shortBio}
            </p>

            {/* Expandable full bio */}
            <button
              className="mt-4 text-xs px-4 py-2 rounded bg-[#4F7942] text-[#fff] font-medium hover:bg-[#3c6136] transition-colors"
              aria-expanded={openIdx === idx}
              aria-controls={`exec-detail-${idx}`}
              tabIndex={0}
              type="button"
              style={{ fontFamily:"Montserrat,Arial,sans-serif", outline: 0, border: "none"}}
            >
              {openIdx === idx ? "Hide Bio" : "Learn More"}
            </button>
            <div
              id={`exec-detail-${idx}`}
              className={`transition-all overflow-hidden ${
                openIdx === idx ? "max-h-[300px] opacity-100 mt-2 pb-1" : "max-h-0 opacity-0"
              }`}
              aria-hidden={openIdx !== idx}
              style={{ fontFamily:"Lato,Arial,sans-serif", color: "#495464" }}
            >
              <p className="text-xs md:text-sm">{exec.fullBio}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
