import type {
  FAQItem,
  Feature,
  FooterGroup,
  Integration,
  Metric,
  NavLink,
  PricingTier,
  Testimonial,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  tagline: "Stay Focused. Never Alone.",
  headline: "Your Time,\nClearly Focused",
  subheadline:
    "Block your time, bring your AI companion, and finally finish what you start.",
  cta: "Start Free Trial",
  ctaSecondary: "See How It Works",
  badge: "Trusted by 50,000+ focused professionals",
};

export const METRICS: Metric[] = [
  {
    id: "users",
    value: 50,
    suffix: "K+",
    label: "Active Users",
    description: "professionals who reclaimed their focus",
  },
  {
    id: "focus-score",
    value: 4.8,
    suffix: "/5",
    label: "Avg Focus Score",
    description: "rated by users after 30 days",
  },
  {
    id: "time-reclaimed",
    value: 12,
    suffix: "h",
    label: "Weekly Hours Reclaimed",
    description: "average per user per week",
  },
  {
    id: "minutes-saved",
    value: 3,
    suffix: "M+",
    label: "Minutes Saved",
    description: "across all active flows",
  },
];

export const FEATURES: Feature[] = [
  {
    id: "time-blocking",
    icon: "Calendar",
    title: "Intelligent Time-Blocking",
    description:
      "Organize your day with precision. Mindflow analyzes your workload and auto-schedules deep work sessions, meetings, and recovery time — so nothing slips.",
    badge: "Core",
  },
  {
    id: "ai-companion",
    icon: "Bot",
    title: "Ambient AI Companion",
    description:
      "Meet your personal focus companion. It checks in gently, celebrates streaks, nudges when you drift, and offers breathing exercises — all without breaking your flow.",
    badge: "AI-Powered",
  },
  {
    id: "focus-analytics",
    icon: "BarChart3",
    title: "Deep Focus Analytics",
    description:
      "See exactly where your time goes. Visual heatmaps, weekly trends, and personalized insights help you understand your peak hours and protect them ruthlessly.",
  },
  {
    id: "smart-integrations",
    icon: "Plug",
    title: "Works With Your Stack",
    description:
      "Sync with Google Calendar, Notion, Linear, and Slack. Mindflow lives where you work — not as another tab to manage.",
  },
  {
    id: "flow-zones",
    icon: "Layers",
    title: "Flow Zones",
    description:
      "Create named focus environments — Deep Work, Admin, Creative — each with its own ambient sound, block length, and AI personality mode.",
    badge: "New",
  },
  {
    id: "team-mode",
    icon: "Users",
    title: "Team Focus Mode",
    description:
      "Coordinate focus time across your team. Set shared focus windows, reduce meeting interruptions, and build a culture of deep work — together.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Connect Your Calendar",
    description:
      "Link Google Calendar, Outlook, or iCal. Mindflow reads your existing commitments and finds your hidden focus pockets.",
  },
  {
    step: "02",
    title: "Set Your Focus Goals",
    description:
      "Tell Mindflow what you need to accomplish this week. It intelligently time-blocks your tasks into available deep work windows.",
  },
  {
    step: "03",
    title: "Let Your AI Companion Guide You",
    description:
      "As you work, your AI companion monitors momentum, surfaces gentle prompts, and keeps you accountable — without the noise.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Mindflow is the only app that actually changed how I work. The AI companion feels like having a thoughtful colleague who always keeps me on track — without the meetings.",
    author: "Aura K.",
    role: "Creative Director",
    company: "Studio Parallel",
    avatar: "AK",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "We rolled Mindflow out to our engineering team and saw a 40% drop in context-switching within two weeks. The time-blocking alone is worth it.",
    author: "Peter Grandon",
    role: "VP Engineering",
    company: "Latent Labs",
    avatar: "PG",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "I've tried every productivity app. Mindflow is the first one that adapts to me, not the other way around. The flow zones feature alone saved my mornings.",
    author: "Avowm A.",
    role: "Freelance Designer",
    company: "Self-employed",
    avatar: "AA",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "The ambient AI doesn't feel gimmicky — it feels genuinely helpful. It caught that I was overloading Thursdays and suggested a fix before I burned out.",
    author: "Samir Patel",
    role: "Product Manager",
    company: "Groundwork HQ",
    avatar: "SP",
    rating: 5,
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: 0,
    period: "forever",
    description: "Perfect for solo professionals exploring focused work.",
    features: [
      "Up to 5 time-blocks per day",
      "Basic AI companion (daily check-ins)",
      "Google Calendar sync",
      "Weekly focus report",
      "Community support",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 14,
    period: "month",
    description: "For professionals who take their focus seriously.",
    features: [
      "Unlimited time-blocks",
      "Full AI companion with context memory",
      "All integrations (Notion, Linear, Slack, Spotify)",
      "Flow zones with ambient soundscapes",
      "Advanced analytics & heatmaps",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    id: "team",
    name: "Team",
    price: 11,
    period: "user/month",
    description: "Build a culture of deep work across your organization.",
    features: [
      "Everything in Pro",
      "Team focus windows & coordination",
      "Admin dashboard & usage insights",
      "SSO & access management",
      "Custom AI companion personas",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How is Mindflow different from a regular calendar app?",
    answer:
      "Mindflow goes far beyond scheduling. It actively protects your time, learns your focus patterns, and provides an AI companion that helps you maintain momentum throughout the day. It's the difference between planning your time and actually using it well.",
  },
  {
    id: "faq-2",
    question: "Is the AI companion always-on or intrusive?",
    answer:
      "Your AI companion is designed to be ambient — present when you need it, invisible when you're in flow. You set the check-in frequency, and it learns when to step in and when to stay quiet. Most users describe it as 'a nudge, not noise.'",
  },
  {
    id: "faq-3",
    question: "What calendars and tools does Mindflow integrate with?",
    answer:
      "Mindflow integrates with Google Calendar, Outlook, Apple Calendar, Notion, Linear, Slack, Spotify, and more. Our integrations are built to be read-write — Mindflow can create, update, and protect blocks directly in your existing workflow.",
  },
  {
    id: "faq-4",
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. No lock-ins, no cancellation fees. Cancel from your account settings in under 60 seconds. Your data remains accessible for 30 days after cancellation so you can export everything.",
  },
  {
    id: "faq-5",
    question: "Is my data secure?",
    answer:
      "Yes. All data is end-to-end encrypted at rest and in transit. We are SOC 2 Type II certified, GDPR compliant, and never sell your data. Your focus data is yours — we use it only to improve your personal experience, never for advertising.",
  },
  {
    id: "faq-6",
    question: "Does Mindflow work on mobile?",
    answer:
      "Yes. Mindflow has fully-featured iOS and Android apps with offline support. Time-blocks, AI companion nudges, and focus analytics all sync seamlessly across devices in real time.",
  },
];

export const INTEGRATIONS: Integration[] = [
  { id: "notion", name: "Notion", description: "Sync tasks and projects" },
  { id: "slack", name: "Slack", description: "Focus status & DND sync" },
  {
    id: "gcal",
    name: "Google Calendar",
    description: "Two-way calendar sync",
  },
  { id: "linear", name: "Linear", description: "Pull issues into time-blocks" },
  { id: "spotify", name: "Spotify", description: "Focus playlists per zone" },
  { id: "github", name: "GitHub", description: "Code activity correlation" },
];

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#integrations" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
      { label: "Status", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

export const TRUST_SIGNALS = [
  { icon: "Shield", label: "SOC 2 Type II Certified" },
  { icon: "Lock", label: "End-to-End Encrypted" },
  { icon: "RefreshCw", label: "30-Day Money Back" },
  { icon: "Zap", label: "99.9% Uptime SLA" },
];
