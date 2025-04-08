
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( <div>
    <h1>Dash Layout</h1>
    {children}
  </div>
  );
}
