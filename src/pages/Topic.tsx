import { useParams } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { EmptyState, PageHeader } from '../components/ui';

export default function Topic() {
  const { topicId } = useParams();
  return (
    <section>
      <PageHeader eyebrow="Topic" title={topicId} />
      <EmptyState
        icon={<FileText className="h-6 w-6" />}
        title="Topic page"
        body="Resources, practice and deep-learning steps land here."
      />
    </section>
  );
}