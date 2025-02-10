import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-24 md:py-32">
            <div className="flex flex-col items-center text-center space-y-8">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    Get connected with Music Curators<br />Quick & Easy
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    We enable artists to efficiently craft and contact music curators to help promote themselves.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="min-w-[200px]">
                        <Link href="/compare">Get Discovered Now</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="min-w-[200px]">
                        <Link href="#features">Learn More</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
} 