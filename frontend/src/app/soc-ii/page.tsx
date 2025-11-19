export const metadata = {
  title: "SOC II & Certifications | CFAFS",
  description: "Learn about CFAFS&apos;s SOC II compliance, certifications, and privacy practices.",
};

export default function SocIIPage() {
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      <section className="max-w-4xl mx-auto text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
          SOC II & Certifications
        </h1>
        <p className="mt-6 mb-8 text-xl text-[#495464]" style={{ fontFamily: "Lato, Arial, sans-serif" }}>
          Placeholder: Information about CFAFS&apos;s SOC II compliance, industry certifications, and privacy practices will be featured here.
        </p>
        <div className="rounded-2xl bg-white border shadow-sm p-7 flex flex-col items-center hover:shadow-md transition-all min-h-[210px]">
          <h2 className="font-bold text-xl mb-2" style={{ color: "#5CA4EA", fontFamily: "Montserrat,Arial,sans-serif" }}>
            Why SOC II Matters
          </h2>
          <p className="leading-relaxed text-[#495464]" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
            Placeholder: Brief blurb about the importance of SOC II and other certifications for data security and privacy.
          </p>
        </div>
        <div className="rounded-2xl bg-white border shadow-sm p-7 flex flex-col items-center hover:shadow-md transition-all min-h-[210px] mt-8">
          <h2 className="font-bold text-xl mb-2" style={{ color: "#5CA4EA", fontFamily: "Montserrat,Arial,sans-serif" }}>
            Privacy Practices
          </h2>
          <p className="leading-relaxed text-[#495464]" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
            Placeholder: Details about CFAFS&apos;s privacy practices and commitment to protecting member and client data.
          </p>
        </div>
      </section>
    </main>
  );
} 