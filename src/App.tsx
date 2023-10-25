import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { AppHeader } from "./components/AppHeader";
import PageLayout from "./components/PageLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppHeader />
        <PageLayout />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
