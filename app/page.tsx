"use client"
import Header from "@/components/header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

export default function Home() {
  const redefineDivRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appImageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = appImageRef.current;

    function resizeCanvas() {
      if (canvas && redefineDivRef.current) {
        canvas.width = redefineDivRef.current.offsetWidth ?? 0;
        canvas.height = redefineDivRef.current.offsetHeight ?? 0;
      }
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    gsap.to(redefineDivRef.current, {
      scrollTrigger: {
        trigger: ".main-div",
        start: "top top",
        end: "bottom 20%",
        scrub: 1,
      },
      background: "#767C72",
      y: "-200px",
      ease: "none",
    })
  }, [])
  
  return (
    <div>
      <Header />
      <section className="main-div relative -z-1 bg-[url(/images/banner.jpg)] bg-cover h-screen w-full">
        <h1 className="absolute bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-9xl font-bold">FASSET</h1>
      </section>
      <section ref={redefineDivRef} className="bg-[#212420]">
        <h1 className="h-screen">Hello</h1>
      </section>
    </div>
  );
}
