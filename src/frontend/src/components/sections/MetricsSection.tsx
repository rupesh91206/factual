import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { CountUp } from "@/components/ui/CountUp";
import { METRICS } from "@/data/content";
import { Clock, Star, Users } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

const METRIC_ICONS: Record<string, ComponentType<LucideProps>> = {
  users: Users,
  "focus-score": Star,
  "time-reclaimed": Clock,
  "minutes-saved": Users,
};

export function MetricsSection() {
  return (
    <section
      id="metrics"
      className="bg-muted/20 border-y border-border py-16"
      aria-label="Key metrics"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {METRICS.map((metric, index) => {
            const Icon = METRIC_ICONS[metric.id] ?? Users;
            const isLast = index === METRICS.length - 1;
            return (
              <StaggerItem key={metric.id}>
                {/* Divider between items on desktop */}
                <div
                  data-ocid={`metrics.${metric.id}.card`}
                  className={[
                    "text-center flex flex-col items-center py-4 px-2",
                    !isLast ? "md:border-r md:border-border/50" : "",
                  ].join(" ")}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Number */}
                  <div className="font-display font-bold text-4xl md:text-5xl text-foreground mb-1 tabular-nums">
                    <CountUp
                      value={metric.value}
                      suffix={metric.suffix}
                      decimals={metric.id === "focus-score" ? 1 : 0}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-sm font-semibold text-foreground/80 mb-1">
                    {metric.label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-snug max-w-[120px]">
                    {metric.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
