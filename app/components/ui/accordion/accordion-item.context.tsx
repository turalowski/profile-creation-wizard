import React, { createContext, useContext, useState } from 'react';

export type AccordionItemContextType = {
  value: string; // value of accordion item
  setValue: (value: string) => void; // set value of accordion item
};

type AccordionItemProviderProps = {
  initialValue: string; // initial value of accordion item
  children: React.ReactNode; // child components
};

const AccordionItemContext = createContext<
  AccordionItemContextType | undefined
>(undefined);

// Custom hook to access the ProgressContext
export const useAccordionItemContext = (): AccordionItemContextType => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      'Higher order component should be wrapped with AccordionItem provider'
    );
  }
  return context;
};

// Provider component to manage the accordion item state
export const AccordionItemProvider: React.FC<AccordionItemProviderProps> = ({
  initialValue,
  children,
}) => {
  // State to manage the accordion item value
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
