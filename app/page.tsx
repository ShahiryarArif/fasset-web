import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="bg-[url(/images/banner.jpg)] h-screen w-full">
        {/* <h1>FASSET</h1> */}
      </main>
      <h1>Hello</h1>
    </div>
  );
}
