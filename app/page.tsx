'use client';

import { useState } from 'react';
import LandingPage from './components/LandingPage';
import ProfessionalPortfolio from './components/ProfessionalPortfolio';

export default function Home() {
  const [view, setView] = useState<'landing' | 'professional' | 'academic'>('landing');

  if (view === 'landing') {
    return <LandingPage onSelect={setView} />;
  }

  if (view === 'professional') {
    return <ProfessionalPortfolio />;
  }

  return <div />;
}
