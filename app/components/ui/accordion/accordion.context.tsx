import React, { createContext, useContext, useState } from 'react';

export type AccordionContextType = {
  active: string | null; // The current progress value
  setActive: (newActive: string | null) => void; // Function to set the progress value
};

type AccordionProviderProps = {
  initialActive?: string; // Initial value for progress
  children: React.ReactNode; // Child components
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

// Custom hook to access the ProgressContext
export const useAccordionContext = (): AccordionContextType => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Higher order component should be wrapped with ProgressProvider');
  }
  return context;
};

// Provider component to manage the progress state
export const AccordionProvider: React.FC<AccordionProviderProps> = ({
  children,
}) => {
  // State to manage the progress value
  const [active, setActive] = useState<string | null>(null);

  return (
    <AccordionContext.Provider
      value={{
        active,
        setActive,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};
