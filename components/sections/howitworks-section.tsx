import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HowItWorksSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-24 md:py-32 bg-gray-100 dark:bg-gray-900">
            <div className="text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
                <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400">
                    Get started in just three simple steps.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
                <div className="p-6 text-center max-w-xs">
                    <h3 className="text-xl font-semibold">1️⃣ Create Your Profile</h3>
                    <p className="mt-2 text-gray-500">Sign up and showcase your music effortlessly.</p>
                </div>
                <div className="p-6 text-center max-w-xs">
                    <h3 className="text-xl font-semibold">2️⃣ Find Curators</h3>
                    <p className="mt-2 text-gray-500">Explore a database of music curators and submit your tracks.</p>
                </div>
                <div className="p-6 text-center max-w-xs">
                    <h3 className="text-xl font-semibold">3️⃣ Get Feedback & Grow</h3>
                    <p className="mt-2 text-gray-500">Receive insights and boost your music career.</p>
                </div>
            </div>
        </section>
    );
}
