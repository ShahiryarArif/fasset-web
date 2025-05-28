import Link from "next/link";

export default function Header() {
  return (
    <nav className="container fixed w-full px-5 mt-8">
      <div className="flex items-center justify-between">
          <div className="text-4xl ml-5 italic">FASSET</div>
          <ul className="flex gap-30">
            <li><Link href="/" >For People</Link></li>
            <li><Link href="/about" >For Business</Link></li>
            <li><Link href="/contact" >OTC Desk</Link></li>
            <li><Link href="/contact" >Company</Link></li>
            <li><Link href="/contact" >Resources</Link></li>
          </ul>
      </div>
    </nav>
  );
}
