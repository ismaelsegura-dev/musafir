"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star, Heart } from 'lucide-react';
import { Property } from '@/data/mock-listings';
import { motion } from 'framer-motion';

interface PropertyCardProps {
    property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
    return (
        <Link href={`/property/${property.id}`} className="block h-full">
            <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
            >
                <Card className="h-full border-none shadow-none bg-transparent group overflow-visible">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-xl">
                        <Image
                            src={property.image}
                            alt={property.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                            <div className="flex flex-wrap gap-1">
                                {property.badges.slice(0, 1).map((badge) => (
                                    <Badge key={badge} variant="secondary" className="bg-white/95 text-primary backdrop-blur-md shadow-sm border-none px-2.5 py-1">
                                        {badge}
                                    </Badge>
                                ))}
                            </div>
                            <button className="rounded-full bg-black/20 p-2 text-white backdrop-blur-sm transition hover:bg-black/40 hover:scale-110">
                                <Heart className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <CardContent className="p-0 pt-4 flex-1">
                        <div className="flex justify-between items-start gap-2">
                            <h3 className="font-bold text-base line-clamp-1 group-hover:text-primary transition-colors">
                                {property.title}
                            </h3>
                            <div className="flex items-center gap-1 text-sm font-medium">
                                <Star className="h-3.5 w-3.5 fill-current text-yellow-500" />
                                <span>{property.rating}</span>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm mt-1 mb-2">
                            {property.location}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                            {property.badges.slice(1, 3).map((badge) => (
                                <span key={badge} className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </CardContent>

                    <CardFooter className="p-0 pt-2 mt-auto">
                        <div className="flex items-baseline gap-1.5">
                            <span className="font-bold text-lg">${property.price}</span>
                            <span className="text-muted-foreground text-sm">night</span>
                        </div>
                    </CardFooter>
                </Card>
            </motion.div>
        </Link>
    );
}
