import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { EmptyState } from '../components/ui';

export default function NotFound() {
  return (
    <section className="flex min-h-[60svh] flex-col justify-center">
      <EmptyState
        icon={<span className="font-display text-xl font-bold">404</span>}
        title="Page not found"
        body="This route does not exist in the learning hub."
        action={
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
        }
      />
    </section>
  );
}