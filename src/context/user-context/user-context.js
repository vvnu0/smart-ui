import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [residentDetail, setResidentDetail] = useState(null);

  return (
    <UserContext.Provider
      value={{
        loggedInStatus,
        userDetails,
        residentDetail,
        setLoggedInStatus,
        setUserDetails,
        setResidentDetail
      }}
    >
      {children}
    </UserContext.Provider>
  );
};