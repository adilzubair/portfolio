import { FiSend } from "react-icons/fi";
import FormInput from "../Common/FormInput";
import { motion } from "framer-motion";
import { Reveal } from "../Common/Reveal";
import { useState } from "react";
import toast from "react-hot-toast";
import analytics from "../../utils/analytics";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://getform.io/f/aqomozwa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        analytics.trackFormSubmit(true);
      } else {
        toast.error("Failed to send message. Please try again.");
        analytics.trackFormSubmit(false);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      analytics.trackFormSubmit(false);
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col w-full lg:w-1/2 bg-gradient-to-br from-white to-blue-50/30 dark:from-[#0a0a0a] dark:to-blue-950/10 rounded-2xl shadow-2xl shadow-blue-200/30 dark:shadow-black/50 border-2 border-blue-100 dark:border-blue-900/30"
    >
      <div className="leading-normal">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-5 sm:p-6 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl text-left border border-blue-100 dark:border-blue-900/20"
        >
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-2xl sm:text-3xl mb-6">
            <Reveal width="100%">Leave a Message</Reveal>
          </h4>
          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            inputValue={formData.name}
            onChange={handleChange}
            placeholderText="Your Name"
            ariaLabelName="Name"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1 mb-2">{errors.name}</p>
          )}
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            inputValue={formData.email}
            onChange={handleChange}
            placeholderText="Your email"
            ariaLabelName="Email"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 mb-2">{errors.email}</p>
          )}
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            inputValue={formData.subject}
            onChange={handleChange}
            placeholderText="Subject"
            ariaLabelName="Subject"
            required
          />

          {errors.subject && (
            <p className="text-red-500 text-sm mt-1 mb-2">{errors.subject}</p>
          )}

          <div className="mt-4">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 bg-white dark:bg-[#0a0a0a] dark:text-white border border-black/10 dark:border-white/10 rounded-md shadow-sm text-md resize-none"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              cols="14"
              rows="3"
              aria-label="Message"
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative group"
            >
              <div className="absolute mt-6 -inset-0.5 bg-gradient-to-r from-blue-700 to-blue-600 rounded-lg blur opacity-50 group-hover:scale-105 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt z-0"></div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex items-center justify-center mt-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 px-8 rounded-xl font-bold tracking-wide transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubmitting ? "Sending..." : "Send"}
                <FiSend className="ml-2" />
              </button>
            </motion.div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
