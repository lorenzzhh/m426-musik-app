"use client";
import React, { useState, useEffect } from "react";
import { fetchSpotifyAccessToken } from "@/app/functions";

type ReleaseObject = {
    id: string;
    name: string;
    images: { url: string }[];
    artists: { name: string }[];
    release_date: string;
    external_urls: { spotify: string };
};

export default function NewReleases() {
    const [newReleases, setNewReleases] = useState<Array<ReleaseObject>>([]);

    useEffect(() => {
        const fetchReleases = async () => {
            const token = await fetchSpotifyAccessToken();
            if (!token) return;

            try {
                const res = await fetch("https://api.spotify.com/v1/browse/new-releases", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const data = await res.json();
                setNewReleases(data.albums.items);
            } catch (error) {
                console.error("Fehler beim Laden der Releases:", error);
            }
        };

        fetchReleases();
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">New Releases</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {newReleases.map((album) => (
                    <li key={album.id} className="border p-4 rounded-2xl shadow hover:shadow-lg transition">
                        <img
                            src={album.images[0]?.url}
                            alt={`Cover von ${album.name}`}
                            className="w-full h-auto rounded mb-3"
                        />
                        <h3 className="text-lg font-semibold">{album.name}</h3>
                        <p className="text-sm text-gray-600">
                            {album.artists.map((artist) => artist.name).join(", ")}
                        </p>
                        <p className="text-xs text-gray-500">Release: {album.release_date}</p>
                        <a
                            href={album.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-sm text-green-600 hover:underline"
                        >
                            Auf Spotify anhören →
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
