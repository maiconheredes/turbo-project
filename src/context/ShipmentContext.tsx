"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ShipmentContextType = {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
};

const ShipmentContext = createContext<ShipmentContextType | undefined>(undefined);

export function ShipmentProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  function login(username: string) {
    setUser(username);
  }

  function logout() {
    setUser(null);
  }

  const value: ShipmentContextType = {
    user,
    login,
    logout,
  };

  return (
    <ShipmentContext.Provider {...{ value }}>
      {children}
    </ShipmentContext.Provider>
  );
};

export function useShipmentContext() {
  const context = useContext(ShipmentContext);

  if (!context) {
    throw new Error("useShipmentContext must be used within an ShipmentProvider");
  }

  return context;
};
