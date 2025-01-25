import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ContactForm = () => {
  const contactSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    budget: yup
      .string()
      .required("Budget is required")
      .test(
        "min-budget",
        "Budget should be at least 2 cr",
        (value) => !value || parseFloat(value) >= 2
      ),
    message: yup
      .string()
      .min(10, "Message too short")
      .required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

 const onSubmit = async (data) => {
   try {
     const response = await fetch("http://localhost:8000/process_form.php", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
     });

     if (response.ok) {
       alert("Form submitted successfully!");
       reset();
     } else {
       throw new Error("Form submission failed");
     }
   } catch (error) {
     console.error("Submission error:", error);
     alert("Submission failed. Please try again.");
   }
 };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("name")}
            placeholder="Name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black/20"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="Email"
            type="email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black/20"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("phone")}
            placeholder="Phone"
            type="tel"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black/20"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("budget")}
            placeholder="Budget (in cr)"
            type="number"
            step="0.1"
            min="2"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black/20"
          />
          {errors.budget && (
            <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register("message")}
            placeholder="Message"
            className="w-full p-2 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-black/20"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded hover:bg-opacity-90 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
