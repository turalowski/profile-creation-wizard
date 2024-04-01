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

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

/**
 * Accordion component.
 */
const Accordion: React.FC<AccordionProps> = ({
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

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  className?: string;
  children: React.ReactNode;
}
/**
 * Accordion Item component.
 *
 */
const AccordionItem: React.FC<AccordionItemProps> = ({
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
        className={clsx('border-b', className)}
        {...rest}
      >
        {children}
      </div>
    </AccordionItemProvider>
  );
};

interface AccordionHeaderProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Allow the parent to pass onClick handler
  children: React.ReactNode;
}

/**
 * Accordion Header component.
 */
const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  className,
  onClick: externalOnClick, // Destructure onClick prop
  children,
  ...rest
}) => {
  const { active, setActive } = useAccordionContext();
  const { value } = useAccordionItemContext();
  const isOpen = active === value;

  // Toggle the accordion item.
  const toggleItem = () => {
    /* If currently is active, close it */
    if (isOpen) {
      setActive(null);
    } else {
      /* Otherwise open */
      setActive(value);
    }
  };
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    toggleItem();
    externalOnClick?.(event); // External onClick handler, if provided
  };

  return (
    <button
      aria-expanded={isOpen}
      aria-controls={`accordion-header-${value}`}
      className={clsx(
        'flex justify-between',
        'text-primary-text p-6 w-full',
        className
      )}
      onClick={onClick}
      {...rest}
    >
      <h3>{children}</h3>
      <span className="flex items-center gap-3">
        <span className="text-secondaryText">{isOpen ? 'Hide' : 'Show'}</span>
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </span>
    </button>
  );
};

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

/**
 * Accordion Content component.
 */
const AccordionContent: React.FC<AccordionContentProps> = ({
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
      className={clsx('p-6', className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export { Accordion, AccordionItem, AccordionHeader, AccordionContent };
