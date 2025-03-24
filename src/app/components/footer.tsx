import Link from "next/link";

export default function Footer() {
    return (
        <div className="p-4 bg-blue-600 text-white text-center text-sm">
            <div className="mb-2">
                <Link href="/" className="underline mx-2">Home</Link>
                <Link href="/impressum" className="underline mx-2">Impressum</Link>
                <Link href="/datenschutz" className="underline mx-2">Datenschutz</Link>
            </div>
            <div>&copy; 2025 Musik App.</div>
        </div>
    );
}
