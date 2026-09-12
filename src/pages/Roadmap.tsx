import { Map } from 'lucide-react';
import { EmptyState, PageHeader } from '../components/ui';

export default function Roadmap() {
  return (
    <section>
      <PageHeader eyebrow="Journey" title="Roadmap" />
      <EmptyState
        icon={<Map className="h-6 w-6" />}
        title="Learning roadmap"
        body="Sequenced study plan across both semesters lands here."
      />
    </section>
  );
}