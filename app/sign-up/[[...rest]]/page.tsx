import { MainNav } from "@/components/navigation/main-nav";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
            <MainNav />
            <SignUp
                appearance={{
                    elements: {
                        formButtonPrimary: "bg-primary hover:bg-primary/90",
                        footerActionLink: "text-primary hover:text-primary/90",
                    }
                }}
            />
        </div>
    );
} 