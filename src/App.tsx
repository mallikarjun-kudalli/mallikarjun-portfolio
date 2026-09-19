import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { EducationSection } from '@/sections/EducationSection';
import { CertificationsSection } from '@/sections/CertificationsSection';
import { DsaSection } from '@/sections/DsaSection';
import { ContactSection } from '@/sections/ContactSection';

export function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <DsaSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
