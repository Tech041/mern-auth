import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
const JobFormSchema = z.object({
  profession: z.string().min(1, { message: "Profession is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  salary: z.string().min(1, { message: "Salary is required" }),
  requirements: z.string().min(1, { message: "Requirements is required" }),
  jobDescription: z.string().min(1, { message: "Job description is required" }),
  postedBy: z.string().min(1, { message: "Posted by is required" }),
  email: z.string().min(1, { message: "Email is required" }),
});
const JobForm = () => {
  const [formData, setFormData] = useState({
    profession: "",
    title: "",
    salary: "",
    requirements: "",
    jobDescription: "",
    postedBy: "",
    email: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(JobFormSchema),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitJobForm = (e) => {
    e.preventDefault();
    console.log(formData);
    reset();
    // Add submission logic here
  };

  return (
    <div className="w-full h-full flex justify-center items-center pt-10 mb-5">
      <div className="container">
        <div className="mt-5">
          <h2 className="text-2xl font-bold mb-6 text-center">Post a Job</h2>
          <form
            onSubmit={handleSubmit(handleSubmitJobForm)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="w-full flex flex-col">
              <input
                {...register("profession")}
                type="text"
                name="profession"
                placeholder="Profession"
                value={formData.profession}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
              />
              {errors.profession && (
                <p className="text-red-600">{errors.profession.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col">
              <input
                {...register("title")}
                type="text"
                name="title"
                placeholder="Job Title"
                value={formData.title}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
              />
              {errors.title && (
                <p className="text-red-600">{errors.title.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col">
              <input
                {...register("salary")}
                type="text"
                name="salary"
                placeholder="Salary"
                value={formData.salary}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
              />
              {errors.salary && (
                <p className="text-red-600">{errors.salary.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col">
              <input
                {...register("requirements")}
                type="text"
                name="requirements"
                placeholder="Requirements"
                value={formData.requirements}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
              />
              {errors.requirements && (
                <p className="text-red-600">{errors.requirements.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col md:col-span-2">
              <textarea
                {...register("jobDescription")}
                name="jobDescription"
                placeholder="Job Description"
                value={formData.jobDescription}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
              />
              {errors.jobDescription && (
                <p className="text-red-600">{errors.jobDescription.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col">
              <input
                {...register("postedBy")}
                type="text"
                name="postedBy"
                placeholder="Posted by"
                value={formData.postedBy}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
              />
              {errors.postedBy && (
                <p className="text-red-600">{errors.postedBy.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col">
              <input
                {...register("email")}
                type="email"
                name="email"
                placeholder="Contact Email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="w-full md:col-span-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded w-full"
              >
                Submit Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
