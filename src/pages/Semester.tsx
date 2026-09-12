import { useParams } from 'react-router-dom';
import { Layers } from 'lucide-react';
import { EmptyState, PageHeader } from '../components/ui';

export default function Semester() {
  const { semesterId } = useParams();
  return (
    <section>
      <PageHeader eyebrow="Curriculum" title={`Semester ${semesterId}`} />
      <EmptyState
        icon={<Layers className="h-6 w-6" />}
        title="Semester overview"
        body="Subject grid for this semester lands here."
      />
    </section>
  );
}