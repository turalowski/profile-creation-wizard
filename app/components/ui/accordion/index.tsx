import React from 'react';
import clsx from 'clsx';
import { ArrowDownIcon, ArrowUpIcon } from '../icons';
import {
  AccordionProvider,
  useAccordionContext,
} from '@/app/contexts/accordion';
import {
  AccordionItemProvider,
  useAccordionItemContext,
} from '@/app/contexts/accordion-item';

export type DivElementProps = React.HTMLAttributes<HTMLDivElement>

interface AccordionProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

const Accordion: React.FC<Omit<DivElementProps & AccordionProps, 'value'>> = ({
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

const AccordionItem: React.FC<DivElementProps & AccordionProps> = ({
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

const AccordionHeader: React.FC<Omit<AccordionProps, 'value'>> = ({
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

const AccordionContent: React.FC<Omit<AccordionProps, 'value'>> = ({
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
