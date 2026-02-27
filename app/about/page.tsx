import { url } from "inspector";
import Image from "next/image";

const LINKEDIN_URL =
  "https://www.linkedin.com/company/sdrglobal/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BD6%2FEyETWTDeO9hpmBbhxKA%3D%3D";

// Data for the page sections
const operatingModelItems = [
  {
    title: "Clear Leadership",
    description:
      "Regional GTM ownership across Africa, the United States, and the United Kingdom & Europe.",
  },
  {
    title: "Operational Ownership",
    description:
      "Dedicated SDR operations leadership responsible for delivery, coaching standards, and performance management.",
  },
  {
    title: "Delivery Depth",
    description:
      "Revenue intelligence, enablement, and financial governance integrated into every client program.",
  },
];

const coFounders = [
  {
    name: "Sir Ambrose Yennah",
    title: "Regional GTM – Africa",
    image: "/sir-ambrose.jpeg",
    url: "https://www.linkedin.com/in/ambrose-akyebe-yennah-029b336b/",
  },
  {
    name: "Erica Franklin",
    title: "Regional GTM – United States",
    image: "/erica.jpg",
    url: "https://www.linkedin.com/in/erica-franklin/",
  },
  {
    name: "Michael Adonteng",
    title: "Regional GTM – United Kingdom & Europe",
    image: "/mike.png",
    url: "https://www.linkedin.com/in/michaeladonteng/",
  },
];

const leadershipTeam = {
  sdrOps: {
    name: "Emmanuel Agyapong",
    title: "Global SDR Operations & Delivery",
    image: "/emmanuel.png",
    url: "https://www.linkedin.com/in/emmanuel-agyapong-chrbp-24104653/",
  },
  delivery: {
    name: "Naana Baffo",
    title: "SDR Team Leads & Enablement",
    image: "/naana.png",
    url: "https://www.linkedin.com/in/naana-baffo/",
  },
  revIntel: [
    {
      name: "Nigel Henaku",
      title: "Revenue Intelligence & Analytics",
      image: "/nigel.jpeg",
      url: "https://www.linkedin.com/in/nigel-henaku/",
    },
    {
      name: "Williams Naasorri",
      title: "Revenue Intelligence & Analytics",
      image: "/williams.png",
      url: "https://www.linkedin.com/in/williamsnaasorri25/",
    },
  ],
  finance: {
    name: "Richard Yeboah",
    title: "Financial Governance & Planning",
    image: "/richard.jpg",
    url: "https://www.linkedin.com/in/richard-yeboah-abb44955/",
  },
};

// Reusable components for the page
function OperatingModelCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
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
  url,
}: {
  name: string;
  title: string;
  image: string;
  url: string;
}) {
  return (
    <div className="text-center">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden shadow-md">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <h4 className="mt-6 text-lg font-semibold">{name}</h4>
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
      <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="bg-slate-950 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-sky-400 font-semibold">
            About SDR Global
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Revenue Infrastructure for
            <span className="block text-sky-400">Modern B2B Growth Teams</span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">
            SDR Global delivers managed pipeline generation through structured
            leadership, operational ownership, and disciplined execution. We are
            built to scale across markets with clarity, accountability, and
            measurable outcomes.
          </p>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Mission</h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            To provide global B2B companies with reliable, revenue-aligned
            pipeline generation through structured SDR deployment and
            disciplined operational execution.
          </p>
        </div>
      </section>

      {/* ================= OPERATING MODEL ================= */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Our Operating Model"
            subtitle="SDR Global is structured around clear leadership ownership, operational depth, and performance intelligence."
          />

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {operatingModelItems.map((item) => (
              <OperatingModelCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Leadership & Team Structure"
            subtitle="Structured ownership across revenue, operations, intelligence, and finance."
          />

          <div className="mt-20 space-y-20">
            {/* Co-Founders */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Co-Founders | International GTM & Revenue
              </h3>
              <div className="mt-10 grid md:grid-cols-3 gap-10">
                {coFounders.map((leader) => (
                  <LeadershipCard key={leader.name} {...leader} />
                ))}
              </div>
            </div>

            {/* SDR Operations */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Head of SDR Operations
              </h3>
              <div className="mt-10 flex justify-center">
                <LeadershipCard {...leadershipTeam.sdrOps} />
              </div>
            </div>

            {/* Delivery & Enablement */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Delivery & Enablement
              </h3>
              <div className="mt-10 flex justify-center">
                <LeadershipCard {...leadershipTeam.delivery} />
              </div>
            </div>

            {/* Revenue Intelligence */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Revenue Intelligence
              </h3>
              <div className="mt-10 grid md:grid-cols-2 gap-10 justify-items-center">
                {leadershipTeam.revIntel.map((member) => (
                  <LeadershipCard key={member.name} {...member} />
                ))}
              </div>
            </div>

            {/* Finance */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Finance
              </h3>
              <div className="mt-10 flex justify-center">
                <LeadershipCard {...leadershipTeam.finance} />
              </div>
            </div>
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
