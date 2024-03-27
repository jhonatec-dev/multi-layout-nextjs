import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <Image src={"/assets/images/404.svg"} alt='404' width={400} height={400} />
      <h1>Ooooooops!</h1>
      <p>Page not found</p>
      <Link href='/'>Back to home</Link>
    </main>
  );
}
