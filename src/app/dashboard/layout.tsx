import Header from "@/components/pages/dashboard/Header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex flex-col h-screen">
            <Header />
            <div className="flex-1">{children}</div>
        </main>
    );
}
