"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import ThemeSwitch from "@/ui/ThemeSwitch";
import { AnimatePresence, motion } from "motion/react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <span className="text-2xl owner-name text-primary uppercase">
                Hemant Saraf
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <ThemeSwitch />
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  asChild
                  className="cursor-pointer text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors "
                  variant={"ghost"}
                >
                  <Link href={`./${item.href}`}>{item.label}</Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeSwitch />

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="relative flex flex-col items-center w-9 gap-[3px]"
            >
              <span
                className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out
          ${isMenuOpen ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ease-in-out
          ${isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`}
              />
              <span
                className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out
          ${isMenuOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}

        <div className="md:hidden">
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="dropdown"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border"
              >
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    asChild
                    onClick={() => scrollToSection()}
                    className="text-foreground hover:text-primary block px-3 py-2 rounded-md w-full text-left transition-colors"
                    variant={"ghost"}
                  >
                    <Link href={`./${item.href}`}>{item.label}</Link>
                  </Button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
