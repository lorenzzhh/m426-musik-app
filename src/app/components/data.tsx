// Albums.tsx
"use client";
import React from "react";

interface Song {
  link: string;
  description: string;
}

interface Album {
  album: string;
  songs: Song[];
}

const data: Album[] = [
  {
    album: "Rap",
    songs: [
      {
        link: "https://open.spotify.com/intl-de/track/6vOeokRJNZjouabFGDLH1C?si=35bc3088ea63442b",
        description: "Cool song oder so",
      },
      {
        link: "https://open.spotify.com/intl-de/track/0B8drtTSp68pZdkmVrG9ZA?si=aff5e0e35a2e44de",
        description: "Old School",
      },
    ],
  },
  {
    album: "Rock",
    songs: [
      {
        link: "https://open.spotify.com/intl-de/track/300YN8ebGB90nDuzgz0f3O?si=4c35105aa5224baf",
        description: "Killer Queen",
      },
      {
        link: "https://open.spotify.com/intl-de/track/3z8h0TU7ReDPLIbEnYhWZb?si=51782704ce65451b",
        description: "asdfsadfasdfasdf",
      },
    ],
  },
  {
    album: "Favorites",
    songs: [
      {
        link: "https://open.spotify.com/intl-de/track/5hM5arv9KDbCHS0k9uqwjr?si=f2689853f6eb4276",
        description: "Borderline - Tame Impala",
      },
      {
        link: "https://open.spotify.com/intl-de/track/3hxIUxnT27p5WcmjGUXNwx?si=e47aee99c8da4fda",
        description: "Shut up my moms calling",
      },
    ],
  },
];

const Albums: React.FC = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">My Albums</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((album, i) => (
            <li key={i} className="border p-4 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">{album.album}</h3>
              <ul className="space-y-2">
                {album.songs.map((song, j) => (
                    <li key={j} className="border p-3 rounded-lg bg-gray-50 hover:bg-white transition">
                      <p className="text-sm text-gray-700">{song.description}</p>
                      <a
                          href={song.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-1 text-sm text-green-600 hover:underline"
                      >
                        Auf Spotify anhören →
                      </a>
                    </li>
                ))}
              </ul>
            </li>
        ))}
      </ul>
    </div>
);

export default Albums;
