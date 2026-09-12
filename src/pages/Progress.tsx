import { LineChart } from 'lucide-react';
import { EmptyState, PageHeader } from '../components/ui';

export default function Progress() {
  return (
    <section>
      <PageHeader eyebrow="Analytics" title="Progress" />
      <EmptyState
        icon={<LineChart className="h-6 w-6" />}
        title="Your progress"
        body="Completed topics, coverage and streak stats land here."
      />
    </section>
  );
}