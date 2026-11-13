"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initAnimations } from '@/scripts/animations';

export default function GSAPInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanup = initAnimations();

    return () => {
      if (cleanup) cleanup();
    };
  }, [pathname]);

  return null;
}
