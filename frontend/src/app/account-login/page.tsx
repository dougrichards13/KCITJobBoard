export const metadata = {
  title: "Member Login | Cooperative Finance Association",
  description:
    "Access your CFAFS account for secure loan management, member resources, and digital input financing tools.",
};

export default function AccountLoginPage() {
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      <section className="max-w-lg mx-auto text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
          Member Login
        </h1>
        <p className="mb-7 text-lg text-[#495464]" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Access your CFAFS account to view your loans and member resources.
        </p>
        {/* Optional branded illustration/icon */}
        <img src="/images/login-illustration.svg" alt="Login Illustration" className="mx-auto mb-7" style={{ maxWidth: 90, minHeight: 60 }} />
        <form className="bg-white rounded-xl px-8 py-8 shadow border max-w-md mx-auto flex flex-col gap-7 text-left">
          <div>
            <label htmlFor="email" className="block font-semibold text-[#495464] mb-2" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>Email</label>
            <input id="email" name="email" type="email" autoComplete="email" className="faq-input w-full" placeholder="your@email.com" required />
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold text-[#495464] mb-2" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" className="faq-input w-full" placeholder="Password" required />
          </div>
          <div className="flex items-center mb-5">
            <input id="twofa" name="twofa" type="checkbox" className="mr-2" />
            <label htmlFor="twofa" className="text-xs text-[#495464]">Send 2FA code to my email</label>
          </div>
          <button className="cta-btn py-3 text-lg w-full shadow" disabled>
            Login (demo)
          </button>
          <div className="flex justify-between mt-6 text-xs">
            <a href="#" className="hover:text-[#5CA4EA] underline">Forgot password?</a>
            <a href="/register" className="hover:text-[#4F7942] underline">New to CFAFS? Register</a>
          </div>
        </form>
      </section>
    </main>
  );
}
