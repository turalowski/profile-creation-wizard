'use client';

import { ProfileCreation } from '@/app/containers/profile-creation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8 px-4 md:px-24 lg:px-48">
      <ProfileCreation />
    </main>
  );
}
