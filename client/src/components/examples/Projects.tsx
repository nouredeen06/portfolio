import Projects from '../Projects';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function ProjectsExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <Projects />
    </QueryClientProvider>
  );
}
