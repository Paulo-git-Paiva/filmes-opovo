export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export interface MovieDetails extends Movie {
  genres: { id: number; name: string }[];
  release_date: string;
}
