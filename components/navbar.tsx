"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { User, Menu, Plane } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "sticky top-0 z-50 transition-all duration-300",
            scrolled
                ? "bg-white/80 backdrop-blur-md border-b shadow-sm"
                : "bg-transparent border-transparent"
        )}>
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-2xl text-primary flex items-center gap-2 group">
                    <div className="bg-primary text-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                        <Plane className="h-5 w-5 fill-current" />
                    </div>
                    <span className={cn("transition-colors", !scrolled && "text-white drop-shadow-sm")}>Musafir</span>
                </Link>

                {/* Helper for coloring text based on scroll */}
                <style jsx global>{`
           nav:not(.bg-white\\/80) .text-contrast {
             color: white;
             text-shadow: 0 1px 2px rgba(0,0,0,0.3);
           }
           nav:not(.bg-white\\/80) .text-contrast:hover {
             color: rgba(255,255,255,0.8);
           }
        `}</style>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/become-host">
                        <Button variant="ghost" className={cn("font-medium hover:bg-white/10", !scrolled && "text-contrast hover:text-contrast")}>
                            Become a Host
                        </Button>
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className={cn("gap-2 rounded-full border-muted-foreground/20 transition-all hover:shadow-md", !scrolled && "bg-white/10 dark:bg-black/20 text-white border-white/20 hover:bg-white/20")}>
                                <Menu className="h-4 w-4" />
                                <User className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 mt-2 rounded-xl p-2">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <Link href="/signup">
                                <DropdownMenuItem className="cursor-pointer">Sign up</DropdownMenuItem>
                            </Link>
                            <Link href="/login">
                                <DropdownMenuItem className="cursor-pointer">Log in</DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator />
                            <Link href="/help-center">
                                <DropdownMenuItem className="cursor-pointer">Help Center</DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

                {/* Mobile Nav */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className={cn("md:hidden", !scrolled && "text-white")}>
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="flex flex-col gap-4 mt-8">
                            <Link href="/" className="text-lg font-medium">
                                Home
                            </Link>
                            <Link href="/become-host" className="text-lg font-medium">
                                Become a Host
                            </Link>
                            <Link href="/login" className="text-lg font-medium">
                                Log in
                            </Link>
                            <Link href="/signup" className="text-lg font-medium">
                                Sign up
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
