"use client"
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="text-xl font-bold font-headline tracking-wider text-accent-foreground/90 hover:text-accent-foreground transition-colors">
          AquaFolio
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
