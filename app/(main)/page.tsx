import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Hi there!</h1>
      <Image
        src='/assets/images/welcome.svg'
        alt='Welcome'
        width={400}
        height={400}
      />
    </main>
  );
}
