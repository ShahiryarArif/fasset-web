import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed w-full px-5">
      <div className="flex items-center justify-between">
          <div>FASSET</div>
          <ul className="flex gap-40">
            <li><Link href="/" className="mr-5" >For People</Link></li>
            <li><Link href="/about" className="mr-5" >For Business</Link></li>
            <li><Link href="/contact" className="mr-5" >OTC Desk</Link></li>
            <li><Link href="/contact" className="mr-5" >Company</Link></li>
            <li><Link href="/contact" className="mr-5" >Resources</Link></li>
          </ul>
      </div>
    </nav>
  );
}
