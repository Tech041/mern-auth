import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiRequest from "../utils/apiRequest";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  //   verifying authentication
  // const getAuthState = async () => {
  //   try {
  //     const { data } = await apiRequest.get(backendUrl + "/api/auth/is-auth");
  //     if (data.success) {
  //       getUserData();
  //     }
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  //   getting user data
  const getUserData = async () => {
    setIsLoading(true);

    try {
      const { data } = await apiRequest.get(backendUrl + "/api/user/data");
      data.success ? setUserData(data.userData) : toast.error(data.message);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  const value = {
    backendUrl,
    isLoading,
    setIsLoading,
    userData,
    setUserData,
    getUserData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
