"use client";

import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactChannels = [
  {
    title: "Sales Inquiries",
    description: "Talk to our team about hiring SDR talent across regions.",
    value: "info@sdrglobal.io",
    detail: "Response time: under 4 business hours",
    cta: "Email Sales",
    href: "mailto:info@sdrglobal.io",
  },
  {
    title: "Talent Applications",
    description: "Apply for open SDR opportunities in global teams.",
    value: "info@sdrglobal.io",
    detail: "Response time: under 24 business hours",
    cta: "Email Talent Team",
    href: "mailto:info@sdrglobal.io",
  },
  {
    title: "Partnerships",
    description: "Explore strategic partnerships, media, and ecosystem programs.",
    value: "info@sdrglobal.io",
    detail: "Response time: under 1 business day",
    cta: "Email Partnerships",
    href: "mailto:info@sdrglobal.io",
  },
];

const globalPresence = [
  {
    title: "Head Office",
    location: "Accra, Ghana",
    timezone: "GMT (UTC+0)",
    detail: "Primary operations and client delivery",
  },
  {
    title: "Co-Founder Base",
    location: "United Kingdom",
    timezone: "GMT / BST",
    detail: "Leadership presence for UK and Europe relationships",
  },
  {
    title: "Co-Founder Base",
    location: "United States",
    timezone: "US time zones",
    detail: "Leadership presence for North America relationships",
  },
];

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  // state for controlling whether a submission request is ongoing
  // validation and result messages are displayed via toast notifications
  const [loading, setLoading] = useState(false);


  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateLinkedIn = (url: string) =>
    /^https:\/\/(www\.)?linkedin\.com\/.*$/i.test(url);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedData = {
      fullName: fullName.trim(),
      workEmail: workEmail.trim(),
      companyName: companyName.trim(),
      inquiryType: inquiryType.trim(),
      message: message.trim(),
    };

    if (
      !trimmedData.fullName ||
      !trimmedData.workEmail ||
      !trimmedData.companyName ||
      !trimmedData.inquiryType ||
      !trimmedData.message
    ) {
      toast.error("Please complete all required fields.");
      return;
    }

    if (!validateEmail(trimmedData.workEmail)) {
      toast.error("Please enter a valid business email.");
      return;
    }

    if (trimmedData.message.length < 20) {
      toast.error("Please provide more detail (minimum 20 characters).");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trimmedData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      toast.success(
        "Thanks. Your message has been received. Our team will respond shortly.",
      );

      setFullName("");
      setWorkEmail("");
      setCompanyName("");
      setInquiryType("");
      setMessage("");
    } catch {
      toast.error(
        "We couldn’t submit your message. Please try again or email info@sdrglobal.io.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.28),transparent_32%),radial-gradient(circle_at_90%_0%,rgba(34,197,94,0.2),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:36px_36px] opacity-40" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
              Global Support and Partnerships
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Contact SDR Global
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                Built For International Growth
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              Our head office is in Ghana, with co-founders based in the UK and USA to support international clients
              across key time zones.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <div className="text-3xl font-bold text-cyan-300">1</div>
                <div className="mt-1 text-sm text-slate-300">Head office (Ghana)</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <div className="text-3xl font-bold text-emerald-300">2</div>
                <div className="mt-1 text-sm text-slate-300">Co-founder locations</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <div className="text-3xl font-bold text-sky-300">3</div>
                <div className="mt-1 text-sm text-slate-300">Time-zone anchors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="bg-slate-50 py-20 text-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center rounded-full border border-sky-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-sky-700">
              Talk To The Right Team
            </div>
            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
              Reach us through the channel that fits your goal
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              For the fastest response, pick your inquiry type in the form. You can also use the direct email channels below.
            </p>

            <div className="mt-8 space-y-4">
              {contactChannels.map((channel) => (
                <div key={channel.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{channel.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{channel.description}</p>
                  <p className="mt-4 font-semibold text-sky-700">{channel.value}</p>
                   <p className="mt-3 text-sm font-semibold text-slate-700">
                    Phone: <a href="tel:+2330308249488" className="text-sky-700 hover:text-sky-800">+233 (0) 308249488</a>
                  </p>

                  <p className="mt-1 text-xs text-slate-500">{channel.detail}</p>
                  <Link href={channel.href} className="mt-4 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-800">
                    {channel.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-3" id="contact-form">
            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Full name *</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                    placeholder="Jane Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Work email *</label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                    placeholder="jane@company.com"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Company *</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                    placeholder="Company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Inquiry type *</label>
                  <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200" value={inquiryType} onChange={(e) => setInquiryType(e.target.value)}>
                    <option value="">Select an inquiry type</option>
                    <option value="Hiring SDR talent">Hiring SDR talent</option>
                    <option value="Applying as talent">Applying as talent</option>
                    <option value="Partnership or media">Partnership or media</option>
                    <option value="General question">General question</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-700">Message *</label>
                <textarea
                  rows={6}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {loading ? (
                <button
                  type="button"
                  disabled={true}
                  className="mt-6 w-full rounded-xl bg-[#0055ae] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#00458d] disabled:cursor-not-allowed disabled:opacity-70"
                >
                 <CircularProgress color="inherit" size={24} />
                </button>
              ) : 
                <button
                  type="submit"
                  className="mt-6 w-full rounded-xl bg-[#0055ae] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#00458d]"
                >
                  Send Message
              </button>}
              <p className="mt-3 text-center text-xs text-slate-500">
                By submitting, you agree to be contacted by the SDR Global team.
              </p>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer position="bottom-right" />

      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Presence</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              We operate from Ghana with leadership presence in the UK and USA, helping clients move faster across markets.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {globalPresence.map((item) => (
              <div key={`${item.title}-${item.location}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">{item.title}</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">{item.location}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">{item.timezone}</p>
                <p className="mt-5 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>




  );
}
