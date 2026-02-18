import { LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/MovieRow";
import { getPopular, getTopRated, getNowPlaying, getUpcoming } from "@/lib/tmdb";

const Index = () => {
  const { signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-gradient-to-b from-background to-transparent px-4 py-4 md:px-12">
        <span className="font-['Bebas_Neue'] text-3xl tracking-wider text-primary">NETFLIX</span>
        <Button variant="ghost" size="sm" onClick={signOut} className="gap-2 text-foreground">
          <LogOut className="h-4 w-4" /> Logout
        </Button>
      </nav>

      <HeroBanner />

      <main className="-mt-16 relative z-10">
        <MovieRow title="Popular on Netflix" fetchMovies={getPopular} />
        <MovieRow title="Top Rated" fetchMovies={getTopRated} />
        <MovieRow title="Now Playing" fetchMovies={getNowPlaying} />
        <MovieRow title="Upcoming" fetchMovies={getUpcoming} />
      </main>
    </div>
  );
};

export default Index;
