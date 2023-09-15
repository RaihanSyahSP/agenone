import Image from 'next/image'
import { HomeModule, ServiceModul, AchievementsModule, ProjectModule } from '@/modules';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeModule />
      <ServiceModul />
      <AchievementsModule />
      <ProjectModule />
    </main>
  );
}
