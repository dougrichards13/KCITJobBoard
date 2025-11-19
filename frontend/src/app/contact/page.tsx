export const metadata = {
  title: "Contact CFAFS | Cooperative Finance Association",
  description:
    "Get in touch with the CFAFS team—phone, email, or office. We’re here to support ag producers, retailers, and members across the U.S.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      <section className="max-w-4xl px-4 mx-auto text-center pt-10 pb-7">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
          Contact CFAFS
        </h1>
        <p className="text-lg text-[#495464] max-w-xl mx-auto mb-7" style={{ fontFamily: "Lato, Arial, sans-serif" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Use the form or the info below to connect with our team.
        </p>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-5xl mx-auto px-0 mb-10">
        <div className="w-full h-48 md:h-56 bg-[#5CA4EA]/30 flex items-center justify-center rounded-lg border border-[#c1dbea] shadow-sm text-[#4F7942] font-semibold text-xl">
          {/* Replace with real map or embed - Or use /images/contact-map.jpg */}
          <span>Map Placeholder</span>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-7 mx-auto px-4 mb-12">
        {[
          {
            icon: "/images/contact-phone.svg",
            label: "Phone",
            value: "(555) 123-4567"
          },
          {
            icon: "/images/contact-email.svg",
            label: "Email",
            value: "info@cfafs.com"
          },
          {
            icon: "/images/contact-location.svg",
            label: "Office",
            value: "123 Main St, Springfield"
          },
        ].map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl border shadow-md flex flex-col items-center py-7 px-2 text-center min-h-[120px]">
            <img src={card.icon} alt={card.label} style={{ width: 38, background: "#f7f7f2", borderRadius: 18 }} className="mb-3" />
            <span className="text-base font-semibold mb-1" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>{card.label}</span>
            <span className="text-sm text-[#495464]">{card.value}</span>
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="max-w-xl mx-auto bg-white shadow rounded-2xl py-10 px-6 mb-20 border">
        <h2 className="font-bold text-2xl text-left mb-7" style={{ color: "#5CA4EA", fontFamily: "Montserrat,Arial,sans-serif" }}>
          Send Us a Message
        </h2>
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block font-semibold text-[#495464] mb-2" style={{ fontFamily:"Montserrat,Arial,sans-serif"}}>Name</label>
            <input id="name" name="name" autoComplete="name" placeholder="Your name" className="faq-input w-full" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block font-semibold text-[#495464] mb-2" style={{ fontFamily:"Montserrat,Arial,sans-serif"}}>Email</label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="Your email" className="faq-input w-full" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block font-semibold text-[#495464] mb-2" style={{ fontFamily:"Montserrat,Arial,sans-serif"}}>Message</label>
            <textarea id="message" name="message" rows={5} placeholder="How can we help you?" className="faq-input w-full"></textarea>
          </div>
          <button className="cta-btn px-10 py-3 text-lg w-full shadow" disabled>
            Send Message (demo)
          </button>
        </form>
      </section>
    </main>
  );
}
