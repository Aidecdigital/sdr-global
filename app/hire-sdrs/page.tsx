"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ModelsSection, ProcessStep } from "./components";
import {
  processSteps,
  faqItems,
  testimonials,
  keyMetrics,
  whyChooseUsFeatures,
  clientLogos,
} from "./data";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [companyName, setCompanyName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [companySize, setCompanySize] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [linkedinProfile, setLinkedinProfile] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!companyName.trim()) newErrors.companyName = "Company Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!name.trim()) newErrors.name = "Name is required";
    if (!role.trim()) newErrors.role = "Role is required";
    if (!linkedinProfile.trim()) newErrors.linkedinProfile = "LinkedIn Profile is required";
    if (!companySize || companySize === "Select company size") newErrors.companySize = "Company Size is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleHireFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const body = { companyName, name, email, companySize, role, linkedinProfile, message };
    setLoading(true);
    axios
    .post("/api/submit", body)
    .then((response) => {
        toast.success("Request submitted successfully!");
        setCompanyName("");
        setName("");
        setEmail("");
        setCompanySize("");
        setRole("");
        setLinkedinProfile("");
        setMessage("");
        setErrors({});
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        
        toast.error("There was an error submitting your request. Please try again later.");
      }).finally(() => {
        setLoading(false);
      });
  
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Background.jpg" // Replace with actual image
            alt="SDR cohort in training at AIDEC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-white/10 backdrop-blur-sm mb-8 border border-white/20">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
            For Startups, SMEs & Enterprises
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Build a high-performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055ae] to-purple-600">
              sales engine
            </span>{" "}
            in days.
          </h1>

          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Skip the 3-month hiring cycle. Access pre-vetted, certified SDR
            teams that integrate with your stack and start booking meetings
            immediately.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#companies-form"
              className="px-8 py-4 bg-[#0055ae] text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all shadow-lg"
            >
              Start Hiring
            </Link>

            <Link
              href="#models"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all"
            >
              Investment Models
            </Link>
          </div>
        </div>
      </section>

      {/* Logo Cloud / Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-gray-600 uppercase tracking-wider">
              Powering sales for world-class companies
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-5">
              {clientLogos.map((client) => (
                <div
                  key={client.name}
                  className="col-span-1 flex justify-center items-center"
                >
                  <p className="text-gray-400 font-bold text-2xl opacity-60 hover:opacity-100 transition-opacity">
                    {client.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-200 opacity-10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The SDR Global Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Go from zero to pipeline in days, not months. We provide the
              people, processes, and platform for predictable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyMetrics.map((item) => (
              <div
                key={item.label}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-blue-100 hover:-translate-y-1 transition-all border border-gray-100"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="text-4xl font-bold text-[#0055ae] mb-2">
                  {item.metric}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {item.label}
                </div>
                <p className="text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Leaders Say About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by founders and sales leaders at fast-growing companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison / Problem Solution */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Modern Way to Scale Sales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stop trading time for talent. Compare the traditional hiring model
              with our infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Old Way */}
            <div className="bg-white p-10 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-400"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 mr-3 text-sm">
                  ✕
                </span>
                Traditional Hiring
              </h3>
              <ul className="space-y-5">
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
            </div>

            {/* New Way */}
            <div className="bg-white p-10 rounded-3xl border border-blue-100 shadow-xl relative overflow-hidden ring-1 ring-blue-500/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0055ae]"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-[#0055ae] mr-3 text-sm">
                  ✓
                </span>
                SDR Global Infrastructure
              </h3>
              <ul className="space-y-5">
                {[
                  "Instant access to pre-vetted talent pool",
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
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Complete Sales Development Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SDR Global is more than a hiring platform. We provide an
              end-to-end solution for building and managing high-performance
              sales teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsFeatures.map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-xl transition-all"
              >
                <div className="text-5xl mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison & Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cost Comparison & Value Proposition
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A clear breakdown of the fully loaded costs of traditional hiring
              versus our managed model over a 6-month period.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Cost Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-red-600 uppercase tracking-wider">
                    Traditional Hiring
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#0055ae] uppercase tracking-wider">
                    SDR Global Model
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Recruitment & Sourcing
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    $15,000 (Agency fees & ads)
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-[#0055ae]">
                    Included
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Training & Onboarding
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    $25,000 (Tools + Time)
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-[#0055ae]">
                    Included (Pre-trained)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Management & Leader Time
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    $20,000 (20% of VP Sales time)
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-[#0055ae]">
                    Included (Dedicated Team Lead)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Ramp Time / Lost Productivity
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    $30,000 (3+ Months)
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-[#0055ae]">
                    Included (Day 1 Productivity)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-base font-bold text-gray-900">
                    Total Estimated Cost (6 Months)
                  </td>
                  <td className="px-6 py-4 text-base font-bold text-red-600">
                    $90,000+
                  </td>
                  <td className="px-6 py-4 text-base font-bold text-[#0055ae]">
                    $27,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section id="models" className="py-24 bg-white">
        <ModelsSection />
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We remove the complexity and risk from SDR hiring, so you can
              focus on growing your business.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full"></div>

            <div className="space-y-24">
              {processSteps.map((step, index) => (
                <ProcessStep key={step.step} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="companies-form"
        className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Start Building Your Pipeline
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form to get a customized proposal and discover how
                we can deploy a high-performing SDR team for you in under 48
                hours.
              </p>
              <ul className="space-y-4">
                {[
                  "✓ Access a global talent pool of 500+ certified SDRs",
                  "✓ AI-powered matching for your exact ICP",
                  "✓ No recruiting fees, no overhead",
                  "✓ Start booking meetings this week",
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
              <form className="space-y-6" onSubmit={handleHireFormSubmit}>
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name *
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.companyName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Business Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="yourName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    id="yourName"
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="yourRole"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Role *
                  </label>
                  <input
                    id="yourRole"
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.role ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your role at the company"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  {errors.role && (
                    <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="linkedinProfile"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your LinkedIn Profile *
                  </label>
                  <input
                    id="linkedinProfile"
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.linkedinProfile ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your LinkedIn Profile URL"
                    value={linkedinProfile}
                    onChange={(e) => setLinkedinProfile(e.target.value)}
                  />
                  {errors.linkedinProfile && (
                    <p className="text-red-500 text-sm mt-1">{errors.linkedinProfile}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="companySize"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Size
                  </label>
                  <select
                    id="companySize"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white ${
                      errors.companySize ? "border-red-500" : "border-gray-300"
                    }`}
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                  >
                    <option>Select company size</option>
                    <option value={"1-10"}>1-10 employees</option>
                    <option value={"11-50"}>11-50 employees</option>
                    <option value={"51-200"}>51-200 employees</option>
                    <option value={"201-1000"}>201-1000 employees</option>
                    <option value={"1000+"}>1000+ employees</option>
                  </select>
                  {errors.companySize && (
                    <p className="text-red-500 text-sm mt-1">{errors.companySize}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="goals"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message / Goals
                  </label>
                  <textarea
                    id="goals"
                    rows={3}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Leave additional message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                {loading ? (
                  <button
                    type="submit"
                    className="w-full bg-[#0055ae] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    <CircularProgress color="inherit" size={24} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-[#0055ae] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Submit Request
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
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
              className="inline-block px-6 py-3 bg-[#0055ae] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Our Sales Team
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section
        id="cta"
        className="py-24 bg-gradient-to-r from-[#0055ae] to-blue-700 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Sales Engine?
          </h2>
          <p className="text-xl text-blue-100 mb-4">
            Get a fully operational, pre-vetted sales team deployed within 48
            hours.
          </p>
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
            No long hiring cycles. No training overhead. No risk. Just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#companies-form"
              className="px-8 py-4 bg-white text-[#0055ae] rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
