import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="relative -z-1 bg-[url(/images/banner.jpg)] bg-cover h-screen w-full">
        <h1 className="absolute bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-9xl font-bold">FASSET</h1>
      </section>
      <section>
        <h1 className="h-screen">Hello</h1>
      </section>
    </div>
  );
}
