import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiRequest from "../utils/apiRequest";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [myProfile, setMyProfile] = useState({});
  const [jobs, setJobs] = useState([]);
  const [jobIsLoading, setJobIsLoading] = useState(true);
  const [jobItem, setJobItem] = useState(null);
  const [isApplied, setIsApplied] = useState(false);

  const navigate = useNavigate();
  // apply for jobs
  const applyForJob = async (id) => {
    try {
      const { data } = await apiRequest.post(`/api/apply/${id}`);
      if (data.success) {
        toast.success(data.message);
        getUserData();
        setLoading(false);
      } else {
        toast.error(data.message);
        setIsApplied(true);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }
  };

  // verify email
  const sendVerificationOtp = async () => {
    try {
      const { data } = await apiRequest.post(
        "/api/auth/send-verify-otp"
      );
      if (data.success) {
        navigate("/email-verification");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }
  };

  // fetch user profile

  const fetchProfile = async (id) => {
    try {
      const { data } = await apiRequest.get(`/api/user/profile/${id}`);
      if (data.success) {
        setMyProfile(data.profile);
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }
  };

  // fetch all jobs
  const fetchAllJobs = async () => {
    const { data } = await apiRequest.get("/api/fetch-jobs");
    if (data.success) {
      setJobs(data.allJobs);
      setJobIsLoading(false);
      setJobItem(data.allJobs[0]); // Default to first job
    }
  };

  //   getting user data
  const getUserData = async () => {
    setIsLoading(true);

    try {
      const { data } = await apiRequest.get( "/api/user/data");
      data.success ? setUserData(data.userData) : toast.error(data.message);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  useEffect(() => {
    fetchAllJobs();
  }, []);
  const value = {
    isApplied,
    applyForJob,
    jobIsLoading,
    jobItem,
    setJobItem,
    jobs,
    fetchAllJobs,
    navigate,
    sendVerificationOtp,
    loading,
    fetchProfile,
    myProfile,
    backendUrl,
    isLoading,
    setIsLoading,
    userData,
    setUserData,
    getUserData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
