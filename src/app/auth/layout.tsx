export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="!font-[family-name:var(--font-geist-sans)] flex items-center justify-items-center min-h-screen">{children}</div>
}