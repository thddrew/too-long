import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppHeader />
        <Outlet />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
