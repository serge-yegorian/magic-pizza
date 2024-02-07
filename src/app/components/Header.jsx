import Link from "next/link";


export default function Header() {
  return (
    <>
      <header className="bg-slate-900 flex items-center justify-between sticky top-0 left-0 right-0 py-2 ">
        <Link className="hover:text-primary-600 transition text-primary-500 font-semibold text-2xl px-8 py-2" href="/">MAGIC PIZZA</Link>
        <nav className="flex items-center gap-4 text-gray-300 font-thin pr-8">
          <Link className="py-2 hover:text-white transition" href={'/'}>Menu</Link>
          <Link className="py-2 hover:text-white transition" href={'/'}>About</Link>
          <Link className="py-2 hover:text-white transition" href={'/'}>Contact</Link>
          <Link className="hover:text-white transition hover:bg-primary-600 rounded-lg bg-primary-500 px-4 py-2" href={'/enter'}>Enter</Link>
        </nav>
      </header>
    </>
  );
}
