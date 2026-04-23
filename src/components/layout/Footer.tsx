import { FOOTER_GROUPS } from "@/data/content";
import { Github, Linkedin, Twitter, Zap } from "lucide-react";

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "mindflow.app";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-border">
          {/* Brand column */}
          <div className="md:col-span-1">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 group mb-4"
              aria-label="Mindflow"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-subtle">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-semibold text-lg text-foreground">
                Mindflow
              </span>
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              The focus companion you've been waiting for.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Twitter, label: "Twitter", href: "#" },
                { Icon: Github, label: "GitHub", href: "#" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-ocid={`footer.social.${label.toLowerCase()}.link`}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-smooth"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          scrollTo(link.href);
                        }
                      }}
                      data-ocid={`footer.${group.title.toLowerCase()}.${link.label.toLowerCase().replace(/\s+/g, "-")}.link`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {year} Mindflow. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
