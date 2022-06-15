import Link from "next/link";

export default function NavBar({}) {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" passHref>
            home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
