"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
    return (
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[80vh]">
            <Link href="/" className="self-start mb-8 text-muted-foreground hover:text-primary flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                    <CardDescription>
                        Join the community of Muslim travelers
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="first-name" className="text-sm font-medium leading-none">First name</label>
                            <Input id="first-name" placeholder="Muhammad" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="last-name" className="text-sm font-medium leading-none">Last name</label>
                            <Input id="last-name" placeholder="Yusuf" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                        <Input id="email" placeholder="m.yusuf@example.com" type="email" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium leading-none">Password</label>
                        <Input id="password" type="password" />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">Sign Up</Button>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <div className="text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="underline text-primary">
                            Log in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
