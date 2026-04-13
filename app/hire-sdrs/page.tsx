"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ModelsSection, ProcessStep, ComparisonTableSection } from "./components";
import { processSteps, faqItems } from "./data";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HireSDRsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    companySize: "",
    role: "",
    linkedinProfile: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsStickyVisible(true);
      } else {
        setIsStickyVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.companyName.trim()) newErrors.companyName = "Company Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.role.trim()) newErrors.role = "Role is required";
    if (!formData.companySize || formData.companySize === "Select size")
      newErrors.companySize = "Company Size is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleHireFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    axios
      .post("/api/submit", formData)
      .then(() => {
        toast.success("Request submitted successfully!");
        setFormData({
          companyName: "",
          name: "",
          email: "",
          companySize: "",
          role: "",
          linkedinProfile: "",
          message: "",
        });
        setErrors({});
      })
      .catch(() => {
        toast.error(
          "There was an error submitting your request. Please try again later.",
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Background.jpg"
            alt="SDR cohort in training at AIDEC"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-white/10 backdrop-blur-sm mb-5 border border-white/20">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
            For Startups, SMEs & Enterprises
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Deploy a Ready-Made <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055ae] to-purple-600">
              SDR Team
            </span>{" "}
            48 Hours.
          </h1>

          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            SDR Global deploys pre-certified, managed sales teams for B2B
            companies across Africa, the US, and Europe — with Day 1
            productivity and zero recruitment overhead.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#companies-form"
              className="px-6 py-2 bg-[#0055ae] text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all shadow-lg"
            >
              Start Hiring
            </Link>

            <Link
              href="#models"
              className="px-6 py-2 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all"
            >
              Pricing Models
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison / Problem Solution */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Modern Way to Scale Sales
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Save time & money. Instead of traditional hiring, use SDR Global
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Old Way */}
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-400"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 mr-3 text-sm">
                  ✕
                </span>
                Traditional Hiring
              </h3>
              <ul className="space-y-5 flex-grow mb-10">
                {[
                  "Spend months sourcing and interviewing",
                  "Pay recruiter fees (15-20% of salary)",
                  "Wait 3 months for ramp-up",
                  "High risk of turnover within 6 months",
                  "Manage training and coaching internally",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <svg
                      className="w-5 h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-center bg-red-50 p-6 rounded-2xl border border-red-100/50">
                <p className="text-sm font-bold uppercase tracking-wider text-red-400 mb-1">Estimated Annual Cost</p>
                <p className="text-5xl font-extrabold text-red-700">
                  $90K
                </p>
              </div>
            </div>

            {/* New Way */}
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-blue-100 shadow-xl relative overflow-hidden ring-1 ring-blue-500/10 flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0055ae]"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-[#0055ae] mr-3 text-sm">
                  ✓
                </span>
                SDR Global Sales Infrastructure
              </h3>
              <ul className="space-y-5 flex-grow mb-8">
                {[
                  "Instant access to Africa's premier pre-vetted talent pool",
                  "Zero recruiting fees or overhead",
                  "Day 1 productivity (pre-trained)",
                  "Replacement guarantee included",
                  "Ongoing performance management & coaching",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-900 font-medium text-lg"
                  >
                    <svg
                      className="w-6 h-6 mr-3 mt-0.5 text-[#0055ae] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-center bg-blue-50 p-6 rounded-2xl border border-blue-100/50 shadow-inner">
                <p className="text-sm font-bold uppercase tracking-wider text-[#0055ae]/60 mb-1">Your Estimated Cost</p>
                <div className="flex items-baseline justify-center gap-2">
                  <p className="text-5xl font-extrabold text-[#0055ae]">$20K</p>
                  <p className="text-xl font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-lg">Save $70K</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Brand Origin Story */}
      <section className="py-12 bg-slate-50/50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Origin Story
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            SDR Global was built from the ground up in Africa. Founded through
            the partnership of AIDEC Digital and Africa Sales Academy, we
            combine the infrastructure of one of the continent&apos;s SDR training
            programmes and global digital firms. Our talent is certified,
            managed, and deployment-ready — not placed and left to figure it
            out.
          </p>
        </div>
      </section>

      {/* Engagement Models */}
      <section id="models" className="py-10 bg-white">
        <ModelsSection />
      </section>

      {/* Model Comparison Table */}
      <ComparisonTableSection />

      {/* Contact Form Section */}
      <section
        id="companies-form"
        className="py-10 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Start Building Your Pipeline
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Fill out the form to get a customized proposal and discover how
                we can deploy a high-performing SDR team for you in under 48
                hours.
              </p>
              <ul className="space-y-4">
                {[
                  "Access a premier talent pool of pre-certified SDRs",
                  "Precision matching for your exact ICP and culture",
                  "No recruiting fees, no overhead",
                  "Start generating pipeline this week",
                ].map((item) => (
                  <li key={item} className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 mt-1">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Hire Your SDR Team Today
              </h3>
              <form className="space-y-5" onSubmit={handleHireFormSubmit}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                      Company Name *
                    </label>
                    <input
                      id="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.companyName ? "border-red-500 bg-red-50" : "border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"}`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                      Business Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-500 bg-red-50" : "border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"}`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? "border-red-500 bg-red-50" : "border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"}`}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                      Your Role *
                    </label>
                    <input
                      id="role"
                      value={formData.role}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.role ? "border-red-500 bg-red-50" : "border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"}`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option>Select size</option>
                      <option value="1-20">1-20</option>
                      <option value="21-100">21-100</option>
                      <option value="101-500">101-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    id="linkedinProfile"
                    value={formData.linkedinProfile}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/..."
                    className={`w-full px-4 py-3 rounded-xl border ${errors.linkedinProfile ? "border-red-500 bg-red-50" : "border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                    Message / Goals
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Leave additional message"
                  />
                </div>

                <button
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex justify-center items-center shadow-lg active:scale-[0.98]"
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-12 bg-gray-50/50" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our 4-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We remove the complexity and risk from SDR hiring, so you can
              focus on growing your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <ProcessStep key={step.step} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-slate-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Answers to questions from buyers just like you
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-left">
                    {item.question}
                  </span>
                  <span
                    className={`text-[#0055ae] font-bold text-2xl transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-200">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link
              href="/contact#contact-form"
              className="inline-block px-8 py-4 bg-[#0055ae] text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              Book a 15-Min Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Persistent Sticky CTA Bar */}
      <div
        className={`fixed left-0 right-0 z-40 bg-white/95 backdrop-blur border-y border-slate-200 shadow-lg transform transition-all duration-300 ${
          isStickyVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-full opacity-0 pointer-events-none"
        } bottom-0 lg:hidden`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] sm:text-xs font-bold text-slate-900 leading-tight uppercase tracking-wider">
                SDR Talent Pool
              </p>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium">
                Ready for deployment
              </p>
            </div>
          </div>
          <Link
            href="#companies-form"
            className="bg-[#0055ae] text-white px-5 sm:px-8 py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-blue-700 transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            Deploy Your SDR Team →
          </Link>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}
