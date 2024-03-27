import ToolBar from "../../_components/toolbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <ToolBar />
      {children}
    </main>
  );
}
