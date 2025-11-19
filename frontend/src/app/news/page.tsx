export const metadata = {
  title: "News & Media | CFAFS",
  description:
    "CFAFS news: press releases, blog posts, and social media on cooperative agricultural finance leadership, events, and innovation.",
};

export default function NewsPage() {
  const pressReleases = [
    {
      title: "CFAFS Partners with AgroTech",
      date: "April 2025",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta, nisi a pharetra volutpat.",
      url: "#",
    },
    {
      title: "2025 Annual Member Conference Announced",
      date: "March 2025",
      desc: "Praesent nec tortor et nibh volutpat dictum. Etiam facilisis, turpis eget consequat pretium.",
      url: "#",
    },
  ];
  const blogPosts = [
    {
      title: "5 Tips to Prepare for Input Financing Season",
      author: "Jane Team",
      url: "#",
      desc: "Sed sit amet urna ornare, imperdiet urna et, sagittis enim. Vestibulum sit amet lectus.",
    },
    {
      title: "Rural Lending Trends for 2025",
      author: "Bruce Bloggins",
      url: "#",
      desc: "Integer ut dictum ex, ac elementum tellus. Quisque rutrum nunc magna, vitae laoreet justo pulvinar id.",
    },
  ];
  const socials = [
    { icon: "/images/icon-x.svg", name: "X / Twitter", url: "#" },
    { icon: "/images/icon-linkedin.svg", name: "LinkedIn", url: "#" },
    { icon: "/images/icon-facebook.svg", name: "Facebook", url: "#" },
  ];

  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      <section className="max-w-4xl mx-auto pt-10 pb-6 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
          CFAFS News &amp; Updates
        </h1>
        <p className="text-[#495464] text-lg max-w-2xl mx-auto mb-10" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore press releases, CFAFS blog, and connect on social.
        </p>
      </section>

      {/* Press Releases Panel */}
      <section className="max-w-5xl mx-auto px-4 py-5">
        <h2 className="text-2xl font-bold mb-5 text-[#4F7942]" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>Press Releases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
          {pressReleases.map((pr) => (
            <article key={pr.title} className="p-7 rounded-2xl bg-white border shadow hover:shadow-lg transition-all h-full flex flex-col">
              <span className="text-sm text-[#5CA4EA] font-semibold mb-1">{pr.date}</span>
              <h3 className="font-extrabold text-lg mb-2" style={{ color: "#4F7942", fontFamily:"Montserrat,Arial,sans-serif" }}>{pr.title}</h3>
              <p className="text-[#495464] text-sm mb-4">{pr.desc}</p>
              <a href={pr.url} className="inline-block text-[#FFC857] font-semibold text-xs self-start hover:underline">Download/Read Release</a>
            </article>
          ))}
        </div>
      </section>

      {/* Blog Posts Panel */}
      <section className="max-w-5xl mx-auto px-4 py-5">
        <h2 className="text-2xl font-bold mb-5 text-[#5CA4EA]" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>CFAFS Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
          {blogPosts.map((post) => (
            <article key={post.title} className="p-7 rounded-2xl bg-white border shadow hover:shadow-lg transition-all h-full flex flex-col">
              <span className="text-sm text-[#4F7942] font-semibold mb-1">{post.author}</span>
              <h3 className="font-extrabold text-lg mb-2" style={{ color: "#5CA4EA", fontFamily:"Montserrat,Arial,sans-serif" }}>{post.title}</h3>
              <p className="text-[#495464] text-sm mb-4">{post.desc}</p>
              <a href={post.url} className="inline-block text-[#FFC857] font-semibold text-xs self-start hover:underline">Read More</a>
            </article>
          ))}
        </div>
      </section>

      {/* Social Links/Follow */}
      <section className="max-w-xl mx-auto px-4 py-6 text-center">
        <h2 className="text-xl font-bold mb-3 text-[#4F7942]" style={{ fontFamily:"Montserrat,Arial,sans-serif" }}>Connect With Us</h2>
        <div className="flex justify-center gap-8 items-center">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              className="flex flex-col items-center p-3 transition rounded-lg hover:bg-[#e2e5eb]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
            >
              <img src={s.icon} alt={s.name} style={{height: 35, width: 35, marginBottom: 4}} />
              <span className="text-xs text-[#495464] font-semibold">{s.name}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

