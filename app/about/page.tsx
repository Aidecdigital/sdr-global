import Image from "next/image";

const LINKEDIN_URL = "https://www.linkedin.com/company/sdrglobal/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BD6%2FEyETWTDeO9hpmBbhxKA%3D%3D";

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
            <span className="block text-sky-400">
              Modern B2B Growth Teams
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">
            SDR Global delivers managed pipeline generation through structured
            leadership, operational ownership, and disciplined execution.
            We are built to scale across markets with clarity, accountability,
            and measurable outcomes.
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
          <div className="text-center">
            <h2 className="text-3xl font-bold">Our Operating Model</h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
              SDR Global is structured around clear leadership ownership,
              operational depth, and performance intelligence.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold">Clear Leadership</h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Regional GTM ownership across Africa, the United States,
                and the United Kingdom & Europe.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold">Operational Ownership</h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Dedicated SDR operations leadership responsible for delivery,
                coaching standards, and performance management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold">Delivery Depth</h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Revenue intelligence, enablement, and financial governance
                integrated into every client program.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Leadership & Team Structure</h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
              Structured ownership across revenue, operations,
              intelligence, and finance.
            </p>
          </div>

          <div className="mt-20 space-y-20">

            {/* Co-Founders */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Co-Founders | International GTM & Revenue
              </h3>

              <div className="mt-10 grid md:grid-cols-3 gap-10">
                {[
                  {
                    name: "Sir Ambrose",
                    region: "Africa",
                    image: "/sir-ambrose.jpeg",
                  },
                  {
                    name: "Erica",
                    region: "United States",
                    image: "/erica.jpg",
                  },
                  {
                    name: "Mike",
                    region: "United Kingdom & Europe",
                    image: "/mike.png",
                  },
                ].map((leader) => (
                  <div key={leader.name} className="text-center">
                    <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden shadow-md">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h4 className="mt-6 text-lg font-semibold">
                      {leader.name}
                    </h4>

                    <p className="text-sm text-slate-600 mt-2">
                      Regional GTM – {leader.region}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* SDR Operations */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Head of SDR Operations
              </h3>

              <div className="mt-10 flex justify-center">
                <div className="text-center">
                  <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden shadow-md">
                    <Image
                      src="/emmanuel.png"
                      alt="Emmanuel"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h4 className="mt-6 text-lg font-semibold">Emmanuel</h4>
                  <p className="text-sm text-slate-600 mt-2">
                    Global SDR Operations & Delivery
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery & Enablement */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Delivery & Enablement
              </h3>

              <div className="mt-10 flex justify-center">
                <div className="text-center">
                  <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden shadow-md">
                    <Image
                      src="/naana.png"
                      alt="Naana"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h4 className="mt-6 text-lg font-semibold">Naana</h4>
                  <p className="text-sm text-slate-600 mt-2">
                    SDR Team Leads & Enablement
                  </p>
                </div>
              </div>
            </div>

            {/* Revenue Intelligence */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Revenue Intelligence
              </h3>

              <div className="mt-10 grid md:grid-cols-2 gap-10 justify-items-center">
                {[
                  { name: "Nigel", image: "/nigel.jpeg" },
                  { name: "Williams", image: "/williams.jpg" },
                ].map((member) => (
                  <div key={member.name} className="text-center">
                    <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden shadow-md">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h4 className="mt-6 text-lg font-semibold">
                      {member.name}
                    </h4>

                    <p className="text-sm text-slate-600 mt-2">
                      Revenue Intelligence & Analytics
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Finance */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Finance
              </h3>

              <div className="mt-10 flex justify-center">
                <div className="text-center">
                  <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden shadow-md">
                    <Image
                      src="/richard.jpg"
                      alt="Richard"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h4 className="mt-6 text-lg font-semibold">Richard</h4>
                  <p className="text-sm text-slate-600 mt-2">
                    Financial Governance & Planning
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* LinkedIn CTA */}
          <div className="mt-24 text-center">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
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