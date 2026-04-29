import { MovieDetails } from "@/types/movie";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "559e211bfad132b68620e56039fa0d7f",
    language: "pt-BR",
  },
});

export const getPopularMovies = async () => {
  const res = await api.get("/movie/popular");
  return res.data.results;
};

export const getTopRatedMovies = async () => {
  const res = await api.get("/movie/top_rated");
  return res.data.results;
};

export const getTrendingMovies = async () => {
  const res = await api.get("/trending/movie/week");
  return res.data.results;
};

export const getNowPlayingMovies = async () => {
  const res = await api.get("/movie/now_playing");
  return res.data.results;
};

export const getMovieDetails = async (id: number): Promise<MovieDetails> => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export default api;
