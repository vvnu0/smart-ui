import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  return (
    <UserContext.Provider
      value={{
        loggedInStatus,
        userDetails,
        setLoggedInStatus,
        setUserDetails
      }}
    >
      {children}
    </UserContext.Provider>
  );
};