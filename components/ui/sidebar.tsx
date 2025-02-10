import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

export function Sidebar() {
    return (
        // Sidebar
        <aside className="w-64 bg-gray-900 text-white flex flex-col justify-between h-screen p-4">

            {/* Top: Title */}
            <div className="flex justify-center">
                <h2 className="text-xl font-bold">Beat Booster</h2>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col items-center mt-6">
                {/* Profile Picture (Placeholder) */}
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-gray-400">👤</span> {/* Placeholder Avatar */}
                </div>

                {/* Artist Name */}
                <h3 className="mt-3 text-lg font-semibold">Artist Name</h3>

                {/* Account Status (Changed to a Rectangular Button) */}
                <span className="mt-1 px-2 py-1 bg-white text-gray-900 text-sm font-medium">
                    Pro
                </span>
                {/* Change "Pro" to "Free" dynamically */}
            </div>

            {/* Middle: Navigation Menu Items */}
            <nav className="flex flex-col flex-1 justify-center space-y-8">
                <NavigationMenu>
                    <NavigationMenuList className="flex flex-col space-y-6 w-full items-center">
                        <NavigationMenuItem className="w-full">
                            <Link href="/dashboard" className="flex items-center gap-4 p-3 w-full rounded-md hover:bg-gray-800">
                                <span className="w-6 text-center">🎛</span>
                                <span className="flex-1 text-left">Dashboard</span>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-full">
                            <Link href="/campaigns" className="flex items-center gap-4 p-3 w-full rounded-md hover:bg-gray-800">
                                <span className="w-6 text-center">📩</span>
                                <span className="flex-1 text-left">Email Campaigns</span>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-full">
                            <Link href="/analytics" className="flex items-center gap-4 p-3 w-full rounded-md hover:bg-gray-800">
                                <span className="w-6 text-center">📊</span>
                                <span className="flex-1 text-left">Analytics</span>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-full">
                            <Link href="/settings" className="flex items-center gap-4 p-3 w-full rounded-md hover:bg-gray-800">
                                <span className="w-6 text-center">⚙️</span>
                                <span className="flex-1 text-left">Settings</span>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>

            {/* Bottom: Logout Button */}
            <div className="flex justify-center pb-6">
                <button className="flex items-center gap-4 p-3 w-full text-white hover:bg-gray-800 rounded-md">
                    <span className="w-6 text-center">🚪</span>
                    <span className="flex-1 text-left">Logout</span>
                </button>
            </div>
        </aside>
    );
}
