"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

interface BookingWidgetProps {
    price: number;
}

export function BookingWidget({ price }: BookingWidgetProps) {
    const handleBook = () => {
        toast.success("Booking Request Sent!", {
            description: "The host has been notified of your request.",
        });
        console.log("Booking requested for price:", price);
    };

    return (
        <Card className="shadow-lg sticky top-24">
            <CardHeader className="pb-4">
                <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold">${price}</span>
                    <span className="text-muted-foreground">night</span>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 border rounded-lg mb-4">
                    <div className="p-3 border-r border-b">
                        <div className="text-[10px] font-bold uppercase">Check-in</div>
                        <div className="text-sm">Add date</div>
                    </div>
                    <div className="p-3 border-b">
                        <div className="text-[10px] font-bold uppercase">Checkout</div>
                        <div className="text-sm">Add date</div>
                    </div>
                    <div className="col-span-2 p-3">
                        <div className="text-[10px] font-bold uppercase">Guests</div>
                        <div className="text-sm">1 guest</div>
                    </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg h-12" onClick={handleBook}>
                    Request to Book
                </Button>
                <div className="text-center text-xs text-muted-foreground mt-4">
                    You won't be charged yet
                </div>

                <div className="mt-6 space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="underline">${price} x 5 nights</span>
                        <span>${price * 5}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="underline">Cleaning fee</span>
                        <span>$50</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="underline">Service fee</span>
                        <span>$85</span>
                    </div>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between font-bold">
                    <span>Total before taxes</span>
                    <span>${price * 5 + 50 + 85}</span>
                </div>

            </CardContent>
        </Card>
    );
}
