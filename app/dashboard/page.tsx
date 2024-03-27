import Image from "next/image";
import ToolBar from "../_components/toolbar";

export default function Dashboard() {
  return (
    <main>
      <ToolBar />
      <h1>Dashboard</h1>
      <Image src='/assets/images/dashboard.svg' alt='dashboard' width={400} height={400} />
    </main>
  );
}