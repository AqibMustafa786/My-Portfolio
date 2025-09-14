import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/aqibmustafa' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/aqibmustafa' },
    { name: 'Email', icon: Mail, url: 'mailto:aqib.mustafa@example.com' },
  ];

  return (
    <footer className="relative w-full py-8 text-center text-gray-500 dark:text-gray-400 z-10">
        <p>&copy; {new Date().getFullYear()} Aqib Mustafa. All Rights Reserved.</p>
    </footer>
  );
}
