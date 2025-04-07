import React from "react";
import { Box, Card, CardContent, Typography, Button, Grid } from "@mui/material";

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
        description: "Cool song oder so"
      },
      {
        link: "https://open.spotify.com/intl-de/track/0B8drtTSp68pZdkmVrG9ZA?si=aff5e0e35a2e44de",
        description: "Old School"
      }
    ]
  },
  {
    album: "Rock",
    songs: [
      {
        link: "https://open.spotify.com/intl-de/track/300YN8ebGB90nDuzgz0f3O?si=4c35105aa5224baf",
        description: "Killer Queen"
      },
      {
        link: "https://open.spotify.com/intl-de/track/3z8h0TU7ReDPLIbEnYhWZb?si=51782704ce65451b",
        description: "asdfsadfasdfasdf"
      }
    ]
  },
  {
    album: "Favorites",
    songs: [
      {
        link: "https://open.spotify.com/intl-de/track/5hM5arv9KDbCHS0k9uqwjr?si=f2689853f6eb4276",
        description: "Borderline - Tame Impala"
      },
      {
        link: "https://open.spotify.com/intl-de/track/3hxIUxnT27p5WcmjGUXNwx?si=e47aee99c8da4fda",
        description: "Shut up my moms calling"
      }
    ]
  }
];

const SongCard: React.FC<{ song: Song }> = ({ song }) => (
  <Card sx={{ marginBottom: 2 }}>
    <CardContent>
      <Typography variant="body1">{song.description}</Typography>
      <Button
        variant="contained"
        color="primary"
        href={song.link}
        target="_blank"
        sx={{ marginTop: 1 }}
      >
        Listen on Spotify
      </Button>
    </CardContent>
  </Card>
);

const AlbumCard: React.FC<{ album: Album }> = ({ album }) => (
  <Card sx={{ marginBottom: 4 }}>
    <CardContent>
      <Typography variant="h5">{album.album}</Typography>
      {album.songs.map((song, index) => (
        <SongCard key={index} song={song} />
      ))}
    </CardContent>
  </Card>
);

const Albums: React.FC = () => (
  <Box sx={{ padding: 3 }}>
    <Grid container spacing={3}>
      {data.map((album, index) => (
        <Grid item xs={12} md={6} key={index}>
          <AlbumCard album={album} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Albums;
