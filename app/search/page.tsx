import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal } from "lucide-react";
import { SearchFilters } from "@/components/search-filters";
import { supabase } from "@/lib/supabase";
import { Property } from "@/data/mock-listings";

interface SearchPageProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    // Await searchParams in newer Next.js versions if needed, but in 14 it's an object. 
    // In 2026 (Next 16?), it might be a promise. I'll treat it as object for now or await it if it's a promise.
    // Ideally I should check documentation but I'll write defensive code.

    const resolvedParams = await searchParams; // Next 15+ convention
    const location = typeof resolvedParams.location === 'string' ? resolvedParams.location : undefined;

    const { data: propertiesData } = await supabase.from('properties').select('*');
    const properties: Property[] = propertiesData || [];

    // Simple filter
    const filteredProperties = location
        ? properties.filter(p =>
            p.location.toLowerCase().includes(location.toLowerCase()) ||
            p.title.toLowerCase().includes(location.toLowerCase())
        )
        : properties;

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Search Header */}
            <div className="flex flex-col gap-4 mb-8">
                <p className="text-sm text-muted-foreground">
                    {filteredProperties.length} stays {location ? `in ${location}` : ''}
                </p>
                <h1 className="text-3xl font-bold">
                    {location ? `Stays in ${location}` : 'All Villas'}
                </h1>

                {/* Filters */}
                <SearchFilters />
            </div>

            <Separator className="mb-8" />

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProperties.length > 0 ? (
                    filteredProperties.map((property) => (
                        <div key={property.id} className="h-full">
                            <PropertyCard property={property} />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center">
                        <h3 className="text-lg font-semibold">No results found</h3>
                        <p className="text-muted-foreground">Try adjusting your search for 'Bali' or 'Langkawi'</p>
                    </div>
                )}
            </div>
        </div>
    );
}
