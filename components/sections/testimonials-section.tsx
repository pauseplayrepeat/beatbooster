import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-24 md:py-32">
            <div className="text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">What Artists Say</h2>
                <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400">
                    Hear from musicians who have used our platform.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="p-6 border rounded-lg shadow-md">
                    <p className="text-gray-500">“This platform helped me get my music heard by top curators. Highly recommended!”</p>
                    <p className="mt-4 font-bold">– Alex J.</p>
                </div>
                <div className="p-6 border rounded-lg shadow-md">
                    <p className="text-gray-500">“A game-changer for independent artists looking to grow their audience.”</p>
                    <p className="mt-4 font-bold">– Maria K.</p>
                </div>
                <div className="p-6 border rounded-lg shadow-md">
                    <p className="text-gray-500">“The best way to connect with playlist curators. Super easy to use!”</p>
                    <p className="mt-4 font-bold">– David P.</p>
                </div>
            </div>
        </section>
    );
}