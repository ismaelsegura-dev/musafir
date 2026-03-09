"use client";

import { Search, MapPin, Calendar as CalendarIcon, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export function HeroSearch() {
    const router = useRouter();
    const [location, setLocation] = useState("");
    const [date, setDate] = useState<Date>();

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (location) params.set("location", location);
        router.push(`/search?${params.toString()}`);
    };

    return (
        <div className="bg-white rounded-full shadow-xl border p-2 flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x max-w-4xl mx-auto w-full">
            <div className="flex-1 px-6 py-2 w-full md:w-auto hover:bg-gray-50 rounded-full transition cursor-text">
                <label className="text-xs font-bold uppercase tracking-wider block mb-0.5 ml-1">
                    Where
                </label>
                <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search destinations"
                        className="w-full bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground truncate"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex-1 px-6 py-2 w-full md:w-auto hover:bg-gray-50 rounded-full transition">
                <Popover>
                    <PopoverTrigger asChild>
                        <div className="cursor-pointer text-left w-full">
                            <label className="text-xs font-bold uppercase tracking-wider block mb-0.5 ml-1">
                                Check in
                            </label>
                            <div className="flex items-center gap-2">
                                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                                <span className={cn("text-sm truncate", !date && "text-muted-foreground")}>
                                    {date ? format(date, "PPP") : "Add dates"}
                                </span>
                            </div>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>

            <div className="flex-1 px-6 py-2 w-full md:w-auto hover:bg-gray-50 rounded-full transition">
                <div className="cursor-pointer">
                    <label className="text-xs font-bold uppercase tracking-wider block mb-0.5 ml-1">
                        Who
                    </label>
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground truncate">Add guests</span>
                    </div>
                </div>
            </div>

            <div className="pl-4 pr-2 py-2">
                <Button
                    size="icon"
                    className="rounded-full bg-primary hover:bg-primary/90 h-12 w-12 shrink-0 shadow-lg"
                    onClick={handleSearch}
                >
                    <Search className="h-5 w-5 text-white" />
                </Button>
            </div>
        </div>
    );
}
