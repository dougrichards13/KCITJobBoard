export const metadata = {
  title: "Become a Member | Cooperative Finance Association (CFAFS)",
  description:
    "Learn how to join CFAFS, access exclusive finance solutions, and strengthen your agribusiness with the power of membership.",
};
export default function MembershipPage() {
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      <section className="max-w-4xl mx-auto text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
          CFAFS Membership
        </h1>
        <p className="mt-6 mb-8 text-xl text-[#495464]" style={{ fontFamily: "Lato, Arial, sans-serif" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover a world of exclusive benefits, support, and community by becoming a CFAFS member.
        </p>
        <a
          href="#benefits"
          className="cta-btn text-lg shadow-md"
        >
          View Benefits
        </a>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="max-w-5xl mx-auto px-4 py-3 pb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="rounded-2xl bg-white border shadow-sm p-7 flex flex-col items-center hover:shadow-md transition-all min-h-[210px]"
          >
            <img
              src={`/images/benefit-icon${n}.svg`}
              alt={`Benefit icon ${n}`}
              className="mb-4"
              style={{ width: 54, height: 54, objectFit: 'contain', background: "#e5f6f5", borderRadius: 12 }}
            />
            <h2 className="font-bold text-xl mb-2" style={{ color: "#5CA4EA", fontFamily: "Montserrat,Arial,sans-serif" }}>
              {["Exclusive Rates", "Trusted Guidance", "Community Support"][n - 1]}
            </h2>
            <p className="leading-relaxed text-[#495464]" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales, purus non dictum dictum, justo nisl dictum libero.
            </p>
          </div>
        ))}
      </section>

      {/* How Membership Works: Steps */}
      <section className="bg-[#E6F2EB] py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-[#4F7942]" style={{fontFamily:"Montserrat,Arial,sans-serif"}}>
            How Membership Works
          </h2>
          <ol className="relative border-l-2 border-[#4F7942]/60 pl-7 space-y-8">
            <li>
              <span className="absolute -left-[1.40em] flex items-center justify-center w-8 h-8 bg-[#FFC857] rounded-full font-extrabold text-[#4F7942] shadow-md">1</span>
              <span className="font-semibold text-[#4F7942] block mb-2" style={{fontFamily:"Montserrat,Arial,sans-serif"}}>Apply Online</span>
              <span className="text-[#495464]">Lorem ipsum dolor sit amet, consectetur elit. Fill the short web application form on our secure portal.</span>
            </li>
            <li>
              <span className="absolute -left-[1.40em] flex items-center justify-center w-8 h-8 bg-[#5CA4EA] rounded-full font-extrabold text-[#495464] shadow-md">2</span>
              <span className="font-semibold text-[#5CA4EA] block mb-2" style={{fontFamily:"Montserrat,Arial,sans-serif"}}>Get Approved</span>
              <span className="text-[#495464]">Suspendisse varius, libero non sagittis egestas, sapien enim aliquam ex, et dictum neque turpis nec mi.</span>
            </li>
            <li>
              <span className="absolute -left-[1.40em] flex items-center justify-center w-8 h-8 bg-[#4F7942] rounded-full font-extrabold text-[#FFC857] shadow-md">3</span>
              <span className="font-semibold text-[#4F7942] block mb-2" style={{fontFamily:"Montserrat,Arial,sans-serif"}}>Enjoy Benefits</span>
              <span className="text-[#495464]">Mauris malesuada, mi a dictum efficitur, massa felis molestie urna, non egestas urna justo a quam.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="flex justify-center py-12">
        <a href="/account-login" className="cta-btn text-lg shadow-lg px-11 py-4">
          Sign Up / Member Login
        </a>
      </section>
    </main>
  );
}
