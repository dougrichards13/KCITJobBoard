export const metadata = {
  title: "Flexible Input Finance Loans | CFAFS",
  description: "CFAFS offers production agriculture loans, commercial ag loans, and industry-leading rates for member cooperatives and rural businesses.",
};

export default function LoansPage() {
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
          CFAFS Loans &amp; Financing
        </h1>
        <p className="text-lg text-[#495464] mb-8 max-w-2xl mx-auto" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
          Flexible financial solutions designed for agriculture producers and rural businesses.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 mb-16">
        {/* Production Ag Loans Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12 hover:shadow-md transition-all overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center mb-8 gap-8">
            <div className="md:w-1/3">
              <div className="bg-[#e5f1e5] h-48 md:h-64 rounded-xl flex items-center justify-center">
                <span className="text-[#4F7942] text-sm font-medium">Production Ag Loans Image</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
                Production Ag Loans
              </h2>
              <p className="text-[#495464] mb-4" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
                CFA&apos;s Production Ag Loans are set-up in partnership with our member cooperatives to offer seasonal agricultural financing to their customers. 
                Under the program, there are currently two loan products offered:
              </p>
            </div>
          </div>

          {/* Simpli-Fi Loan Section */}
          <div className="bg-[#f5f8ff] rounded-xl p-6 mb-8 border border-[#e0e8f5]">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-white h-32 rounded-lg flex items-center justify-center border">
                  <span className="text-[#5CA4EA] text-sm">Simpli-Fi Logo</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#5CA4EA", fontFamily: "Montserrat,Arial,sans-serif" }}>
                  Simpli-Fi by CFA
                </h3>
                <p className="text-[#495464] mb-4">
                  This loan is designed to provide financing for your agronomy and related services purchased at your local cooperative. 
                  The loan can be up to $600,000 based on information submitted in the Simpli-Fi by CFA Loan Application. 
                  The loan is simple to use as the loan application and loan documentation are combined into one document.
                </p>
                
                <h4 className="font-bold mb-3 text-[#4F7942]">Features &amp; Benefits</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-semibold text-[#5CA4EA] mb-1">Convenient</h5>
                    <p className="text-sm text-[#495464]">Easy to apply. Fast approval process. Simple loan documentation.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-semibold text-[#5CA4EA] mb-1">Cost-Effective</h5>
                    <p className="text-sm text-[#495464]">All of the advantages of a captive financing company without the cost of operation or capitalization.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-semibold text-[#5CA4EA] mb-1">Expert Support</h5>
                    <p className="text-sm text-[#495464]">CFA provides ongoing marketing support and training to your staff.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-semibold text-[#5CA4EA] mb-1">Competitive Advantage</h5>
                    <p className="text-sm text-[#495464]">Make your offering very desirable to the customer with easily customizable loan programs and interest subsidy matching.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-semibold text-[#5CA4EA] mb-1">Comprehensive</h5>
                    <p className="text-sm text-[#495464]">Finance all agricultural production needs under one loan with CFA.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-semibold text-[#5CA4EA] mb-1">Flexible</h5>
                    <p className="text-sm text-[#495464]">Competitive interest rate options and loan maturities to match your marketing needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Loans Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12 hover:shadow-md transition-all overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center mb-8 gap-8">
            <div className="md:w-1/3">
              <div className="bg-[#fcf3e1] h-48 md:h-64 rounded-xl flex items-center justify-center">
                <span className="text-[#FFC857] text-sm font-medium">Commercial Loans Image</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#5CA4EA", fontFamily: "Montserrat,Arial,sans-serif" }}>
                Commercial Loans
              </h2>
              <p className="text-[#495464] mb-4" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
                CFA offers a broad array of flexible commercial loans to support our member cooperatives. No matter the size of commercial loan requested, 
                our Portfolio Managers can structure a loan to fit their needs.
              </p>
            </div>
          </div>

          {/* Operating Loans */}
          <div className="bg-[#e9f5fd] rounded-xl p-6 mb-6 border border-[#d5e9f8]">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/5">
                <div className="bg-white h-28 rounded-lg flex items-center justify-center border">
                  <span className="text-[#5CA4EA] text-sm">Operating Icon</span>
                </div>
              </div>
              <div className="md:w-4/5">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#5CA4EA", fontFamily: "Montserrat,Arial,sans-serif" }}>
                  Operating Loans
                </h3>
                <p className="text-[#495464]">
                  These commercial loans are revolving lines of credit available to finance the seasonal increases in supply inventory, grain inventory, 
                  hedging activities, receivables, and operating expenses.
                </p>
                <p className="text-[#495464] mt-3">
                  Commercial loans are typically secured and may have either variable or fixed interest rates. Operating loans usually mature within 12 months.
                </p>
              </div>
            </div>
          </div>

          {/* Term Loans */}
          <div className="bg-[#f0f7f2] rounded-xl p-6 mb-6 border border-[#e4f0e9]">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/5">
                <div className="bg-white h-28 rounded-lg flex items-center justify-center border">
                  <span className="text-[#4F7942] text-sm">Term Loan Icon</span>
                </div>
              </div>
              <div className="md:w-4/5">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
                  Term Loans
                </h3>
                <p className="text-[#495464]">
                  This commercial lending product is used to finance real estate, facilities, equipment, vehicles, or permanent levels of current assets.
                </p>
                <p className="text-[#495464] mt-3">
                  Term Loans may be either revolving or non-revolving, are typically secured with assets of the cooperative, and may have either variable 
                  or fixed interest rates. The repayment period will be matched to the useful life of the assets financed and to the cash flow to be generated.
                </p>
              </div>
            </div>
          </div>

          {/* Specialty Lending */}
          <div className="bg-[#fff9ea] rounded-xl p-6 border border-[#faf0d8]">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/5">
                <div className="bg-white h-28 rounded-lg flex items-center justify-center border">
                  <span className="text-[#FFC857] text-sm">Specialty Icon</span>
                </div>
              </div>
              <div className="md:w-4/5">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#FFC857", fontFamily: "Montserrat,Arial,sans-serif" }}>
                  Specialty Lending
                </h3>
                <p className="text-[#495464]">
                  These loans are single-purpose loans to member cooperatives that have a borrowing relationship with another lender. The loans are used to 
                  provide deferred terms and fund 100% of inventory purchases.
                </p>
                <p className="text-[#495464] mt-3 mb-4">
                  Our Premier Specialty Loan is our best deferred-terms tool for financing invoices. The loan is a perpetual line of convenience credit 
                  subject to annual review.
                </p>
                
                <h4 className="font-bold mb-3 text-[#4F7942]">How it works:</h4>
                <ul className="list-disc pl-5 space-y-2 text-[#495464]">
                  <li>Member cooperative selects the invoices to be financed</li>
                  <li>CFA makes the payments to the suppliers</li>
                  <li>The loan is due in full once a year</li>
                  <li>Member cooperative chooses which month of the year you prefer to pay off the loan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Interest Rates Panel */}
        <div className="bg-[#5CA4EA]/10 rounded-2xl p-8 border border-[#5CA4EA]/20 mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
            Current Interest Rates
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-[#4F7942] mb-2">CFA Field Finance Rate: 8.50% Variable</h3>
              <p className="text-sm text-[#495464]">
                Interest Rate for CFA Input Finance Loans Booked for the 2024 and 2025 Crop Year.<br />
                Interest Rate as of January 1, 2025.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#4F7942] mb-2">CFA Input Advantage Rate: 10.50% Variable</h3>
              <p className="text-sm text-[#495464]">
                Interest Rate for CFA Input Finance Loans Booked Prior to the 2024 Crop Year.<br />
                Interest Rate as of January 1, 2025.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#4F7942] mb-2">CFA Base Rate: 8.25% Variable</h3>
              <p className="text-sm text-[#495464]">
                Interest Rate for CFA Commercial Loans<br />
                Interest rate as of January 1, 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
