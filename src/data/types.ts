export interface NavItem {
  label: string;
  href: string;
  numberPrefix?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  iconName: 'github' | 'linkedin' | 'leetcode' | 'mail' | 'phone';
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  role: string; // e.g. "Individual Project" or "Team of 4"
  categoryTag: string;
  technologies: string[];
  summary: string;
  bullets: string[];
  pipeline: string[];
  problemPurpose: string;
  approach: string;
  implementationWorkflow: string[];
  keyResults: string[];
  metrics?: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  scoreLabel: string;
  score: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  verificationLink?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface AchievementItem {
  title: string;
  detail: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    fullName: string;
    initials: string;
    title: string;
    tagline: string;
    location: string;
    phone: string;
    email: string;
    summary: string;
    availability: {
      status: string;
      openFor: string;
    };
  };
  navigation: NavItem[];
  socials: SocialLink[];
  projects: Project[];
  skills: SkillCategory[];
  education: EducationItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
}
