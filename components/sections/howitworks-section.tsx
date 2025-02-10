import Link from "next/link";
import { FaUser, FaMusic, FaChartLine } from "react-icons/fa"; // Importing icons

export function HowItWorksSection() {
    return (
        <section className="w-full px-4 py-24 md:py-32 bg-[#347B98] text-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
                <p className="mt-4 text-gray-300 md:text-lg">
                    Get started in just three simple steps.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
                <div className="p-6 text-center max-w-xs">
                    <FaUser size={40} className="mx-auto mb-4 text-white" />
                    <h3 className="text-xl font-semibold">Create Your Profile</h3>
                    <p className="mt-2 text-gray-300">Sign up and showcase your music effortlessly.</p>
                </div>
                <div className="p-6 text-center max-w-xs">
                    <FaMusic size={40} className="mx-auto mb-4 text-white" />
                    <h3 className="text-xl font-semibold">Find Curators</h3>
                    <p className="mt-2 text-gray-300">Explore a database of music curators and submit your tracks.</p>
                </div>
                <div className="p-6 text-center max-w-xs">
                    <FaChartLine size={40} className="mx-auto mb-4 text-white" />
                    <h3 className="text-xl font-semibold">Get Feedback & Grow</h3>
                    <p className="mt-2 text-gray-300">Receive insights and boost your music career.</p>
                </div>
            </div>
        </section>
    );
}
