import { GraduationCap } from 'lucide-react';
import { EmptyState, PageHeader } from '../components/ui';

export default function ExamMode() {
  return (
    <section>
      <PageHeader eyebrow="Prep" title="Exam Mode" />
      <EmptyState
        icon={<GraduationCap className="h-6 w-6" />}
        title="Exam prep"
        body="Exam-ordered revision resources and question practice land here."
      />
    </section>
  );
}