import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "next-themes";

function ThemeSwitch() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {(theme === "dark" || resolvedTheme === "dark") && (
        <div data-hide-on-theme="light">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setTheme("light");
            }}
          >
            <Sun className="h-5 w-5" />
            <span className="sr-only">Switch to light mode</span>
          </Button>
        </div>
      )}
      {(theme === "light" || resolvedTheme === "light") && (
        <div data-hide-on-theme="dark">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setTheme("dark");
            }}
          >
            <Moon className="h-5 w-5" />
            <span className="sr-only">Switch to dark mode</span>
          </Button>
        </div>
      )}
    </>
  );
}

export default ThemeSwitch;
