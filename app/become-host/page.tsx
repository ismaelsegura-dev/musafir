import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function BecomeHostPage() {
    return (
        <div className="pb-20">
            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Host"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Earn money as a Musafir Host</h1>
                    <p className="text-xl mb-8">Share your Muslim-friendly space with travelers from around the world.</p>
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg px-8 py-6 h-auto">
                        Get Started
                    </Button>
                </div>
            </section>

            {/* Benefits */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Why host on Musafir?</h2>
                        <ul className="space-y-4">
                            {[
                                "Reach a growing market of Muslim travelers",
                                "Guaranteed payout protection",
                                "Specific amenities badge system (Prayer mats, Qibla)",
                                "Control your house rules (e.g. No alcohol)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg">
                                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Interior"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
