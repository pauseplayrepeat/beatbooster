import Link from "next/link";
import { FaTwitter, FaInstagram } from "react-icons/fa"; // Importing icons

export function FooterSection() {
    return (
        <section className="w-full px-4 py-16 bg-white text-black">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl font-bold">BeatBooster.ai</h2>
                <p className="mt-2 text-gray-600">
                    Empower your music by connecting independent artists and producers with industry opportunities.
                </p>
                <div className="flex justify-center gap-4 mt-4">
                    <Link href="https://twitter.com" target="_blank" className="text-gray-800 hover:text-blue-500 transition">
                        <FaTwitter size={28} />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" className="text-gray-800 hover:text-pink-500 transition">
                        <FaInstagram size={28} />
                    </Link>
                </div>
            </div>
        </section>
    );
}