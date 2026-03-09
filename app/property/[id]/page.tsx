import { properties } from "@/data/mock-listings";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, ShieldCheck, Check } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BookingWidget } from "@/components/booking-widget";

interface PropertyPageProps {
    params: { id: string };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
    const resolvedParams = await params;
    const property = properties.find((p) => p.id === resolvedParams.id);

    if (!property) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-6 md:py-8">
            {/* Title Header */}
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{property.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1 font-medium text-foreground">
                        <Star className="h-4 w-4 fill-current" />
                        {property.rating} · <span className="underline">{property.reviews} reviews</span>
                    </span>
                    <span className="hidden md:inline">·</span>
                    <span className="flex items-center gap-1 font-medium text-primary">
                        <ShieldCheck className="h-4 w-4" />
                        Superhost
                    </span>
                    <span className="hidden md:inline">·</span>
                    <span className="flex items-center gap-1 underline font-medium text-foreground">
                        <MapPin className="h-4 w-4" />
                        {property.location}
                    </span>
                </div>
            </div>

            {/* Image Gallery (Simplified) */}
            <div className="relative aspect-video md:aspect-[2.5/1] w-full overflow-hidden rounded-xl mb-8 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-2 bg-gray-100">
                <div className="col-span-2 row-span-2 relative h-full min-h-[300px]">
                    <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Placeholders for gallery */}
                <div className="relative hidden md:block bg-gray-200">
                    <Image src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=400&q=80" alt="detail" fill className="object-cover" />
                </div>
                <div className="relative hidden md:block bg-gray-200">
                    <Image src="https://images.unsplash.com/photo-1613490493576-2f045a129208?auto=format&fit=crop&w=400&q=80" alt="detail" fill className="object-cover" />
                </div>
                <div className="relative hidden md:block bg-gray-200">
                    <Image src="https://images.unsplash.com/photo-1596178065887-1198b6148b2e?auto=format&fit=crop&w=400&q=80" alt="detail" fill className="object-cover" />
                </div>
                <div className="relative hidden md:block bg-gray-200">
                    <Image src="https://images.unsplash.com/photo-1571896349842-6e53ce41e887?auto=format&fit=crop&w=400&q=80" alt="detail" fill className="object-cover" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Left Column: Details */}
                <div className="md:col-span-2 space-y-8">
                    {/* Host Info */}
                    <div className="flex items-center justify-between pb-6 border-b">
                        <div>
                            <h2 className="text-xl font-semibold mb-1">Entire villa hosted by {property.host.name}</h2>
                            <p className="text-muted-foreground text-sm">6 guests · 3 bedrooms · 3 beds · 3 baths</p>
                        </div>
                        {/* Avatar placeholder if not installed, using img */}
                        <div className="h-14 w-14 rounded-full overflow-hidden relative border">
                            <Image src={property.host.image} alt={property.host.name} fill className="object-cover" />
                        </div>
                    </div>

                    {/* Badges / Highlights */}
                    <div className="flex flex-wrap gap-3">
                        {property.badges.map(badge => (
                            <Badge key={badge} variant="outline" className="text-sm py-1.5 px-3 border-emerald-200 bg-emerald-50 text-emerald-800 gap-2">
                                <Check className="h-3 w-3" /> {badge}
                            </Badge>
                        ))}
                    </div>

                    <Separator />

                    {/* Description */}
                    <div>
                        <p className="leading-relaxed text-muted-foreground">
                            {property.description}
                        </p>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            Decorated with traditional Balinese charm and Muslim-friendly touches.
                            The kitchen is equipped for halal cooking, and we can arrange halal catering upon request.
                        </p>
                    </div>

                    <Separator />

                    {/* Amenities */}
                    <div>
                        <h2 className="text-xl font-semibold mb-6">What this place offers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {property.amenities.map((amenity) => (
                                <div key={amenity} className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-muted-foreground" />
                                    <span>{amenity}</span>
                                </div>
                            ))}
                            <div className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-muted-foreground" />
                                <span>Carbon monoxide alarm</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-muted-foreground" />
                                <span>Smoke alarm</span>
                            </div>
                        </div>
                        <Button variant="outline" className="mt-8 font-semibold">
                            Show all 32 amenities
                        </Button>
                    </div>
                </div>

                {/* Right Column: Booking Widget */}
                <div className="hidden md:block">
                    <BookingWidget price={property.price} />
                </div>
            </div>

            {/* Mobile Sticky Footer Binding */}
            {/* Implementation omitted for simplicity, built-in to BookingWidget usually or needs a specific wrapper */}
        </div>
    );
}
