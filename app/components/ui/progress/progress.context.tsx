import React, { createContext, useContext, useState } from 'react';

export type ProgressContextType = {
  value: number; // The current progress value
  setValue: (newValue: number) => void; // Function to set the progress value
};

type ProgressProviderProps = {
  initialValue?: number; // Initial value for progress
  children: React.ReactNode; // Child components
};

const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined
);

// Custom hook to access the ProgressContext
export const useProgressContext = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('Higher order component should be wrapped with ProgressProvider');
  }
  return context;
};

// Provider component to manage the progress state
export const ProgressProvider: React.FC<ProgressProviderProps> = ({
  initialValue,
  children,
}) => {
  // State to manage the progress value
  const [value, setValue] = useState<number>(initialValue || 0);

  return (
    <ProgressContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
