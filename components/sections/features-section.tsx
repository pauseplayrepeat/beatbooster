import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FeaturesSection() {
    return (
        <section id="features" className="max-w-7xl mx-auto px-4 py-24 md:py-32">
            <div className="text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Us?</h2>
                <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400">
                    We make it easy for artists to connect with curators and boost their reach.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 border rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">🔍 Discover Curators</h3>
                    <p className="mt-2 text-gray-500">Find the right curators for your music with advanced filtering.</p>
                </div>
                <div className="p-6 border rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">📢 Promote Your Music</h3>
                    <p className="mt-2 text-gray-500">Easily submit your tracks and get heard by top curators.</p>
                </div>
                <div className="p-6 border rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">📊 Track Your Success</h3>
                    <p className="mt-2 text-gray-500">Monitor engagement and see how your submissions perform.</p>
                </div>
            </div>
        </section>
    );
}