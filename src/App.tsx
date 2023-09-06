import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { LinkShortener } from "./components/LinkShortener";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="max-w-2xl py-4 text-center m-auto flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Link Shortener</h1>
        </div>
        <div className="max-w-md m-auto">
          <LinkShortener />
        </div>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
