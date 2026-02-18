import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Welcome = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <h1 className="mb-2 font-['Bebas_Neue'] text-7xl tracking-wider text-primary">
        NETFLIX
      </h1>
      <p className="mb-10 text-lg text-muted-foreground">
        Unlimited movies, TV shows, and more
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link to="/register">Register</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
