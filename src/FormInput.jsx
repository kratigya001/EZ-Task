import React from "react";

const FormInput = ({
  label,
  name,
  type = "text",
  required = false,
  value, 
  onChange, 
  error, 
}) => {
  return (
    <div className="relative mb-2">
      <input
        type={type}
        id={name}
        name={name}
        placeholder={label + (required ? "*" : "")}
        required={required}
        value={value} 
        onChange={onChange} 
        className={`w-full bg-transparent border-b border-[#0F3255]/30 focus:border-[#E87A5E] text-[#0F3255] placeholder:text-[#0F3255]/60 outline-none py-3 transition-colors ${
          error ? "border-red-500" : "" 
        }`}
      />
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      {/* ADDED error message display */}
      {error && (
        <p className="text-red-600 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default FormInput;