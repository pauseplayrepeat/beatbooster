import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sidebar } from "@/components/ui/sidebar";
import Link from "next/link";

export default async function DashboardPage() {
    // const { userId } = await auth();
    // if (!userId) {
    //     redirect("/sign-in");
    // }

    // return <h1>Welcome to Your Dashboard</h1>; 
    // uncomment to have auth feature back. 

    return (
        <div className="flex min-h-screen">
           <Sidebar />





            {/* Main Dashboard Content */}
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Welcome, Artist! 🎶</h1>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Credits Available</CardTitle>
                        </CardHeader>
                        <CardContent className="text-4xl font-bold">12</CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Active Campaigns</CardTitle>
                        </CardHeader>
                        <CardContent className="text-4xl font-bold">3</CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Engagement Rate</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold">72%</div>
                            <Progress value={72} className="mt-2" />
                        </CardContent>
                    </Card>
                </div>

                {/* Tabs for Recent Activity */}
                <Tabs defaultValue="campaigns" className="mt-8">
                    <TabsList>
                        <TabsTrigger value="campaigns">Recent Campaigns</TabsTrigger>
                        <TabsTrigger value="submissions">Recent Submissions</TabsTrigger>
                    </TabsList>

                    <TabsContent value="campaigns">
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Email Campaigns</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="border p-3 rounded-md">🎵 "New Single Pitch" - Sent to 50 curators</li>
                                    <li className="border p-3 rounded-md">🔥 "Press Release" - Sent to 30 blogs</li>
                                    <li className="border p-3 rounded-md">⚡ "Exclusive Premiere" - Sent to 10 VIPs</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="submissions">
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Submissions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="border p-3 rounded-md">🎶 Submitted "Hit Song" to IndieBlog</li>
                                    <li className="border p-3 rounded-md">💌 Sent a VIP request to RollingStone A&R</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                {/* Quick Actions */}
                <div className="mt-8 flex space-x-4">
                    <Button asChild>
                        <Link href="/campaigns/new">➕ Create New Campaign</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/credits">💳 Buy More Credits</Link>
                    </Button>
                </div>
            </main>
        </div>
    );
}
