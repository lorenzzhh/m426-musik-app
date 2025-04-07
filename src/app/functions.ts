export async function fetchSpotifyAccessToken() {
    const clientId = "0b2643cb81754c209949a90a19989281"
    const clientSecret = "ed09bd814ae74160983870a6132c63c7"

    const authString = `${clientId}:${clientSecret}`;
    const base64Auth = btoa(authString); // Base64 encoding

    try {
        const res = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${base64Auth}`,
            },
            body: "grant_type=client_credentials"
        });

        if (!res.ok) {
            throw new Error(`Token request failed: ${res.status}`);
        }

        const data = await res.json();
        return data.access_token;
    } catch (err) {
        console.error("Fehler beim Abrufen des Access Tokens:", err);
        return null;
    }
}