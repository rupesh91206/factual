import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { Globe, Lock, ShieldCheck } from "lucide-react";

interface TrustBadge {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
}

const TRUST_BADGES: TrustBadge[] = [
  {
    id: "soc2",
    icon: ShieldCheck,
    label: "SOC 2 Certified",
    description: "Independently audited security controls & processes",
  },
  {
    id: "e2e",
    icon: Lock,
    label: "End-to-End Encrypted",
    description: "All data encrypted at rest and in transit via AES-256",
  },
  {
    id: "gdpr",
    icon: Globe,
    label: "GDPR Compliant",
    description: "Full data sovereignty — you own everything, always",
  },
];

export function TrustSection() {
  return (
    <section
      id="trust"
      className="bg-card border-y border-border py-16"
      aria-label="Security and compliance"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimatedSection className="text-center mb-10">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Security & Compliance
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TRUST_BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <StaggerItem key={badge.id}>
                <div
                  data-ocid={`trust.${badge.id}.card`}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border hover:border-primary/20 hover:shadow-subtle transition-smooth"
                >
                  <div
                    className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4"
                    aria-hidden="true"
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-foreground mb-1.5">
                    {badge.label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
                    {badge.description}
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
