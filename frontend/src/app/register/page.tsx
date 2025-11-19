export const metadata = {
  title: "Register | Cooperative Finance Association",
  description: "Request a new CFAFS account. Your request will be reviewed and processed.",
};

import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      <section className="max-w-lg mx-auto text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
          Register for CFAFS
        </h1>
        <p className="mb-7 text-lg text-[#495464]" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
          Submit your details to request a new account. Our team will follow up.
        </p>
        <RegisterForm />
      </section>
    </main>
  );
}


