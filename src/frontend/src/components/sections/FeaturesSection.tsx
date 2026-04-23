import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { FEATURES } from "@/data/content";
import {
  BarChart3,
  Bot,
  Calendar,
  Layers,
  Music2,
  Plug,
  ShieldOff,
  Users,
  Zap,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Bot,
  BarChart3,
  Plug,
  Layers,
  Users,
  ShieldOff,
  Music2,
  Zap,
};

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/20 border-y border-border py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Everything you need to
            <br />
            stay in flow
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Mindflow isn't just a calendar. It's a complete focus operating
            system built for how you actually work.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon] ?? Zap;
            return (
              <StaggerItem key={feature.id}>
                <div
                  data-ocid={`features.${feature.id}.card`}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-elevated transition-smooth h-full cursor-default"
                  style={{
                    transitionProperty:
                      "border-color, box-shadow, transform, background-color",
                    transitionDuration: "0.3s",
                    transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center group-hover:bg-primary/25 group-hover:border-primary/40 transition-smooth"
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    {feature.badge && (
                      <Badge
                        variant="outline"
                        className="text-[10px] border-accent/40 text-accent bg-accent/10 font-medium"
                      >
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div
                    className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary/60 to-accent/40 rounded-full transition-all duration-500 ease-out"
                    aria-hidden="true"
                  />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
