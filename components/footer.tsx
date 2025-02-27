import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-background/50 backdrop-blur-sm border-t border-border/40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-muted-foreground mb-4 md:mb-0">
          © 2025 Nexverse. All rights reserved.
        </div>
        <nav className="flex space-x-4 mb-4 md:mb-0">
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
        <div className="flex space-x-4">
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}