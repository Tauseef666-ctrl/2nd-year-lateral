import { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import { Card } from './ui';

export interface PracticeCardProps {
  question: string;
  hint?: string;
  n: number;
}

export default function PracticeCard({ question, hint, n }: PracticeCardProps) {
  const [show, setShow] = useState(false);
  return (
    <Card className="p-5">
      <div className="flex items-start gap-3">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent/10 font-mono text-xs font-bold text-accent dark:bg-accent/15 dark:text-accent-300">
          {String(n).padStart(2, '0')}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium leading-relaxed text-ink-900 dark:text-ink-100">
            {question}
          </p>
          {hint ? (
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-600 dark:text-accent-300"
            >
              <Lightbulb className="h-3.5 w-3.5" />
              {show ? 'Hide hint' : 'Show hint'}
            </button>
          ) : null}
          {hint && show ? (
            <p className="mt-2 rounded-xl bg-ink-50 px-3 py-2 text-xs leading-relaxed text-ink-500 dark:bg-ink-800 dark:text-ink-300">
              {hint}
            </p>
          ) : null}
        </div>
      </div>
    </Card>
  );
}