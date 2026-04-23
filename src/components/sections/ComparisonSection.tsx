import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";
import { motion } from "motion/react";

interface ComparisonRow {
  feature: string;
  basicTimers: boolean;
  mindflow: boolean;
}

const ROWS: ComparisonRow[] = [
  { feature: "AI Companion & Coaching", basicTimers: false, mindflow: true },
  { feature: "Accountability Check-ins", basicTimers: false, mindflow: true },
  {
    feature: "Ambient Focus Soundscapes",
    basicTimers: false,
    mindflow: true,
  },
  { feature: "Smart Auto-Scheduling", basicTimers: false, mindflow: true },
  {
    feature: "Progress Insights & Heatmaps",
    basicTimers: false,
    mindflow: true,
  },
  { feature: "Distraction Blocking", basicTimers: false, mindflow: true },
  { feature: "Calendar Integrations", basicTimers: true, mindflow: true },
  { feature: "Basic Timer Functionality", basicTimers: true, mindflow: true },
];

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="bg-background py-24 border-b border-border"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Why Mindflow
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Why Mindflow, not
            <br />
            another timer?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Traditional timers track time. Mindflow protects it — with
            intelligence, context, and a companion that actually helps.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-elevated">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_120px_160px] bg-card border-b border-border">
              <div className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Capability
              </div>
              <div className="px-4 py-4 text-center">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Basic Timers
                </span>
              </div>
              <div className="px-4 py-4 text-center bg-primary/10 border-l border-primary/20">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    Mindflow
                  </span>
                  <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0.5 font-semibold">
                    Recommended
                  </Badge>
                </div>
              </div>
            </div>

            {/* Rows */}
            {ROWS.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className={[
                  "grid grid-cols-[1fr_120px_160px] border-b border-border last:border-0",
                  "hover:bg-muted/10 transition-colors duration-200",
                ].join(" ")}
              >
                <div className="px-6 py-4 text-sm text-foreground/85 font-medium flex items-center">
                  {row.feature}
                </div>
                <div className="px-4 py-4 flex items-center justify-center">
                  {row.basicTimers ? (
                    <div className="w-7 h-7 rounded-full bg-muted/40 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="w-3.5 h-3.5 text-destructive/70" />
                    </div>
                  )}
                </div>
                <div className="px-4 py-4 flex items-center justify-center bg-primary/5 border-l border-primary/15">
                  <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary font-bold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.25} className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-5">
            See the difference yourself — no credit card required.
          </p>
          <Button
            size="lg"
            data-ocid="comparison.cta.primary_button"
            onClick={() => scrollTo("pricing")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-semibold shadow-elevated hover:shadow-elevated hover:scale-[1.03] transition-smooth"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
