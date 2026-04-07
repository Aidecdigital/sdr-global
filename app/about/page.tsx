import Image from "next/image";

const LINKEDIN_URL =
  "https://www.linkedin.com/company/sdrglobal/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BD6%2FEyETWTDeO9hpmBbhxKA%3D%3D";

// Data for the page sections
const operatingModelItems = [
  {
    title: "Clear Leadership",
    category: "GTM",
    description:
      "Regional go-to-market (GTM) ownership across Africa, the United States, and the United Kingdom & Europe.",
  },
  {
    title: "Operational Ownership",
    category: "Operations",
    description:
      "Dedicated SDR operations leadership responsible for delivery, coaching standards, and performance management.",
  },
  {
    title: "Delivery Depth",
    category: "Strategy",
    description:
      "Revenue intelligence, enablement, and financial governance integrated into every client program.",
  },
];

const coFounders = [
  {
    name: "Sir Ambrose Yennah",
    title: "Regional Go-To-Market (GTM) - Africa",
    image: "/sir-ambrose.jpeg",
    group: "Co-Founder",
    url: "https://www.linkedin.com/in/ambrose-akyebe-yennah-029b336b/",
  },
  {
    name: "Erica Franklin",
    title: "Regional Go-To-Market (GTM) - United States",
    image: "/erica.jpg",
    group: "Co-Founder",
    url: "https://www.linkedin.com/in/erica-franklin/",
  },
  {
    name: "Michael Adonteng",
    title: "Regional Go-To-Market (GTM) - United Kingdom & Europe",
    image: "/mike.png",
    group: "Co-Founder",
    url: "https://www.linkedin.com/in/michaeladonteng/",
  },
];

const leadershipTeam = {
  delivery: {
    name: "Naana Baffo",
    title: "SDR Team Leads & Enablement",
    image: "/baffo.png",
    group: "Delivery",
    url: "https://www.linkedin.com/in/naana-baffo/",
  },
  revIntel: [
    {
      name: "Nigel Henaku",
      title: "Revenue Intelligence & Analytics",
      image: "/nigel2.jpeg",
      group: "Revenue Intelligence",
      url: "https://www.linkedin.com/in/nigel-henaku/",
    },
    {
      name: "Williams Naasorri",
      title: "Revenue Intelligence & Analytics",
      image: "/williams5.png",
      group: "Revenue Intelligence",
      url: "https://www.linkedin.com/in/williamsnaasorri25/",
    },
  ],
  finance: {
    name: "Richard Yeboah",
    title: "Financial Governance & Planning",
    image: "/richard.jpg",
    group: "Finance",
    url: "https://www.linkedin.com/in/richard-yeboah-abb44955/",
  },
};

// Flatten the team for a unified grid
const allTeamMembers = [...coFounders, leadershipTeam.delivery, ...leadershipTeam.revIntel, leadershipTeam.finance];


// Reusable components for the page
function OperatingModelCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border-t-4 border-t-sky-500 border-x border-b border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-4 text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function LeadershipCard({
  name,
  title,
  image,
  group,
  url,
}: {
  name: string;
  title: string;
  image: string;
  group?: string;
  url: string;
}) {
  return (
    <div className="group text-center">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-2 border-transparent group-hover:border-sky-400 transition-all">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        {group && (
          <span className="inline-block mt-4 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-500">{group}</span>
        )}
        <h4 className="mt-2 text-lg font-bold text-slate-900">{name}</h4>
        <p className="text-sm text-slate-600 mt-2">{title}</p>
      </a>
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="bg-slate-950 text-white min-h-[75vh] flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-400 font-bold">
            About SDR Global
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Africa&apos;s Premier Revenue Infrastructure for 
            <span className="block text-sky-400">Global B2B Growth</span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
            Built at the heart of Africa&apos;s tech hub, we deliver managed pipeline generation through structured leadership and disciplined execution.
          </p>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Mission</h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed italic font-medium">
            To empower global B2B companies with reliable, revenue-aligned pipeline
            generation, powered by Africa&apos;s premier sales talent and disciplined operational execution.
          </p>
        </div>
      </section>

      {/* ================= OPERATING MODEL ================= */}
      <section className="bg-slate-50 py-16 md:py-20 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Our Operating Model"
            subtitle="Structured around clear leadership ownership, operational depth, and performance intelligence."
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-10">
            {operatingModelItems.map((item) => (
              <OperatingModelCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Leadership & Team Structure"
            subtitle="Structured ownership across revenue, operations, intelligence, and finance."
          />

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {allTeamMembers.map((member) => (
              <LeadershipCard key={member.name} {...member} />
            ))}
          </div>

          {/* LinkedIn CTA */}
          <div className="mt-24 text-center">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              View Company on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
