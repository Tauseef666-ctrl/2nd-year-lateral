import { useParams } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { EmptyState, PageHeader } from '../components/ui';

export default function Subject() {
  const { subjectId } = useParams();
  return (
    <section>
      <PageHeader eyebrow="Subject" title={subjectId} />
      <EmptyState
        icon={<BookOpen className="h-6 w-6" />}
        title="Subject page"
        body="Modules, topics and resources land here."
      />
    </section>
  );
}