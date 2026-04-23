import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CTABannerSection() {
  return (
    <section
      id="cta-banner"
      className="relative py-24 overflow-hidden bg-card border-t border-border"
    >
      {/* Decorative ambient glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, oklch(from var(--primary) l c h / 0.18) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 80% 30%, oklch(from var(--accent) l c h / 0.10) 0%, transparent 45%)",
        }}
      />
      {/* Subtle grid pattern using border color */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(oklch(from var(--border) l c h) 1px, transparent 1px), linear-gradient(90deg, oklch(from var(--border) l c h) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative container mx-auto px-6 max-w-4xl text-center">
        <StaggerContainer className="flex flex-col items-center">
          {/* Eyebrow */}
          <StaggerItem>
            <motion.div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold text-primary tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Ready when you are
            </motion.div>
          </StaggerItem>

          {/* Headline */}
          <StaggerItem>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1.08] tracking-tight mb-6 max-w-3xl">
              Your most productive
              <br />
              <span className="text-primary">day starts here.</span>
            </h2>
          </StaggerItem>

          {/* Subtext */}
          <StaggerItem>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join 50,000+ professionals who use Mindflow to protect their deep
              work, beat distraction, and build better habits — one flow session
              at a time.
            </p>
          </StaggerItem>

          {/* CTAs */}
          <StaggerItem>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                size="lg"
                data-ocid="cta_banner.primary_button"
                onClick={() => scrollTo("pricing")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-3.5 text-base font-semibold shadow-elevated hover:scale-[1.04] transition-smooth group"
              >
                Start Free Trial — It's Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                data-ocid="cta_banner.secondary_button"
                onClick={() => scrollTo("how-it-works")}
                className="text-muted-foreground hover:text-foreground hover:bg-muted/30 px-10 py-3.5 text-base font-medium"
              >
                Watch a Demo
              </Button>
            </div>
          </StaggerItem>

          {/* Trust micro-copy */}
          <StaggerItem>
            <p className="text-xs text-muted-foreground mt-6">
              No credit card required.{" "}
              <span className="text-muted-foreground/50 mx-1">·</span> Free plan
              forever. <span className="text-muted-foreground/50 mx-1">·</span>{" "}
              Cancel anytime.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
