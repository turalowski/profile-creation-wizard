import React, { createContext, useContext, useState } from 'react';

export type AccordionContextType = {
  active: string | null; // Value of open accordion item
  setActive: (newActive: string | null) => void; // Function to set new open accordion item
};

type AccordionProviderProps = {
  children: React.ReactNode; // child components
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

// Custom hook to access the AccordionContext
export const useAccordionContext = (): AccordionContextType => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Higher order component should be wrapped with Accordion Provider');
  }
  return context;
};

// Provider component to manage the accordion state
export const AccordionProvider: React.FC<AccordionProviderProps> = ({
  children,
}) => {
  // State to manage the accordion value
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
