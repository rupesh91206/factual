import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FAQ_ITEMS } from "@/data/content";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-background py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Got questions?
            <br />
            We've got answers.
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know before you start.
          </p>
        </AnimatedSection>

        <div className="space-y-3" data-ocid="faq.list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = open === item.id;
            return (
              <AnimatedSection key={item.id} delay={index * 0.05}>
                <div
                  data-ocid={`faq.item.${index + 1}`}
                  className={[
                    "rounded-xl border overflow-hidden transition-smooth",
                    isOpen
                      ? "bg-card border-primary/30 shadow-subtle"
                      : "bg-card border-border hover:border-primary/20",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    data-ocid={`faq.item.${index + 1}.toggle`}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/10 transition-smooth"
                  >
                    <span className="font-medium text-foreground text-sm md:text-base pr-4 leading-snug">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      className="shrink-0 text-muted-foreground"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-border/60">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
