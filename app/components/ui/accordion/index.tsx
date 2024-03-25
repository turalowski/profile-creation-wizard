import React from 'react';
import clsx from 'clsx';
import { ArrowDownIcon, ArrowUpIcon } from '../icons';
import {
  AccordionProvider,
  useAccordionContext,
} from '@/app/components/ui/accordion/accordion.context';
import {
  AccordionItemProvider,
  useAccordionItemContext,
} from '@/app/components/ui/accordion/accordion-item.context';

interface AccordionElementProps extends React.HTMLAttributes<HTMLDivElement>{
  value: string;
  className?: string;
  children: React.ReactNode;
};
interface ButtonElementProps extends React.HTMLAttributes<HTMLButtonElement>{}


const Accordion: React.FC<Omit<AccordionElementProps, 'value'>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <AccordionProvider>
      <div className={clsx('border rounded-md', className)} {...rest}>
        {children}
      </div>
    </AccordionProvider>
  );
};

const AccordionItem: React.FC<AccordionElementProps> = ({
  value,
  className,
  children,
  ...rest
}) => {
  return (
    <AccordionItemProvider initialValue={value}>
      <div
        role="region"
        aria-labelledby={`accordion-header-${value}`}
        className="border-b"
        {...rest}
      >
        {children}
      </div>
    </AccordionItemProvider>
  );
};

const AccordionHeader: React.FC<Omit<ButtonElementProps, 'value'>> = ({
  className,
  children,
  ...rest
}) => {
  const { active, setActive } = useAccordionContext();
  const { value } = useAccordionItemContext();
  const isOpen = active === value;

  const toggleItem = () => {
    if (isOpen) {
      setActive(null);
    } else {
      setActive(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      toggleItem();
    }
  };

  const onClick = () => {
    toggleItem();
  };

  return (
    <button
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${value}`}
      className={clsx('flex justify-between', 'p-6 w-full', className)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <h3 className={clsx('flex items-center gap-3')}>{children}</h3>
      <span className="flex items-center gap-3">
        <span className="text-secondaryText">{isOpen ? 'Hide' : 'Show'}</span>
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </span>
    </button>
  );
};

const AccordionContent: React.FC<Omit<AccordionElementProps, 'value'>> = ({
  className,
  children,
  ...rest
}) => {
  const { active } = useAccordionContext();
  const { value } = useAccordionItemContext();

  if (active !== value) {
    return null;
  }

  return (
    <div
      aria-hidden="false"
      role="region"
      className={clsx(
        'p-6',
        'overflow-hidden transition-max-height duration-10000 ease-in-out'
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export { Accordion, AccordionItem, AccordionHeader, AccordionContent };
