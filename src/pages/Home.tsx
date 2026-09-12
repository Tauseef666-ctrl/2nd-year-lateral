import { LayoutDashboard } from 'lucide-react';
import { EmptyState, PageHeader } from '../components/ui';

export default function Home() {
  return (
    <section>
      <PageHeader eyebrow="BTEUP CSE · Lateral Entry" title="Learning Hub" />
      <EmptyState
        icon={<LayoutDashboard className="h-6 w-6" />}
        title="Home dashboard"
        body="Semester overview, continue-learning and progress cards land here."
      />
    </section>
  );
}