import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/data/content";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    setDark(true);

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleDark() {
    const isDark = document.documentElement.classList.toggle("dark");
    setDark(isDark);
  }

  function handleNavClick(href: string) {
    scrollTo(href);
    setMobileOpen(false);
  }

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-card/80 backdrop-blur-xl border-b border-border shadow-elevated"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
            aria-label="Mindflow Home"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-subtle group-hover:shadow-elevated transition-smooth">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-lg text-foreground tracking-tight">
              Mindflow
            </span>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "-")}.link`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-muted/40"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleDark}
              data-ocid="header.dark_mode.toggle"
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-smooth"
            >
              {dark ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <title>Light mode</title>
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <title>Dark mode</title>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavClick("#pricing")}
              data-ocid="header.signin.button"
              className="text-sm border-border hover:bg-muted/40"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              onClick={() => handleNavClick("#pricing")}
              data-ocid="header.cta.button"
              className="text-sm bg-primary hover:bg-primary/90 text-primary-foreground shadow-subtle hover:shadow-elevated transition-smooth hover:scale-[1.02]"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="header.mobile_menu.toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden w-9 h-9 rounded-md flex items-center justify-center text-foreground hover:bg-muted/40 transition-smooth"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <dialog
          open
          className="fixed inset-0 z-40 md:hidden m-0 p-0 max-w-none w-full h-full bg-transparent border-none"
          aria-label="Mobile navigation"
          onClose={() => setMobileOpen(false)}
        >
          <button
            type="button"
            className="absolute inset-0 bg-background/60 backdrop-blur-sm w-full"
            onClick={() => setMobileOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
            aria-label="Close mobile menu"
          />
          <nav
            className="absolute top-16 left-0 right-0 bg-card border-b border-border shadow-elevated px-6 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation links"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                data-ocid={`nav.mobile.${link.label.toLowerCase().replace(/\s+/g, "-")}.link`}
                className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-md transition-smooth"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 pb-1 flex flex-col gap-2 border-t border-border mt-2">
              <Button
                variant="outline"
                onClick={() => handleNavClick("#pricing")}
                data-ocid="header.mobile.signin.button"
                className="w-full border-border"
              >
                Sign In
              </Button>
              <Button
                onClick={() => handleNavClick("#pricing")}
                data-ocid="header.mobile.cta.button"
                className="w-full bg-primary text-primary-foreground"
              >
                Start Free Trial
              </Button>
            </div>
          </nav>
        </dialog>
      )}
    </>
  );
}
