'use client';

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import LandingPage from "@/pages/LandingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      retry: 1,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
