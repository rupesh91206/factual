import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { HOW_IT_WORKS } from "@/data/content";
import { Bot, Calendar, CheckCircle } from "lucide-react";
import type { LucideProps } from "lucide-react";
import { motion } from "motion/react";
import type { ComponentType } from "react";

const STEP_ICONS: ComponentType<LucideProps>[] = [Calendar, Bot, CheckCircle];

// Visual panel for each step — CSS mockups
function StepVisual({ step }: { step: string }) {
  if (step === "01") {
    return (
      <div className="rounded-xl border border-border bg-muted/20 p-4 h-full flex flex-col gap-2">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mb-1">
          Connected Calendars
        </p>
        {["Google Calendar", "Outlook", "Apple Calendar"].map((cal, i) => (
          <div
            key={cal}
            className={[
              "flex items-center gap-2 px-3 py-2 rounded-lg text-xs border",
              i === 0
                ? "bg-primary/15 border-primary/30 text-primary"
                : "bg-card border-border text-muted-foreground",
            ].join(" ")}
          >
            <div
              className={[
                "w-2 h-2 rounded-full",
                i === 0 ? "bg-primary" : "bg-muted-foreground/40",
              ].join(" ")}
            />
            {cal}
          </div>
        ))}
        <div className="mt-auto text-[10px] text-primary font-medium flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />3
          calendars synced
        </div>
      </div>
    );
  }

  if (step === "02") {
    return (
      <div className="rounded-xl border border-border bg-muted/20 p-4 h-full flex flex-col gap-2">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mb-1">
          This Week's Goals
        </p>
        {[
          { task: "Finish product spec", hours: "4h", done: true },
          { task: "Design system audit", hours: "2h", done: false },
          { task: "Write onboarding copy", hours: "1.5h", done: false },
        ].map((item) => (
          <div
            key={item.task}
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-card border border-border text-xs"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div
                className={[
                  "w-3.5 h-3.5 rounded border flex-shrink-0",
                  item.done
                    ? "bg-primary border-primary"
                    : "border-muted-foreground/40",
                ].join(" ")}
              />
              <span
                className={
                  item.done
                    ? "text-muted-foreground line-through truncate"
                    : "text-foreground/80 truncate"
                }
              >
                {item.task}
              </span>
            </div>
            <span className="text-muted-foreground ml-2 flex-shrink-0">
              {item.hours}
            </span>
          </div>
        ))}
        <div className="mt-auto">
          <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
            <span>Scheduled</span>
            <span>7.5h / 8h</span>
          </div>
          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
            <div className="h-full w-[93%] rounded-full bg-primary" />
          </div>
        </div>
      </div>
    );
  }

  // Step 03
  return (
    <div className="rounded-xl border border-border bg-muted/20 p-4 h-full flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
          <Bot className="w-3.5 h-3.5 text-primary-foreground" />
        </div>
        <span className="text-xs font-medium text-foreground">
          AI Companion
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-accent ml-auto" />
      </div>
      {[
        { msg: "You're on a 47-min streak! 🎯 Keep going.", from: "ai" },
        { msg: "Thanks, feeling focused today!", from: "user" },
        {
          msg: "You have 12 mins before your next block. Use it well 💡",
          from: "ai",
        },
      ].map((bubble) => (
        <div
          key={bubble.msg}
          className={[
            "px-3 py-2 rounded-xl text-[11px] leading-snug max-w-[90%]",
            bubble.from === "ai"
              ? "bg-primary/15 text-foreground self-start"
              : "bg-muted text-muted-foreground self-end ml-auto",
          ].join(" ")}
        >
          {bubble.msg}
        </div>
      ))}
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            How Mindflow Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three simple steps from scattered to focused. Mindflow handles the
            complexity so you can stay in flow.
          </p>
        </AnimatedSection>

        <div className="space-y-16 md:space-y-24">
          {HOW_IT_WORKS.map((step, index) => {
            const Icon = STEP_ICONS[index];
            const isEven = index % 2 === 1;

            return (
              <AnimatedSection
                key={step.step}
                delay={index * 0.1}
                direction={isEven ? "right" : "left"}
              >
                <div
                  data-ocid={`how-it-works.step.${index + 1}.card`}
                  className={[
                    "grid md:grid-cols-2 gap-10 items-center",
                    isEven ? "md:grid-flow-dense" : "",
                  ].join(" ")}
                >
                  {/* Text side */}
                  <div className={isEven ? "md:col-start-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-bold text-primary/60 font-mono tracking-widest uppercase">
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Step connector dot (not last) */}
                    {index < HOW_IT_WORKS.length - 1 && (
                      <motion.div
                        className="hidden md:flex items-center gap-2 text-xs text-muted-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex gap-1">
                          {[0, 1, 2].map((d) => (
                            <div
                              key={d}
                              className="w-1 h-1 rounded-full bg-primary/40"
                            />
                          ))}
                        </div>
                        <span>then</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Visual panel side */}
                  <div
                    className={[
                      "h-56 md:h-64",
                      isEven ? "md:col-start-1 md:row-start-1" : "",
                    ].join(" ")}
                  >
                    <StepVisual step={step.step} />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
