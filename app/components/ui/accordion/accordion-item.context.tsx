import React, { createContext, useContext, useState } from 'react';

export type AccordionItemContextType = {
  value: string; // The current progress value
  setValue: (value: string) => void; // Function to set the progress value
};

type AccordionItemProviderProps = {
  initialValue: string; // Initial value for progress
children: React.ReactNode; // Child components
};

const AccordionItemContext = createContext<AccordionItemContextType | undefined>(
  undefined
);

// Custom hook to access the ProgressContext
export const useAccordionItemContext = (): AccordionItemContextType => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('Higher order component should be wrapped with ProgressProvider');
  }
  return context;
};

// Provider component to manage the progress state
export const AccordionItemProvider: React.FC<AccordionItemProviderProps> = ({
  initialValue,
  children,
}) => {
  // State to manage the progress value
  const [value, setValue] = useState<string>(initialValue);

  return (
    <AccordionItemContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </AccordionItemContext.Provider>
  );
};
