import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HERO } from "@/data/content";
import {
  ArrowRight,
  BarChart3,
  Bot,
  ChevronDown,
  Play,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Floating gradient blob — purely decorative
function GradientBlob({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
}

// App mockup — CSS/Tailwind only, no image file
function AppMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-elevated border border-border/50 bg-card">
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-muted/30 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-destructive/60" />
        <div className="w-3 h-3 rounded-full bg-accent/60" />
        <div className="w-3 h-3 rounded-full bg-primary/60" />
        <span className="ml-3 text-xs text-muted-foreground font-mono">
          mindflow.app
        </span>
      </div>

      {/* App shell */}
      <div className="flex h-64 md:h-80">
        {/* Sidebar */}
        <div className="w-48 border-r border-border bg-muted/20 p-3 flex flex-col gap-2 hidden sm:flex">
          {[
            "Today",
            "Focus Blocks",
            "AI Companion",
            "Analytics",
            "Flow Zones",
          ].map((item, i) => (
            <div
              key={item}
              className={[
                "px-3 py-2 rounded-lg text-xs font-medium transition-colors",
                i === 0
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main area */}
        <div className="flex-1 p-4 overflow-hidden">
          <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
            Today — Wednesday
          </p>
          {/* Time blocks */}
          {[
            {
              label: "Deep Work: Feature spec",
              color: "bg-primary/30 border-primary/50",
              time: "9:00–11:00",
            },
            {
              label: "Team Standup",
              color: "bg-accent/20 border-accent/40",
              time: "11:15–11:30",
            },
            {
              label: "Design Review",
              color: "bg-primary/15 border-primary/30",
              time: "2:00–3:00",
            },
          ].map((block) => (
            <div
              key={block.label}
              className={`flex items-center justify-between mb-2 px-3 py-2 rounded-lg border text-xs ${block.color}`}
            >
              <span className="font-medium text-foreground/90 truncate mr-2">
                {block.label}
              </span>
              <span className="text-muted-foreground shrink-0">
                {block.time}
              </span>
            </div>
          ))}
          {/* Focus timer */}
          <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground">In Flow</p>
              <p className="text-sm font-bold font-display text-foreground">
                47:23
              </p>
            </div>
            <div className="ml-auto text-xs text-primary font-medium">
              94% focus
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Ambient glows */}
      <GradientBlob
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.52 0.18 263 / 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <GradientBlob
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.72 0.15 60 / 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <GradientBlob
        className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.68 0.14 263 / 0.06) 0%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />

      <div className="relative container mx-auto px-6 max-w-6xl pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: text content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <Badge
                variant="outline"
                className="mb-6 px-4 py-1.5 border-primary/30 text-primary bg-primary/10 text-xs font-medium tracking-wide"
                data-ocid="hero.badge"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block mr-2" />
                {HERO.badge}
              </Badge>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.05,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="text-sm font-medium text-accent tracking-widest uppercase mb-4"
            >
              {HERO.tagline}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-foreground leading-[1.08] tracking-tight mb-6 max-w-xl"
            >
              {HERO.headline.split("\n").map((line, lineIndex) => (
                <span
                  key={line}
                  className={lineIndex === 1 ? "text-primary block" : "block"}
                >
                  {line}
                </span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10"
            >
              {HERO.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
            >
              <Button
                size="lg"
                onClick={() => scrollTo("pricing")}
                data-ocid="hero.cta.primary_button"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-semibold shadow-elevated hover:shadow-elevated hover:scale-[1.03] transition-smooth min-w-[180px]"
              >
                {HERO.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollTo("how-it-works")}
                data-ocid="hero.cta.secondary_button"
                className="border-border hover:bg-muted/30 text-foreground px-8 py-3 text-base font-medium min-w-[180px] gap-2"
              >
                <Play className="w-4 h-4 fill-current opacity-70" />
                Watch 2-min Demo
              </Button>
            </motion.div>

            {/* Social proof micro-line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-2.5 mt-8 text-sm text-muted-foreground"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-1.5">
                {["AK", "PG", "AA", "SP"].map((initials) => (
                  <div
                    key={initials}
                    className="w-7 h-7 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary"
                  >
                    {initials[0]}
                  </div>
                ))}
              </div>
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }, (_, i) => i).map((i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-accent text-accent"
                  />
                ))}
              </div>
              <span className="font-medium">Trusted by 50K+ focused teams</span>
            </motion.div>
          </div>

          {/* Right: app mockup */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex-1 w-full max-w-2xl lg:max-w-none relative"
          >
            <AppMockup />

            {/* Floating focus score card */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="absolute -left-4 bottom-12 bg-card border border-border rounded-xl p-4 shadow-elevated hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Focus Score Today
                  </p>
                  <p className="text-xl font-bold font-display text-foreground">
                    94%
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating AI companion card */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
              className="absolute -right-4 top-12 bg-card border border-border rounded-xl p-4 shadow-elevated hidden md:block max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-xs font-medium text-foreground">
                  AI Companion
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent ml-auto" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                "You've been in flow for 47 minutes. Great work! 🎯"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("metrics")}
        aria-label="Scroll to metrics"
        data-ocid="hero.scroll_button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
