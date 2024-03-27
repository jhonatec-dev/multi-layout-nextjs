import Image from "next/image";

export default function Dashboard() {
  return (
    <div>
      
      <h1>Dashboard</h1>
      <Image src='/assets/images/dashboard.svg' alt='dashboard' width={400} height={400} />
    </div>
  );
}