import { Search as SearchIcon } from 'lucide-react';
import { EmptyState, PageHeader } from '../components/ui';

export default function Search() {
  return (
    <section>
      <PageHeader eyebrow="Explore" title="Search" />
      <EmptyState
        icon={<SearchIcon className="h-6 w-6" />}
        title="Global search"
        body="Search across all subjects, topics, subtopics and resources."
      />
    </section>
  );
}