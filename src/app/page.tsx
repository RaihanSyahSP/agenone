import Image from 'next/image'
import HomeModule from '../modules/home';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeModule />
    </main>
  );
}
