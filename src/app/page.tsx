import Image from 'next/image'
import { HomeModule, ServiceModul, AchievementsModule } from '@/modules';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeModule />
      <ServiceModul />
      <AchievementsModule />
    </main>
  );
}
