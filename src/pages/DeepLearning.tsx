import { Brain } from 'lucide-react';
import { EmptyState, PageHeader } from '../components/ui';

export default function DeepLearning() {
  return (
    <section>
      <PageHeader eyebrow="Focus" title="Deep Learning Mode" />
      <EmptyState
        icon={<Brain className="h-6 w-6" />}
        title="Deep learning"
        body="Sequential watch-then-practice sessions for demanding topics land here."
      />
    </section>
  );
}