import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import colors from "@/constants/color";

const services = ["Web Development", "UI/UX Design", "Consulting", "SEO Optimization"];
const budgets = ["< $500", "$500 - $2000", "$2000 - $5000", "> $5000"];

export default function HireMeSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<number | null>(null);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    if (!agree) return setError("You must agree to continue.");
    if (!form.firstName || !form.lastName || !form.email) return setError("All fields are required.");
    if (selectedService === null || selectedBudget === null) return setError("Please select a service and budget.");
    setSubmitting(true);
    try {
      // Replace with your API endpoint
      const res = await fetch("/api/hire-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: services[selectedService],
          budget: budgets[selectedBudget],
          ...form,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSuccess(true);
      setForm({ firstName: "", lastName: "", email: "" });
      setSelectedService(null);
      setSelectedBudget(null);
      setAgree(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[80%] mx-auto mt-16 bg-transparent flex flex-col gap-8"
    >
      <h1 className="text-8xl font-semibold text-white mb-2">Hire Me</h1>
      <div className="text-4xl text-gray-400 mb-4">Services</div>
      <div className="flex flex-wrap gap-6 mb-6">
        {services?.map((service, i) => (
          <div
            key={service}
            className={`relative min-w-[180px] px-8 py-5 cursor-pointer border border-white text-lg font-semibold transition-all duration-300 flex items-center justify-center text-center
              ${selectedService === i ? "text-white" : "text-white"}
            `}
            style={selectedService === i ? {
              background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primary} 60%, ${colors.secondary} 100%)`,
              boxShadow: `0 4px 24px 0 ${colors.primary}33`
            } : { background: "#000" }}
            onClick={() => setSelectedService(i)}
          >
            {selectedService === i && (
              <span className="absolute top-2 left-2 bg-white rounded-full p-0.5 shadow-md flex items-center justify-center">
                <FaCheck className="text-[#D018B7] text-base" />
              </span>
            )}
            {service}
          </div>
        ))}
      </div>
      <div className="mt-3 text-4xl text-gray-400 mb-4">Budget in USD</div>
      <div className="flex flex-wrap gap-6 mb-6">
        {budgets.map((budget, i) => (
          <div
            key={budget}
            className={`relative min-w-[180px] px-8 py-5 cursor-pointer border border-white text-lg font-semibold transition-all duration-300 flex items-center justify-center text-center
              ${selectedBudget === i ? "text-white" : "text-white"}
            `}
            style={selectedBudget === i ? {
              background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primary} 60%, ${colors.secondary} 100%)`,
              boxShadow: `0 4px 24px 0 ${colors.primary}33`
            } : { background: "#000" }}
            onClick={() => setSelectedBudget(i)}
          >
            {selectedBudget === i && (
              <span className="absolute top-2 left-2 bg-white rounded-full p-0.5 shadow-md flex items-center justify-center">
                <FaCheck className="text-[#D018B7] text-base" />
              </span>
            )}
            {budget}
          </div>
        ))}
      </div>
      <div className="mt-3 text-4xl text-gray-400 mb-2">Personal Data</div>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleInput}
          className="bg-transparent border-0 border-b-2 border-white text-white text-lg px-2 py-2 focus:outline-none focus:border-primary placeholder-gray-400 transition-all flex-1"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleInput}
          className="bg-transparent border-0 border-b-2 border-white text-white text-lg px-2 py-2 focus:outline-none focus:border-primary placeholder-gray-400 transition-all flex-1"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInput}
          className="bg-transparent border-0 border-b-2 border-white text-white text-lg px-2 py-2 focus:outline-none focus:border-primary placeholder-gray-400 transition-all flex-1"
        />
      </div>
      <div className="flex items-center gap-3 mb-6">
        <input
          type="checkbox"
          id="agree"
          checked={agree}
          onChange={e => setAgree(e.target.checked)}
          className="w-5 h-5 appearance-none border-2 border-white rounded-md checked:bg-pink-500 checked:border-pink-500 checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3 checked:after:rounded-sm checked:after:bg-black focus:outline-none transition-all duration-200 relative"
          style={{ boxShadow: '0 0 0 2px #fff' }}
        />
        <label htmlFor="agree" className="text-gray-300 text-base cursor-pointer">
          I agree to the terms and conditions
        </label>
      </div>
      {error && <div className="text-red-500 font-semibold mb-2">{error}</div>}
      {success && <div className="text-green-500 font-semibold mb-2">Submitted successfully!</div>}
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 w-full py-3 rounded-full font-bold text-lg text-white bg-gradient-to-r from-[#D018B7] to-[#430A63] shadow-lg transition-all disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Hire Me"}
      </button>
    </form>
  );
}
