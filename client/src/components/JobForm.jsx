import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import apiRequest from "../utils/apiRequest";
import { toast } from "react-toastify";
const JobFormSchema = z.object({
  profession: z.string().min(1, { message: "Profession is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  salary: z.string().min(1, { message: "Salary is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  requirements: z.string().min(1, { message: "Requirements is required" }),
  jobDescription: z.string().min(1, { message: "Job description is required" }),
  postedBy: z.string().min(1, { message: "Posted by is required" }),
  email: z
    .string()
    .email("Invalid email")
    .min(1, { message: "Email is required" }),
});
const JobForm = () => {
  const { userData } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(JobFormSchema),
  });

  const handleSubmitJobForm = async (job) => {
    try {
      const { data } = await apiRequest.post("/api/post-job", job);

      if (data.success) {
        toast.success(data.message);
        reset();
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center pt-10 mb-5">
      <div className="container">
        <div className="mt-5">
          <h2
            className={`${
              !userData?.isAccountVerified ? "text-red-500" : ""
            } text-2xl font-bold mb-6 text-center`}
          >
            {!userData?.isAccountVerified
              ? "Login and verify your email before posting any jobs"
              : "Post a Job"}
          </h2>
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
                className="border rounded px-3 py-2 w-full"
              />
              {errors.salary && (
                <p className="text-red-600">{errors.salary.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col">
              <input
                {...register("location")}
                type="text"
                name="location"
                placeholder="Location"
                className="border rounded px-3 py-2 w-full"
              />
              {errors.location && (
                <p className="text-red-600">{errors.location.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col md:col-span-2">
              <textarea
                {...register("requirements")}
                name="requirements"
                placeholder="Requirements"
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
