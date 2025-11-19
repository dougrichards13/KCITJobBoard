export const metadata = {
  title: "About CFAFS | Powering Progress in Agricultural Finance",
  description:
    "Discover how The Cooperative Finance Association (CFAFS) has enabled growth and innovation for ag communities and retailers for 75+ years.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto pt-8 pb-10 px-4 md:px-8">
        <div className="flex-1 md:text-left text-center py-4">

          <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
            CFA: Financial Services for Successful Agriculture
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto md:mx-0" style={{ fontFamily: "Lato, Arial, sans-serif", color: "#495464" }}>
            The Cooperative Finance Association (CFA) partners with agricultural cooperatives and agribusinesses to deliver customized input financing solutions. With decades of industry experience, CFA streamlines credit access for growers, helping them secure essential inputs when they need them most. Our innovative financial tools and commitment to service support stronger rural economies and more resilient farming operations. Discover how CFA is advancing agriculture through trusted financial partnerships.
          </p>
          <a href="/membership"
             className="inline-block mt-8 px-7 py-3 font-bold rounded-lg shadow transition bg-[#FFC857] text-[#4F7942] hover:bg-[#5CA4EA] hover:text-[#495464] focus:outline-2 focus:outline-[#4F7942]">
            Become a Member
          </a>
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-12 flex items-center justify-center">
          <img
            src="/images/about-hero.jpg"
            alt="CFAFS Community Hero"
            className="rounded-xl object-cover shadow-lg border border-[#e4e4e0] w-full max-w-sm md:max-w-lg min-h-[180px] min-w-[162px]"
            style={{ background: "#e2e5eb" }}
          />
        </div>
      </section>

      {/* Mission/Vision Cards */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-7 pb-10">
        <div className="bg-white rounded-2xl p-7 shadow-sm border hover:shadow-md transition-all min-h-[185px]">
          <h2 className="text-xl font-bold mb-3" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
            Mission
          </h2>
          <p className="text-base font-normal text-[#495464] leading-relaxed" style={{fontFamily:"Lato,Arial,sans-serif"}}>
          The mission of CFA is to strengthen agriculture by providing reliable, flexible financing solutions to cooperatives and their farmer-members. We are committed to supporting rural communities through strategic partnerships, expert financial services, and innovative programs that empower growers and agribusinesses to thrive in a changing agricultural landscape.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-7 shadow-sm border hover:shadow-md transition-all min-h-[185px]">
          <h2 className="text-xl font-bold mb-3" style={{ color: "#5CA4EA", fontFamily: "Montserrat,Arial,sans-serif" }}>
            History
          </h2>
          <p className="text-base font-normal text-[#495464] leading-relaxed" style={{fontFamily:"Lato,Arial,sans-serif"}}>
          Founded in 1943, CFA has a rich history of supporting American agriculture. What began as a cooperative effort to improve credit access for farmers has grown into a trusted financial partner for agribusinesses nationwide, with over 80 years of experience in delivering dependable input financing solutions.

          </p>
        </div>
      </section>

      {/* Timeline/Milestones Placeholder */}
      <section className="bg-[#5CA4EA]/[.09] border-t border-[#e9ecf3] py-12 px-4 md:px-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#4F7942] uppercase mb-7 tracking-wider" style={{fontFamily: "Montserrat,Arial,sans-serif"}}>
            Our Journey
          </h2>
          {/* Timeline strip placeholder */}
          <ul className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
            <li className="flex flex-col items-center md:w-1/4">
              <span className="rounded-full border-4 border-[#FFC857] w-9 h-9 bg-[#F7F7F2] mb-2"></span>
              <span className="text-[#495464] text-sm font-semibold">1943</span>
              <span className="text-xs italic text-[#7c818b]">Founded</span>
            </li>
            <li className="flex flex-col items-center md:w-1/4">
              <span className="rounded-full border-4 border-[#5CA4EA] w-9 h-9 bg-[#F7F7F2] mb-2"></span>
              <span className="text-[#495464] text-sm font-semibold">1980s</span>
              <span className="text-xs italic text-[#7c818b]">Exapansion of Input Finance Programs</span>
            </li>
            <li className="flex flex-col items-center md:w-1/4">
              <span className="rounded-full border-4 border-[#4F7942] w-9 h-9 bg-[#F7F7F2] mb-2"></span>
              <span className="text-[#495464] text-sm font-semibold">2022</span>
              <span className="text-xs italic text-[#7c818b]">Field Finance goes live</span>
            </li>
            <li className="flex flex-col items-center md:w-1/4">
              <span className="rounded-full border-4 border-[#FFC857] w-9 h-9 bg-[#F7F7F2] mb-2"></span>
              <span className="text-[#495464] text-sm font-semibold">2025</span>
              <span className="text-xs italic text-[#7c818b]">$4 billion in commitments</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="flex justify-center py-9 px-4">
        <a href="/membership" className="cta-btn text-lg shadow-md">
          Join CFAFS Today
        </a>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <span>
          <a href="#" style={{ color: "var(--color-neutral-light)", textDecoration: "underline dotted" }}>
            Terms and Conditions
          </a>
        </span>
        <span style={{ margin: "0 1.1em" }} aria-hidden="true">
          &bull;
        </span>
        <span>
          <a href="/contact" style={{ color: "var(--color-accent)", fontWeight: 700 }}>
            Contact Us
          </a>
        </span>
      </footer>
    </main>
  );
}
