// src/ContactForm.jsx
import React, { useState } from "react";
import FormInput from "./FormInput";

const ENDPOINT = "https://vernanbackend.ezlab.in/api/contact-us/";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverResponse, setServerResponse] = useState(null); 

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!emailRegex.test(form.email.trim())) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    if (form.phone && !/^[0-9+\-\s()]{6,20}$/.test(form.phone)) e.phone = "Enter a valid phone";
    return e;
  };

  const handleChange = (name) => (ev) => {
    setForm((s) => ({ ...s, [name]: ev.target.value }));
    setErrors((s) => ({ ...s, [name]: "" }));
    setServerError("");
    setSubmitted(false);
  };


  const handleSubmit = async (ev) => {
   ev.preventDefault();
   setServerError("");
   setSubmitted(false);
   setServerResponse(null);

  const v = validate();
  if (Object.keys(v).length) {
    setErrors(v);
    return;
  }

  setLoading(true);
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      }),
    });

    // Log status and headers for debugging
    console.log("Fetch response (status):", res.status, res.statusText);
    console.log("Fetch response headers:", Array.from(res.headers.entries()));

    // Try to parse JSON (may throw if body empty)
    let json = null;
    try {
      json = await res.json();
      console.log("Parsed JSON response:", json);
    } catch (parseErr) {
      console.warn("Response body not JSON or empty:", parseErr);
    }

    // Consider 200 or 201 as success (change if backend strictly uses 200)
    if (res.ok && (res.status === 200 || res.status === 201)) {
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      setSubmitted(true);
      setServerResponse({ status: res.status, body: json });
    } else {
      // server side error - try to show meaningful message
      const message =
        (json && (json.message || json.detail || JSON.stringify(json))) ||
        `Server returned status ${res.status}`;
      setServerError(message);
      setServerResponse({ status: res.status, body: json });
    }
  } catch (err) {
    // network/CORS errors end up here
    console.error("Network / fetch error:", err);
    setServerError("Network error — check console or Network tab (possible CORS).");
  } finally {
    setLoading(false);
  }
};

  return (
    <form onSubmit={handleSubmit} method="POST" noValidate>
      <div className="grid gap-4">
        <FormInput
          label="Your name"
          name="name"
          value={form.name}
          onChange={handleChange("name")}
          required
          error={errors.name}
        />

        <FormInput
          label="Your email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange("email")}
          required
          error={errors.email}
        />

        <FormInput
          label="Phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange("phone")}
          error={errors.phone}
        />

        <div className="relative mb-4">
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message*"
            value={form.message}
            onChange={handleChange("message")}
            required
            className={`w-full bg-transparent border-b border-[#0F3255]/30 focus:border-[#E87A5E] text-[#0F3255] placeholder:text-[#0F3255]/60 outline-none py-3 transition-colors ${
              errors.message ? "border-red-500" : ""
            }`}
          />
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {serverError && (
          <p className="text-red-600 text-sm mb-1">{serverError}</p>
        )}

        <div className="flex flex-col items-start">
          <button
            type="submit"
            disabled={loading}
            className={`px-10 py-3 bg-[#E87A5E] text-white text-md font-medium rounded-full hover:bg-opacity-90 transition-all ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {/* EXACTLY under the submit button */}
          {/* under the "Form Submitted" message area */}
            <div className="mt-3">
              {submitted && (
                <p className="text-green-600 text-sm mt-1 font-medium">Form Submitted</p>
              )}

              {/* show server response for debugging */}
              {serverResponse && (
                <div className="mt-2 text-sm bg-gray-50 p-2 rounded border">
                  <strong>API status:</strong> {serverResponse.status}
                  <pre className="whitespace-pre-wrap text-xs mt-1">{JSON.stringify(serverResponse.body, null, 2)}</pre>
                </div>
              )}
            </div>---

        </div>
      </div>
    </form>
  );
}
