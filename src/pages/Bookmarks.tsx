import { Bookmark as BookmarkIcon } from 'lucide-react';
import { EmptyState, PageHeader } from '../components/ui';

export default function Bookmarks() {
  return (
    <section>
      <PageHeader eyebrow="Saved" title="Bookmarks" />
      <EmptyState
        icon={<BookmarkIcon className="h-6 w-6" />}
        title="No bookmarks yet"
        body="Bookmark topics while studying and they will show up here."
      />
    </section>
  );
}