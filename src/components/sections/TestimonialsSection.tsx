import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { TESTIMONIALS } from "@/data/content";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Built for people who
            <br />
            mean business
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From solo freelancers to engineering teams — here's how Mindflow
            changed the way they work.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t, index) => (
            <StaggerItem key={t.id}>
              <div
                data-ocid={`testimonials.item.${index + 1}`}
                className={[
                  "flex flex-col h-full p-8 rounded-2xl border transition-smooth",
                  "hover:shadow-elevated hover:scale-[1.01]",
                  index === 1
                    ? "bg-primary/10 border-primary/30 hover:border-primary/50"
                    : "bg-card border-border hover:border-primary/25",
                ].join(" ")}
              >
                {/* Stars */}
                <div
                  className="flex items-center gap-1 mb-5"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }, (_, i) => i).map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground/90 text-base leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-bold text-sm text-primary font-display shrink-0">
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {t.author}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* 4th testimonial — featured wide card */}
        {TESTIMONIALS[3] && (
          <AnimatedSection delay={0.2} className="mt-6">
            <div
              data-ocid="testimonials.item.4"
              className="p-8 rounded-2xl border border-border bg-card hover:border-primary/25 hover:shadow-elevated transition-smooth"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div
                  className="flex items-center gap-1"
                  aria-label={`${TESTIMONIALS[3].rating} out of 5 stars`}
                >
                  {Array.from(
                    { length: TESTIMONIALS[3].rating },
                    (_, i) => i,
                  ).map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="flex-1 text-foreground/90 text-base leading-relaxed md:border-l md:border-border/50 md:pl-6">
                  "{TESTIMONIALS[3].quote}"
                </blockquote>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-bold text-sm text-primary font-display">
                    {TESTIMONIALS[3].avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {TESTIMONIALS[3].author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {TESTIMONIALS[3].role} · {TESTIMONIALS[3].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
