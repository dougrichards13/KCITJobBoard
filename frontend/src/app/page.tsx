
export default function Home() {
  return (
    <main className="main-section" style={{ maxWidth: 780 }}>
      <h1 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 900, color: 'var(--color-primary)' }}>
        Welcome to CFAFS
      </h1>
      <p style={{ fontSize: '1.11rem', fontFamily: 'Lato, Arial, sans-serif', color: 'var(--color-neutral-dark)', marginTop: 10 }}>
        The <strong style={{ color: 'var(--color-primary)' }}>Central Finance and Assistance Society</strong> empowers members and communities through reliable, transparent financial solutions and education. Explore our loan offerings, member services, and knowledge resources to help you grow, prosper, and achieve your goals.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.1rem", marginTop: 28 }}>
        <a href="/about" className="cta-btn">About CFAFS</a>
        <a href="/membership" className="cta-btn">Membership</a>
        <a href="/loans" className="cta-btn">Loans</a>
        <a href="/faq" className="cta-btn">Ask Our AI FAQ</a>
        <a href="/contact" className="cta-btn" style={{ background: "var(--color-secondary)", color: "var(--color-primary)" }}>Contact</a>
      </div>

    </main>
  );
}
