import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { INTEGRATIONS } from "@/data/content";
import { motion } from "motion/react";

// Simple inline SVG brand shapes / styled text icons per integration
const INTEGRATION_ICONS: Record<string, React.ReactNode> = {
  notion: (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current"
      aria-hidden="true"
    >
      <path d="M4.5 3.5C4.5 3.5 5.5 3 7 3h10c1.5 0 2.5.5 2.5.5V20c0 .5-.5 1-1 1H5c-.5 0-1-.5-1-1V3.5zm3 2v13h9V5.5H7.5zm1.5 2h6v1.5H9V7.5zm0 3h6v1.5H9V10.5zm0 3h4v1.5H9V13.5z" />
    </svg>
  ),
  slack: (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current"
      aria-hidden="true"
    >
      <path d="M6 15a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2h2v2zm1 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-5zm2-9a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2v2H9zm0 1a2 2 0 0 1 2 2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1 2-2h5zm9 2a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2V9zm-1 0a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5zm-2 9a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2h2zm0-1a2 2 0 0 1-2-2 2 2 0 0 1 2-2h5a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-5z" />
    </svg>
  ),
  gcal: (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current"
      aria-hidden="true"
    >
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm3 5h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
    </svg>
  ),
  linear: (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current"
      aria-hidden="true"
    >
      <path d="M3.5 15.5L8.5 20.5L20.5 8.5L15.5 3.5L3.5 15.5ZM3 18.5V21H5.5L3 18.5ZM10.5 4.5L5.5 9.5L7 11L12 6L10.5 4.5Z" />
    </svg>
  ),
  spotify: (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 14.44c-.2.32-.62.42-.94.22-2.56-1.56-5.78-1.92-9.58-1.04-.36.08-.72-.14-.8-.5-.08-.36.14-.72.5-.8 4.16-.96 7.72-.54 10.6 1.22.32.2.42.62.22.9zm1.24-2.76c-.24.4-.76.52-1.16.28-2.94-1.8-7.42-2.32-10.9-1.28-.44.12-.9-.12-1.02-.56-.12-.44.12-.9.56-1.02 3.98-1.2 8.92-.62 12.28 1.44.4.24.52.76.24 1.14zm.1-2.88C14.32 8.84 8.5 8.64 5.06 9.64c-.54.16-1.1-.14-1.26-.68-.16-.54.14-1.1.68-1.26 3.96-1.2 10.56-.96 14.72 1.44.48.28.64.9.36 1.38-.28.48-.9.64-1.38.36z" />
    </svg>
  ),
  github: (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.57.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  ),
};

// Duplicate the list for seamless infinite scroll on mobile
const DOUBLED_INTEGRATIONS = [...INTEGRATIONS, ...INTEGRATIONS];

export function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="bg-background py-16 border-b border-border overflow-hidden"
      aria-label="Integrations"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection className="text-center mb-10">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
            Integrations
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            Fits into your workflow
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Mindflow connects with the tools you already use — no context
            switching required.
          </p>
        </AnimatedSection>

        {/* Desktop: static centered row */}
        <div className="hidden md:block">
          <StaggerContainer className="flex items-center justify-center gap-4 flex-wrap">
            {INTEGRATIONS.map((integration) => (
              <StaggerItem key={integration.id}>
                <div
                  data-ocid={`integrations.${integration.id}.item`}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-card hover:border-primary/40 hover:bg-muted/30 transition-smooth group cursor-default"
                >
                  <div className="w-7 h-7 rounded-md bg-primary/15 flex items-center justify-center text-primary">
                    {INTEGRATION_ICONS[integration.id]}
                  </div>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    {integration.name}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Mobile: infinite marquee */}
        <div className="md:hidden relative">
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-4"
              animate={{ x: [0, -50 * INTEGRATIONS.length] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ width: `${100 * DOUBLED_INTEGRATIONS.length}px` }}
            >
              {DOUBLED_INTEGRATIONS.map((integration, i) => (
                <div
                  key={`${integration.id}-${i}`}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-card shrink-0"
                  style={{ minWidth: "140px" }}
                >
                  <div className="w-6 h-6 rounded-md bg-primary/15 flex items-center justify-center text-primary">
                    {INTEGRATION_ICONS[integration.id]}
                  </div>
                  <span className="text-sm font-medium text-foreground/80">
                    {integration.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
