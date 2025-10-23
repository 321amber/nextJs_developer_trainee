import Link from "next/link"

const Navigation = () => {
  return (
    <header className="grid grid-cols-2">
        <div className="">Amber logo</div>
        <nav>
            <ul className="flex gap-4">
             <li>
                <Link href="/">Home</Link>
             </li>
             <li>
                <Link href="/about">about</Link>
             </li>
             <li>
                <Link href="/contacts">contacts</Link>
             </li>
             <li>
                <Link href="/service">services</Link>
             </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation
