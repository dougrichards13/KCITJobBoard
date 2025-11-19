export const metadata = {
  title: "Field Finance | CFAFS",
  description: "Discover CFAFS's award-winning Field Finance loan origination platform.",
};

export default function FieldFinancePage() {
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      <section className="max-w-4xl mx-auto text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
          Field Finance
        </h1>
        <p className="mt-6 mb-8 text-xl text-[#495464]" style={{ fontFamily: "Lato, Arial, sans-serif" }}>
          Placeholder: This page will feature CFAFS&apos;s award-winning Field Finance loan origination software platform.
        </p>
        <div className="rounded-2xl bg-white border shadow-sm p-7 flex flex-col items-center hover:shadow-md transition-all min-h-[210px]">
          <h2 className="font-bold text-xl mb-2" style={{ color: "#5CA4EA", fontFamily: "Montserrat,Arial,sans-serif" }}>
            Platform Highlights
          </h2>
          <ul className="list-disc text-left mx-auto text-[#495464]" style={{ fontFamily: "Lato,Arial,sans-serif", maxWidth: 500 }}>
            <li>Placeholder: Streamlined loan origination workflow</li>
            <li>Placeholder: Secure, cloud-based access</li>
            <li>Placeholder: Real-time reporting and analytics</li>
            <li>Placeholder: User-friendly interface for ag professionals</li>
          </ul>
        </div>
      </section>
    </main>
  );
} 