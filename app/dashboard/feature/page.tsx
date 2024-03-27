import Image from "next/image";

export default function Feature(){
  return (
    <div>
      <h1>Feature</h1>
      <p>This is a feature</p>
      <Image src={'/assets/images/feature.svg'} alt='feature' width={400} height={400} />
    </div>
  )
}