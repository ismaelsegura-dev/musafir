import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Musafir</h3>
                        <p className="text-sm text-muted-foreground">
                            Muslim-friendly travel made easy. Book villas with private pools, halal food nearby, and prayer facilities.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Community</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:underline">About us</Link></li>
                            <li><Link href="#" className="hover:underline">Trust & Safety</Link></li>
                            <li><Link href="#" className="hover:underline">Halal Standards</Link></li>
                            <li><Link href="#" className="hover:underline">Musafir Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Hosting</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/become-host" className="hover:underline">Become a Host</Link></li>
                            <li><Link href="#" className="hover:underline">Hosting Resources</Link></li>
                            <li><Link href="#" className="hover:underline">Community Forum</Link></li>
                            <li><Link href="#" className="hover:underline">Cover for Hosts</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:underline">Help Center</Link></li>
                            <li><Link href="#" className="hover:underline">Cancellation Options</Link></li>
                            <li><Link href="#" className="hover:underline">Report a Concern</Link></li>
                        </ul>
                    </div>
                </div>
                <Separator className="my-8" />
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
                    <p>© 2026 Musafir, Inc.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:underline">Privacy</Link>
                        <Link href="#" className="hover:underline">Terms</Link>
                        <Link href="#" className="hover:underline">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
