import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS, TRUST_SIGNALS } from "@/data/content";
import { Check, Lock, RefreshCw, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const TRUST_ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Shield,
  Lock,
  RefreshCw,
  Zap,
};

const ANNUAL_DISCOUNT = 0.2;

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  function getDisplayPrice(price: number, period: string) {
    if (price === 0) return { display: "Free", sub: "" };
    const adjusted = isAnnual
      ? Math.round(price * (1 - ANNUAL_DISCOUNT))
      : price;
    const periodLabel = period === "month" ? "/mo" : `/${period}`;
    return { display: `$${adjusted}`, sub: periodLabel };
  }

  return (
    <section id="pricing" className="bg-muted/20 border-y border-border py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Simple pricing. No surprises.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Start free, upgrade when you need more. No hidden fees, no surprise
            bills.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-3">
            <span
              className={[
                "text-sm font-medium transition-colors duration-200",
                !isAnnual ? "text-foreground" : "text-muted-foreground",
              ].join(" ")}
            >
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={isAnnual}
              data-ocid="pricing.billing_toggle.switch"
              onClick={() => setIsAnnual((v) => !v)}
              className={[
                "relative w-11 h-6 rounded-full border-2 transition-smooth focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                isAnnual
                  ? "bg-primary border-primary"
                  : "bg-muted border-border",
              ].join(" ")}
            >
              <motion.span
                className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-primary-foreground shadow-subtle"
                animate={{ x: isAnnual ? 20 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              />
            </button>
            <span
              className={[
                "text-sm font-medium transition-colors duration-200",
                isAnnual ? "text-foreground" : "text-muted-foreground",
              ].join(" ")}
            >
              Annual
              <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-accent/15 text-accent border border-accent/30">
                Save 20%
              </span>
            </span>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier) => {
            const { display, sub } = getDisplayPrice(tier.price, tier.period);
            return (
              <StaggerItem key={tier.id}>
                <div
                  data-ocid={`pricing.${tier.id}.card`}
                  className={[
                    "relative p-8 rounded-2xl border flex flex-col h-full transition-smooth",
                    tier.highlighted
                      ? "bg-primary/10 border-primary/40 shadow-elevated"
                      : "bg-card border-border hover:border-primary/20 hover:shadow-elevated",
                  ].join(" ")}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <Badge className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 shadow-subtle whitespace-nowrap">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-xl text-foreground">
                        {tier.name}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-5">
                      {tier.description}
                    </p>
                    <div className="flex items-end gap-1">
                      <span className="font-display font-bold text-4xl text-foreground leading-none">
                        {display}
                      </span>
                      {sub && (
                        <span className="text-sm text-muted-foreground mb-0.5">
                          {sub}
                        </span>
                      )}
                    </div>
                    {tier.price > 0 && isAnnual && (
                      <p className="text-xs text-accent mt-1.5 font-medium">
                        Billed annually · Save{" "}
                        {Math.round(tier.price * ANNUAL_DISCOUNT * 12)}$/yr
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-foreground/80"
                      >
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    data-ocid={`pricing.${tier.id}.cta.button`}
                    variant={tier.highlighted ? "default" : "outline"}
                    size="lg"
                    onClick={() => {
                      if (tier.id === "team") {
                        window.location.href =
                          "mailto:sales@mindflow.app?subject=Mindflow%20Team%20Plan";
                      } else {
                        scrollTo("hero");
                      }
                    }}
                    className={[
                      "w-full font-semibold",
                      tier.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-subtle hover:shadow-elevated hover:scale-[1.02] transition-smooth"
                        : "border-border hover:bg-muted/40",
                    ].join(" ")}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Trust signals */}
        <AnimatedSection delay={0.2} className="mt-12">
          <p className="text-xs text-center text-muted-foreground mb-6">
            No credit card required. Cancel anytime.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {TRUST_SIGNALS.map((signal) => {
              const Icon = TRUST_ICON_MAP[signal.icon] ?? Shield;
              return (
                <div
                  key={signal.label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Icon className="w-4 h-4 text-primary/70" />
                  {signal.label}
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
