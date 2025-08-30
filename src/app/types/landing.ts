export interface HeroBadge {
  label: string;
  icon: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  badges: HeroBadge[];
}

export interface Testimonial {
  name: string;
  feedback: string;
  imageUrl: string;
}
