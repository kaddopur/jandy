import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#d7b98e] md:flex-row">
      <Image src="/invitation_01.jpg" width={520} height={725} />
      <Image src="/invitation_02.jpg" width={520} height={725} />
    </div>
  );
}
