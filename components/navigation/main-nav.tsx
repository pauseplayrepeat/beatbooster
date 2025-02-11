'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useClerk, // ✅ Import useClerk
} from "@clerk/nextjs";

export function MainNav() {
  const { signOut } = useClerk(); // ✅ Correct usage inside the function body

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b bg-white shadow-md">
      <div className="container max-w-7xl mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <NavigationMenu className="bg-transparent hidden md:flex">
          <NavigationMenuList className="bg-transparent">
            <NavigationMenuItem className="mr-2 md:mr-6">
              <Link
                href="/"
                className="font-bold text-base md:text-lg text-gray-900 hover:text-gray-600 transition-colors"
              >
                BeatBooster.ai
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/compare"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 transition"
              >
                Boost Your Beats
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/pricing"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 transition"
              >
                Pricing
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center">
          <Link
            href="/"
            className="font-bold text-base text-gray-900 hover:text-gray-600 transition-colors mr-2"
          >
            BeatBooster.ai
          </Link>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Mobile Navigation Links */}
          <div className="flex md:hidden space-x-1">
            <Link
              href="/compare"
              className="px-2 py-1 text-sm text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
            >
              Boost Your Beats
            </Link>
            <Link
              href="/pricing"
              className="px-2 py-1 text-sm text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
            >
              Pricing
            </Link>
          </div>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm" className="hidden md:flex text-gray-900 hover:bg-gray-200">
                Sign In
              </Button>
            </SignInButton>
            <Button asChild size="sm" variant="ghost" className="text-gray-900 hover:bg-gray-200">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center space-x-4">
              <UserButton />
              <button
                onClick={async () => {
                  await signOut(); // Sign out first
                  window.location.href = "/"; // Then redirect manually
                }}

                className="px-3 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition"
              >
                Sign Out
              </button>
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
