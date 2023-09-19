import Image from 'next/image'
import { HomeModule, ServiceModul, AchievementsModule, ProjectModule, TestimonialsModule } from '@/modules';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeModule />
      <ServiceModul />
      <AchievementsModule />
      <ProjectModule />
      <TestimonialsModule />
    </main>
  );
}
