const TMDB_API_KEY = "5b59d9d387e7d1b97003ee2d2c7a4a44";
const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_BASE = "https://image.tmdb.org/t/p";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date: string;
}

interface TMDBResponse {
  results: Movie[];
}

const fetchMovies = async (endpoint: string): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}${endpoint}?api_key=${TMDB_API_KEY}`);
  if (!res.ok) return [];
  const data: TMDBResponse = await res.json();
  return data.results;
};

export const getTrending = () => fetchMovies("/trending/movie/week");
export const getPopular = () => fetchMovies("/movie/popular");
export const getTopRated = () => fetchMovies("/movie/top_rated");
export const getNowPlaying = () => fetchMovies("/movie/now_playing");
export const getUpcoming = () => fetchMovies("/movie/upcoming");
