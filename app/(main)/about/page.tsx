import Image from "next/image";

export default function About(){
  return (
    <main>
      <h1>About</h1>
      <p>This is about</p>
      <Image src={'/assets/images/about.svg'} alt='about' width={400} height={400} />
    </main>
  )
}