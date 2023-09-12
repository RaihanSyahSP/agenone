import Image from 'next/image'
import { HomeModule, ServiceModul } from '@/modules';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeModule />
      <ServiceModul />
    </main>
  );
}
