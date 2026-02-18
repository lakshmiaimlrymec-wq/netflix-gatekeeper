import { useEffect, useState } from "react";
import { IMG_BASE, type Movie } from "@/lib/tmdb";

interface MovieRowProps {
  title: string;
  fetchMovies: () => Promise<Movie[]>;
}

const MovieRow = ({ title, fetchMovies }: MovieRowProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, [fetchMovies]);

  if (!movies.length) return null;

  return (
    <section className="mb-8">
      <h2 className="mb-3 px-4 text-xl font-semibold text-foreground md:px-12">{title}</h2>
      <div className="flex gap-2 overflow-x-auto px-4 pb-4 md:px-12">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={movie.poster_path ? `${IMG_BASE}/w300${movie.poster_path}` : "/placeholder.svg"}
            alt={movie.title}
            className="h-44 w-auto flex-shrink-0 rounded-md object-cover transition-transform duration-200 hover:scale-110 md:h-52"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default MovieRow;
