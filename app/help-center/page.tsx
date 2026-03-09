import { Button } from "@/components/ui/button";
import { LifeBuoy, FileText, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";

export default function HelpCenterPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header section */}
            <div className="bg-emerald-600 text-white py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help?</h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Search for answers or browse through our frequently asked questions.
                </p>
                <div className="max-w-xl mx-auto relative group">
                    <input
                        type="search"
                        placeholder="Search for articles..."
                        className="w-full px-6 py-4 rounded-full text-zinc-900 text-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-400"
                    />
                </div>
            </div>

            {/* Quick links */}
            <div className="container mx-auto px-4 mt-[-40px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer text-center">
                        <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileText className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Getting Started</h3>
                        <p className="text-muted-foreground">Guides for new users and hosts on Musafir.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer text-center">
                        <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <LifeBuoy className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Trust & Safety</h3>
                        <p className="text-muted-foreground">Learn about our review system and booking protection.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer text-center">
                        <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MessageCircle className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Community Guidelines</h3>
                        <p className="text-muted-foreground">Our rules for respectful and inclusive travel.</p>
                    </div>
                </div>
            </div>

            {/* Contact Support */}
            <section className="container mx-auto px-4 py-20">
                <div className="bg-white max-w-4xl mx-auto rounded-3xl p-8 md:p-12 shadow-sm border flex flex-col md:flex-row items-center gap-8 justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
                        <p className="text-lg text-muted-foreground mb-6 md:mb-0">
                            Our support team is available 24/7 to assist you.
                        </p>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <Button size="lg" className="w-full md:w-auto gap-2">
                            <Mail className="h-5 w-5" />
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
