import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SignupSection() {
    return (
        <section className="w-full px-4 py-24 bg-[#347b98] text-white text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold sm:text-4xl">
                    Ready to Change Your Music?
                </h2>
                <p className="mt-4 text-lg text-gray-200">
                    Join thousands of other music artists and producers <br />
                    taking their careers to the next level.
                </p>
                <div className="mt-6">
                    <Link href="/sign-up">
                        <button className="px-6 py-3 bg-orange-600 hover:bg-orange-800 text-white font-semibold rounded-xl shadow-lg transition text-center">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

