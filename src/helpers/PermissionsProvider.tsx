import React, { createContext, useState, useContext, ReactNode } from "react";

interface PermissionsContextType {
  hasPermissions: boolean;
  setHasPermissions: React.Dispatch<React.SetStateAction<boolean>>;
}

const PermissionsContext = createContext<PermissionsContextType>({
  hasPermissions: false,
  setHasPermissions: () => {},
});

interface PermissionsProviderProps {
  children: ReactNode;
}

export const usePermissions = () => useContext(PermissionsContext);

export const PermissionsProvider: React.FC<PermissionsProviderProps> = ({
  children,
}) => {
  const [hasPermissions, setHasPermissions] = useState<boolean>(true);

  return (
    <PermissionsContext.Provider value={{ hasPermissions, setHasPermissions }}>
      {children}
    </PermissionsContext.Provider>
  );
};
