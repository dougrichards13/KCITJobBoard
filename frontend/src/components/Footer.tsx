export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <span>
        <a href="/eula" style={{ color: "var(--color-neutral-light)", textDecoration: "underline dotted" }}>
          EULA
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
      <span style={{ margin: "0 1.1em" }} aria-hidden="true">
        &bull;
      </span>
      <span>
        <a href="/ccpa" style={{ color: "var(--color-neutral-light)", textDecoration: "underline dotted" }}>
          CCPA
        </a>
      </span>
      <span className="block mt-3 text-xs text-[#F7F7F2]/80">
        &copy; {new Date().getFullYear()} Central Finance and Assistance Society · All rights reserved
      </span>
    </footer>
  );
}

