import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export default function Page() {
    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto mt-8">
                <h1 className="text-3xl font-bold text-blue-600 mb-6">Impressum</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Musik App GmbH<br />
                    Musterstraße 123<br />
                    12345 Musterstadt<br />
                    Schweiz
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Developer: Remo Scherrer, Elias Zulauf, Lorenz Fritschi<br />
                    E-Mail: <a href="mailto:info@musikapp.ch" className="text-blue-600 underline">info@musikapp.ch</a><br />
                    Telefon: +41 123 456789
                </p>
                <p className="text-lg text-gray-700">
                    Haftungsausschluss: Alle Inhalte auf dieser Webseite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                    Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.
                </p>
            </div>
            <Footer />
        </>
    );
}
