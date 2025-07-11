import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppContext } from "../context/AppContext";
import apiRequest from "../utils/apiRequest";
import { toast } from "react-toastify";

const CreateProfileschema = z.object({
  name: z.string().min(2, "Name is required"),
  profession: z.string().min(2, "Profession is required"),
  university: z.string().min(1, { message: "University is required" }),
  nationality: z.string().min(1, { message: "Nationality is required" }),
  phone: z.string().min(1, "Phone number is required"),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email"),

  cv: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "CV is required")
    .refine(
      (files) =>
        Array.from(files).every(
          (file) =>
            file.size < 1024 * 1024 &&
            (file.type === "application/pdf" ||
              file.type === "application/msword" ||
              file.type ===
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
        ),
      "File must be a PDF or Word document and less than 1MB"
    ),
});

const CreateProfile = () => {
  const { userData, isLoading, getUserData, navigate } = useContext(AppContext);
  
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateProfileschema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("profession", data.profession);
    formData.append("university", data.university);
    formData.append("nationality", data.nationality);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("cv", data.cv[0]);

    try {
      const { data } = await apiRequest.post(
        "api/user/create-profile",
        formData
      );
      if (data.success) {
        toast.success(data.message);
        getUserData();
        navigate("/");
        reset();
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }
    // for (let pair of formData.entries()) {
    //   console.log(`${pair[0]}:`, pair[1]);
    // }

    reset();
  };

  useEffect(() => {
    if (userData === null && !isLoading) {
      navigate("/login");
    }
  }, [userData, isLoading]);

  return (
    <section className="w-full min-h-screen pt-20 mb-5">
      <div className="container">
        <div className="pt-10 w-full h-full">
          <h1 className="text-center font-semibold text-xl md:text-2xl capitalize">
            Create a Profile with us
          </h1>
          <p className="capitalize text-center py-3 text-sm ">
            By creating a profile, you can now post or apply for jobs.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto p-4 bg-white rounded shadow"
          >
            {[
              { label: "Full Name", name: "name", type: "text" },
              { label: "Profession", name: "profession", type: "text" },
              { label: "University", name: "university", type: "text" },
              { label: "Nationality", name: "nationality", type: "text" },
              { label: "Phone Number", name: "phone", type: "tel" },
              { label: "Email Address", name: "email", type: "email" },
            ].map(({ label, name, type }) => (
              <div key={name} className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  {...register(name)}
                  className="w-full border border-gray-300 rounded px-2 py-1"
                />
                {errors[name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[name].message}
                  </p>
                )}
              </div>
            ))}

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Upload CV
              </label>
              <input
                type="file"
                {...register("cv")}
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
              <p className="text-center  text-sm text-gray-500">
                PDF or Doc format less than 1MB
              </p>
              {errors.cv && (
                <p className="text-red-500 text-sm mt-1">{errors.cv.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateProfile;
