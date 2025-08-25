import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/aqibmustafa' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/aqibmustafa' },
    { name: 'Email', icon: Mail, url: 'mailto:aqib.mustafa@example.com' },
  ];

  return (
    <footer className="w-full border-t bg-card">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Aqib Mustafa. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5 text-muted-foreground transition-colors hover:text-accent-foreground" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
