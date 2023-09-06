import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const [count, setCount] = useState(0);
  const { toast } = useToast();

  return (
    <ThemeProvider>
      <div className="max-w-2xl py-4 text-center m-auto">
        <a
          className="inline-block"
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={viteLogo}
            alt="Vite logo"
          />
        </a>
        <a
          className="inline-block"
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={reactLogo}
            alt="React logo"
          />
        </a>
        <h1>Vite + React</h1>
        <div>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p>Click on the Vite and React logos to learn more</p>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Hello",
              description: "This is a toast",
            });
          }}
        >
          Click me!
        </Button>
      </div>

      <Toaster />
    </ThemeProvider>
  );
}

export default App;
