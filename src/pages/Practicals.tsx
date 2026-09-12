import { FlaskConical } from 'lucide-react';
import { EmptyState, PageHeader } from '../components/ui';

export default function Practicals() {
  return (
    <section>
      <PageHeader eyebrow="Hands-on" title="Practicals" />
      <EmptyState
        icon={<FlaskConical className="h-6 w-6" />}
        title="Practical labs"
        body="Official labs with algorithms, programs and error guides land here."
      />
    </section>
  );
}