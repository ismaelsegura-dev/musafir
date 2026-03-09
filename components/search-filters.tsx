"use client";

import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox"; // Need to install
import { Label } from "@/components/ui/label";

export function SearchFilters() {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const toggleFilter = (filter: string) => {
        if (activeFilters.includes(filter)) {
            setActiveFilters(activeFilters.filter(f => f !== filter));
        } else {
            setActiveFilters([...activeFilters, filter]);
        }
    };

    return (
        <div className="flex flex-wrap items-center gap-3 mt-2">
            <Button
                variant={activeFilters.includes("Price") ? "default" : "outline"}
                className="rounded-full text-sm h-9"
                onClick={() => toggleFilter("Price")}
            >
                Price <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
            <Button
                variant={activeFilters.includes("Type") ? "default" : "outline"}
                className="rounded-full text-sm h-9"
                onClick={() => toggleFilter("Type")}
            >
                Type of place
            </Button>
            <Button
                variant={activeFilters.includes("Amenities") ? "default" : "outline"}
                className="rounded-full text-sm h-9"
                onClick={() => toggleFilter("Amenities")}
            >
                Amenities
            </Button>
            <Button
                variant={activeFilters.includes("Halal") ? "default" : "outline"}
                className="rounded-full text-sm h-9"
                onClick={() => toggleFilter("Halal")}
            >
                Halal Facilities
            </Button>

            <div className="ml-auto hidden md:block">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="gap-2 rounded-lg">
                            <SlidersHorizontal className="h-4 w-4" />
                            Filters
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Filters</SheetTitle>
                        </SheetHeader>
                        <div className="py-6 space-y-6">
                            <div>
                                <h3 className="font-medium mb-4">Price range</h3>
                                <div className="h-10 bg-gray-100 rounded-lg flex items-center justify-center text-muted-foreground text-sm">
                                    $50 - $500+
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium mb-4">Amenities</h3>
                                <div className="space-y-3">
                                    {['Wifi', 'Kitchen', 'Washer', 'Air conditioning', 'Pool'].map((item) => (
                                        <div key={item} className="flex items-center space-x-2">
                                            <Checkbox id={item} />
                                            <Label htmlFor={item}>{item}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <SheetFooter>
                            <Button type="submit" className="w-full">Show 150+ homes</Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}
