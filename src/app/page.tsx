import Header from "./components/header";
import Footer from "./components/footer";
import Albums from "./components/data";
import Link from "next/link";
import {Button} from "@mui/material";

export default function Home() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Willkommen auf der Musik App</h1>
                <p className="text-lg text-gray-700 mb-6">Entdecke deine Lieblingsmusik und bleibe immer up-to-date.</p>
                <Link href="/newReleases" passHref>
                    <Button>New Releases</Button>
                </Link>
                <Albums />
            </div>
            <Footer />
        </>
    );
}
