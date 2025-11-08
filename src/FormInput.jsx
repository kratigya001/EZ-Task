import React from "react";

const FormInput = ({ label, name, type = "text", required = false }) => {
  return (
    <div className="relative mb-6">
      <input
        type={type}
        id={name}
        name={name}
        placeholder={label + (required ? "*" : "")}
        required={required}
        className="w-full bg-transparent border-b border-[#0F3255]/30 focus:border-[#E87A5E] text-[#0F3255] placeholder:text-[#0F3255]/60 outline-none py-3 transition-colors"
      />
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
    </div>
  );
};

export default FormInput;
