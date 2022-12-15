import Link from "next/link";
import { FaHamburger } from "react-icons/Fa";

export default function Header() {
  return (
    <header>
      <div>
        <FaHamburger />
      </div>
      <nav>
        <Link href="/">Домой</Link>
        <Link href="/about">О нас</Link>
        <Link href="/reviews">Отзывы</Link>
        <Link href="/burgers">Бургеры</Link>
      </nav>
    </header>
  );
}
