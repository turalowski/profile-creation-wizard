import {
  ProgressLabel,
  ProgressInner,
  ProgressOuter,
} from '@/app/components/ui/progress';

export function Progress({ value }: { value: number }) {
  return (
    <ProgressOuter >
      <ProgressInner aria-label='Normalized value of completed tasks in percentage' value={value}>
        <ProgressLabel />
      </ProgressInner>
    </ProgressOuter>
  );
}
