import Link from "next/link";

export default function Header() {
    return (
        <Link href={"/"} className="w-full p-4 bg-blue-600 text-white text-xl font-bold block">
            Musik App
        </Link>
    );
}
