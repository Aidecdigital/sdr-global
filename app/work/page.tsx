"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from '@mui/material';

const whyJoinBenefits = [
  {
    title: "Global Opportunities",
    description: "Work with companies across 50+ countries",
  },
  {
    title: "Performance-Based Growth",
    description: "Clear path to promotions and higher earnings",
  },
  {
    title: "Elite Company Partnerships",
    description: "Work with industry-leading organizations",
  },
  {
    title: "Continuous Development",
    description: "Ongoing training and skill enhancement",
  },
];

const networkStats = [
  { value: "50+", title: "Countries", subtitle: "Global reach" },
  { value: "200+", title: "Hiring Partners", subtitle: "Elite companies" },
  { value: "95%", title: "Placement Rate", subtitle: "Success rate" },
  { value: "Top Tier", title: "Compensation", subtitle: "Competitive packages" },
];

const trainingCurriculum = [
  {
    title: "Sales Fundamentals",
    description:
      "BANT qualification, buyer psychology, value proposition development",
  },
  {
    title: "Outbound Prospecting",
    description:
      "Cold outreach, email sequences, LinkedIn strategies, call techniques",
  },
  {
    title: "CRM & Tools Mastery",
    description:
      "Salesforce, HubSpot, Outreach, ZoomInfo, and sales enablement tools",
  },
  {
    title: "Advanced Sales Development",
    description:
      "Account-based marketing, multi-threading, pipeline management",
  },
];

const certificationRequirements = [
  "Complete 8-week training program",
  "Pass comprehensive written exam",
  "Demonstrate live prospecting skills",
  "Complete mock sales scenarios",
  "Maintain 85%+ quiz scores throughout",
];

const certificationBenefits = [
  "Preferred placement with top companies",
  "Significantly higher earning potential",
  "Faster career progression",
  "Industry-recognized credentials",
];

const activityMetrics = [
  "100+ touches per day (calls, emails, social)",
  "50+ conversations per week",
  "10+ qualified meetings per month",
  "Consistent pipeline contribution",
];

const qualityStandards = [
  "85%+ qualification accuracy",
  "Professional communication",
  "Data hygiene and compliance",
  "Continuous skill development",
];

const codeOfConduct = [
  "Integrity in all interactions",
  "Respect for clients and colleagues",
  "Confidentiality and data protection",
  "Ethical sales practices",
];

const developmentCommitment = [
  "Weekly coaching sessions",
  "Monthly performance reviews",
  "Ongoing training programs",
  "Career planning discussions",
];

const successStories = [
  {
    initials: "AJ",
    name: "Alex Johnson",
    title: "Senior SDR at TechCorp",
    quote:
      "Started as an SDR with SDR Global and was promoted to Senior SDR in 8 months. Now leading a team of 5.",
    progress: "Career Path: SDR → Senior SDR → Team Lead",
  },
  {
    initials: "MR",
    name: "Maria Rodriguez",
    title: "Account Executive at CloudTech",
    quote:
      "The training and certification gave me the foundation to transition into closing deals. Best career move ever.",
    progress: "Career Path: SDR → Account Executive",
  },
];

const applicationProcess = [
  {
    icon: "📝",
    step: 1,
    title: "Apply Online",
    description: "Submit your application",
  },
  {
    icon: "🎯",
    step: 2,
    title: "Assessment",
    description: "Skills and fit evaluation",
  },
  {
    icon: "🚀",
    step: 3,
    title: "Start Training",
    description: "Begin your journey",
  },
];

export default function Work() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [experience, setExperience] = useState("");
  const [whyJoin, setWhyJoin] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!cvFile) newErrors.cvFile = "CV is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWorkFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("linkedin", linkedin);
    formData.append("experience", experience);
    if (cvFile) formData.append("resume", cvFile);
    formData.append("whyJoin", whyJoin);

    try {
      await axios.post("/api/applicants", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Application submitted successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setLinkedin("");
      setExperience("");
      setWhyJoin("");
      setCvFile(null);
      setErrors({});
    } catch (err) {
      console.log(err);
      
      toast.error("There was an error submitting your application. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/training2.jpg" // Replace with actual image
            alt="SDR cohort in training at AIDEC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-white/10 backdrop-blur-sm mb-8 border border-white/20">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
            Join the Elite
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0055ae] mb-8 leading-tight">
            Launch Your Sales Career{"       "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
              Globally.
            </span>
          </h1>

          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Join SDR Global's elite talent network. Get trained, certified, and
            hired with top companies worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#talent-form"
              className="px-8 py-4 bg-[#0055ae] text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all shadow-lg"
            >
              Apply Now
            </Link>

            <Link
              href="/hire-sdrs"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all"
            >
              For Employers
            </Link>
          </div>
        </div>
      </section>

      {/* SDR Global Talent Network */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              SDR Global Talent Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured entry into global sales roles with performance-based
              opportunities and elite company partnerships.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Join Our Network?</h3>
              <div className="grid gap-4">
                {whyJoinBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 rounded-xl hover:bg-green-50 transition-colors border border-transparent hover:border-green-100"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {benefit.title}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {benefit.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Network Statistics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {networkStats.map((stat) => (
                  <div
                    key={stat.title}
                    className="text-center bg-white p-6 rounded-2xl shadow-sm"
                  >
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold">{stat.title}</div>
                    <div className="text-sm text-gray-600">{stat.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Certification Matters */}
          <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Certification Matters
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  This is not training for training’s sake — it is
                  infrastructure for performance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Zero Ramp Time",
                    desc: "Certified SDRs are productive from Day 1 — no onboarding drag, no learning curve delays.",
                    icon: (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    ),
                    color: "bg-amber-500",
                  },
                  {
                    title: "Reduced Hiring Risk",
                    desc: "All SDRs are evaluated and benchmarked before deployment, reducing performance uncertainty.",
                    icon: (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                    color: "bg-green-500",
                  },
                  {
                    title: "Consistent Quality",
                    desc: "Standardized training ensures every SDR meets the same global execution standard.",
                    icon: (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    ),
                    color: "bg-blue-500",
                  },
                  {
                    title: "Enterprise Readiness",
                    desc: "Our certification ensures SDRs are ready for complex, regulated, and high-stakes sales environments.",
                    icon: (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    ),
                    color: "bg-purple-500",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-3">
                      {item.title}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Training Framework */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Training Framework
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  A modular, performance-driven training system built for
                  real-world sales execution.
                </p>
              </div>

              <div className="grid lg:grid-cols-4 gap-6">
                {[
                  {
                    phase: "Phase 1",
                    title: "Sales Foundations",
                    items: [
                      "Prospecting methodologies",
                      "Qualification frameworks (BANT, MEDDICC)",
                      "Objection handling & discovery",
                    ],
                    color: "border-blue-500",
                  },
                  {
                    phase: "Phase 2",
                    title: "Tool Mastery",
                    items: [
                      "CRM systems (Salesforce, HubSpot)",
                      "Outreach platforms",
                      "Workflow execution & reporting",
                    ],
                    color: "border-indigo-500",
                  },
                  {
                    phase: "Phase 3",
                    title: "Communication Excellence",
                    items: [
                      "Cold calling frameworks",
                      "Email personalization",
                      "Executive-level conversations",
                    ],
                    color: "border-purple-500",
                  },
                  {
                    phase: "Phase 4",
                    title: "Industry Readiness",
                    items: [
                      "SaaS, Cybersecurity, Healthcare",
                      "Compliance & data handling",
                      "Regional selling standards",
                    ],
                    color: "border-pink-500",
                  },
                ].map((phase, i) => (
                  <div
                    key={i}
                    className={`bg-white p-8 rounded-2xl border-t-4 ${phase.color} shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
                      {phase.phase}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      {phase.title}
                    </h3>
                    <ul className="space-y-4 text-sm text-gray-600">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-3 shrink-0"
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
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Training & Certification */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industry-Aligned Training & Certification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sales development training with certification tied
              to real-world deployment and performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Training Curriculum</h3>
              <div className="space-y-4">
                {trainingCurriculum.map((item, index) => (
                  <div
                    key={item.title}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-200 transition-colors"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600 font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 ml-11">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">
                Certification Standards
              </h3>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <h4 className="text-xl font-semibold mb-4">
                  SDR Global Certification Requirements
                </h4>
                <div className="space-y-3">
                  {certificationRequirements.map((req) => (
                    <div key={req} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                <h4 className="text-lg font-semibold mb-3">
                  Certification Benefits
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {certificationBenefits.map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experience Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From ambitious entry-level SDRs to seasoned professionals, we
              match the right experience level to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1-2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Junior SDR
                </h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    High energy and motivation
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Quick learning curve</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Cost-effective scaling</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Strong cultural fit</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    35%
                  </div>
                  <div className="text-sm text-gray-600">
                    of our talent pool
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0055ae]">3-5</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Mid-Level SDR
                </h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Proven track record</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Advanced qualification skills
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    CRM and sales tool expertise
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Multi-touch campaign management
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0055ae] mb-1">
                    45%
                  </div>
                  <div className="text-sm text-gray-600">
                    of our talent pool
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">5+</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Senior SDR
                </h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Complex deal navigation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Executive relationship building
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Market intelligence expertise
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Team leadership capabilities
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    20%
                  </div>
                  <div className="text-sm text-gray-600">
                    of our talent pool
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations & Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Performance Accountability & Professional Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain high standards for performance and conduct to ensure
              success for our SDRs and our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Performance Expectations
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-3">
                    Activity Metrics
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    {activityMetrics.map((metric) => (
                      <li key={metric}>• {metric}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-3">
                    Quality Standards
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    {qualityStandards.map((standard) => (
                      <li key={standard}>• {standard}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Professional Conduct</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-3">
                    Code of Conduct
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    {codeOfConduct.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-3">
                    Development Commitment
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    {developmentCommitment.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mt-16 bg-green-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">
              SDR Success Stories
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {successStories.map((story) => (
                <div key={story.name} className="bg-green-800 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-800 font-bold mr-4">
                      {story.initials}
                    </div>
                    <div>
                      <div className="font-semibold">{story.name}</div>
                      <div className="text-sm opacity-75">{story.title}</div>
                    </div>
                  </div>
                  <p className="text-sm italic mb-4">"{story.quote}"</p>
                  <div className="text-sm opacity-75">{story.progress}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="py-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900">How to Join</h3>
              <p className="text-gray-600">Simple steps to launch your career</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
              {applicationProcess.map((step, index) => (
                <div key={step.step} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 w-full max-w-xs text-center relative z-10">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                    {step.icon}
                  </div>
                  <div className="text-sm font-bold text-[#0055ae] uppercase tracking-wide mb-1">Step {step.step}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Talent Application Form Section */}
      <section id="talent-form" className="py-24 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Apply to Join the Network
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to accelerate your sales career? Fill out the form below and our talent team will review your profile within 48 hours.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleWorkFormSubmit} encType="multipart/form-data">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    </div>
                    <input id="first-name" name="first-name" type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0055ae] focus:border-transparent transition-shadow ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`} placeholder="First name" />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    </div>
                    <input id="last-name" name="last-name" type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0055ae] focus:border-transparent transition-shadow ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`} placeholder="Last name" />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                    </div>
                    <input id="email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0055ae] focus:border-transparent transition-shadow ${errors.email ? 'border-red-500' : 'border-gray-300'}`} placeholder="your.email@example.com" />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                    </div>
                    <input id="phone" name="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055ae] focus:border-transparent transition-shadow" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile URL</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0l-1.5-1.5a2 2 0 112.828-2.828l1.5 1.5 3-3z" clipRule="evenodd" /><path fillRule="evenodd" d="M6.414 11.586a2 2 0 10-2.828 2.828l3 3a2 2 0 002.828 0l1.5-1.5a2 2 0 10-2.828-2.828l-1.5 1.5-3-3z" clipRule="evenodd" /></svg>
                    </div>
                    <input id="linkedin" name="linkedin" type="url" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055ae] focus:border-transparent transition-shadow" placeholder="https://linkedin.com/in/..." />
                  </div>
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Years of Sales Experience</label>
                  <select id="experience" name="experience" value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055ae] focus:border-transparent bg-white transition-shadow">
                    <option value="">Select experience level</option>
                    <option>0-1 years</option>
                    <option>1-3 years</option>
                    <option>3-5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">Upload CV *</label>
                <input
                  id="cv"
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={(e) => setCvFile(e.target.files ? e.target.files[0] : null)}
                  className="w-full"
                />
                {errors.cvFile && <p className="text-red-500 text-sm mt-1">{errors.cvFile}</p>}
              </div>

              <div>
                <label htmlFor="why-join" className="block text-sm font-medium text-gray-700 mb-2">Why do you want to join SDR Global?</label>
                <textarea
                  id="why-join"
                  name="why-join"
                  rows={4}
                  value={whyJoin}
                  onChange={(e) => setWhyJoin(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055ae] focus:border-transparent transition-shadow"
                  placeholder="Tell us about your career goals and why SDR Global..."
                ></textarea>
              </div>

              <div className="pt-4">
                {loading ? (
                  <button
                    type="submit"
                    className="w-full bg-[#0055ae] text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex justify-center"
                    disabled
                  >
                    <CircularProgress color="inherit" size={24} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-[#0055ae] text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
