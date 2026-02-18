import { useEffect, useState } from "react";
import { getTrending, IMG_BASE, type Movie } from "@/lib/tmdb";

const HeroBanner = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    getTrending().then((movies) => {
      if (movies.length) setMovie(movies[Math.floor(Math.random() * Math.min(5, movies.length))]);
    });
  }, []);

  if (!movie) return <div className="h-[70vh] bg-background" />;

  return (
    <header
      className="relative flex h-[70vh] items-end bg-cover bg-center px-4 pb-16 md:px-12"
      style={{
        backgroundImage: `url(${IMG_BASE}/original${movie.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative z-10 max-w-2xl">
        <h1 className="mb-3 text-4xl font-bold text-foreground md:text-5xl">{movie.title}</h1>
        <p className="line-clamp-3 text-sm text-muted-foreground md:text-base">{movie.overview}</p>
      </div>
    </header>
  );
};

export default HeroBanner;
