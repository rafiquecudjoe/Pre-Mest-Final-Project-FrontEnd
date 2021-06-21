import React, { useState, useMemo } from "react";

// create context
export const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  const values = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
    }),
    [isSidebarOpen]
  );

  return (
    <SidebarContext.Provider value={values }>
      {children}
    </SidebarContext.Provider>
  );
};
