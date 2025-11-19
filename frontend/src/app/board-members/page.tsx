export const metadata = {
  title: "Board of Directors | CFAFS",
  description:
    "Meet the CFAFS Board: experienced leaders driving our vision for cooperative agricultural finance and community empowerment.",
};

export default function BoardMembersPage() {
  const members = [
    {
      name: "Jane Doe",
      title: "Board Chair",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus.",
      photo: "/images/board-placeholder.jpg",
    },
    {
      name: "John Smith",
      title: "Treasurer",
      bio: "Sed feugiat augue vitae ipsum venenatis cursus. Fusce vitae.",
      photo: "/images/board-placeholder.jpg",
    },
    {
      name: "Maria Garcia",
      title: "Secretary",
      bio: "Phasellus sodales, dolor eget tincidunt sagittis, neque ligula gravida.",
      photo: "/images/board-placeholder.jpg",
    },
    {
      name: "Derek Chen",
      title: "Member at Large",
      bio: "Suspendisse potenti. Proin nec mi vel eros cursus pretium ac a enim.",
      photo: "/images/board-placeholder.jpg",
    },
  ];
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      <section className="max-w-5xl mx-auto py-8 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
          Our Board of Directors
        </h1>
        <p className="text-[#495464] text-center max-w-3xl mx-auto mb-10" style={{ fontFamily:"Lato,Arial,sans-serif" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Meet the experienced leadership behind CFAFS.
        </p>

        {/* Filter/Sort Controls Placeholder */}
        <div className="flex flex-wrap justify-end items-center gap-4 mb-8">
          <span className="text-sm text-[#807879]">[Filter/Sort: Coming Soon]</span>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
          {members.map((member) => (
            <div
              key={member.name}
              className="relative bg-white border rounded-2xl overflow-hidden shadow-sm flex flex-col items-center p-7 pt-9 group hover:shadow-lg transition-all duration-200"
              tabIndex={0}
              aria-label={`${member.name}, ${member.title}`}
            >
              <div className="w-28 h-28 mb-4 rounded-full border-4 border-[#FFC857] overflow-hidden shadow-sm group-hover:border-[#4F7942] transition-all">
                <img
                  src={member.photo}
                  alt={`${member.name} portrait`}
                  className="object-cover w-full h-full"
                  style={{ background: "#e9eaea" }}
                />
              </div>
              <div className="text-lg font-bold mb-1" style={{ color:"#4F7942", fontFamily:"Montserrat,Arial,sans-serif" }}>{member.name}</div>
              <div className="text-sm text-[#5CA4EA] font-semibold mb-3">{member.title}</div>
              <p className="text-[#495464] text-sm leading-relaxed max-w-[220px]" style={{ fontFamily:"Lato,Arial,sans-serif" }}>
                {member.bio}
              </p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-90 bg-[#F7F7F2] flex flex-col items-center justify-center transition-all rounded-2xl pointer-events-none p-8">
                <span className="text-[16px] font-bold text-[#4F7942] mb-2" style={{ fontFamily:"Montserrat,Arial,sans-serif" }}>{member.name}</span>
                <span className="text-sm italic text-[#5CA4EA] mb-2">{member.title}</span>
                <span className="text-[#495464] text-sm">{member.bio}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
