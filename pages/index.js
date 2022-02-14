import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1em",
          backgroundColor: "#e7b98e",
        }}
      >
        <Image src="/invitation_01.jpg" width={520} height={725} />
        <Image src="/invitation_02.jpg" width={520} height={725} />
      </div>
    </div>
  );
}
