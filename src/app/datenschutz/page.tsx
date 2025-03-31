import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export default function Page() {
    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto mt-8">
                <h1 className="text-3xl font-bold text-blue-600 mb-6">Datenschutz</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Musik App GmbH nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                    vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Verantwortliche Stelle im Sinne der Datenschutzgesetze ist:<br />
                    Musik App GmbH<br />
                    Musterstraße 123<br />
                    12345 Musterstadt<br />
                    Schweiz
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    <strong>Datenerhebung und -verarbeitung:</strong> Wir erheben und verarbeiten personenbezogene Daten nur, wenn dies
                    zur Bereitstellung unserer Dienste erforderlich ist und/oder Sie uns Ihre ausdrückliche Einwilligung geben.
                </p>
            </div>
            <Footer />
        </>
    );
}
