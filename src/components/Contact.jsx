import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    specifyCountry: "",
    isQuarryOwner: false,
    quarryOwnerDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending to an API
    console.log("Form Submitted", formData);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Your Full Name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Your Email Address"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Your Message"
                rows="5"
                required
              />
            </div>

            {/* Address Fields */}
            <div className="mb-6">
              <label
                htmlFor="addressLine1"
                className="block text-gray-700 font-medium mb-2"
              >
                Address Line 1
              </label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Address Line 1"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="addressLine2"
                className="block text-gray-700 font-medium mb-2"
              >
                Address Line 2
              </label>
              <input
                type="text"
                id="addressLine2"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Address Line 2 (Optional)"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="city"
                className="block text-gray-700 font-medium mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="City"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="state"
                className="block text-gray-700 font-medium mb-2"
              >
                State / Province / Region
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="State / Province / Region"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="postalCode"
                className="block text-gray-700 font-medium mb-2"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Postal Code"
                required
              />
            </div>

            {/* Country Dropdown */}
            <div className="mb-6">
              <label
                htmlFor="country"
                className="block text-gray-700 font-medium mb-2"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="">--- Select Country ---</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
                {/* Add more countries as needed */}
              </select>
            </div>

            {/* Specify Country Field */}
            {formData.country === "" && (
              <div className="mb-6">
                <label
                  htmlFor="specifyCountry"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Specify Your Country
                </label>
                <input
                  type="text"
                  id="specifyCountry"
                  name="specifyCountry"
                  value={formData.specifyCountry}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your country"
                />
              </div>
            )}

            {/* Quarry Owner Section */}
            <div className="mb-6">
              <label
                htmlFor="isQuarryOwner"
                className="flex items-center text-gray-700 font-medium"
              >
                <input
                  type="checkbox"
                  id="isQuarryOwner"
                  name="isQuarryOwner"
                  checked={formData.isQuarryOwner}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Quarry Owner
              </label>
            </div>

            {formData.isQuarryOwner && (
              <div className="mb-6">
                <label
                  htmlFor="quarryOwnerDescription"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Quarry Owner Description
                </label>
                <textarea
                  id="quarryOwnerDescription"
                  name="quarryOwnerDescription"
                  value={formData.quarryOwnerDescription}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Provide a description"
                  rows="5"
                />
              </div>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-40 bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
