import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
  skillPoints: Record<string, number>;
  setSkillPoints: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userName, setUserName] = useState<string>("");
  const [skillPoints, setSkillPoints] = useState<Record<string, number>>({
    Strength: 0,
    Dexterity: 0,
    Speech: 0,
  });

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        skillPoints,
        setSkillPoints,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
