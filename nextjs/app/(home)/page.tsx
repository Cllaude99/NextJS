import axios from 'axios';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

const URL = `https://nomad-movies.nomadcoders.workers.dev/movies`;

async function getMovies() {
  const { data: movies } = await axios.get(URL);
  return movies;
}

export default async function Home() {
  const movies = await getMovies();

  return (
    <div>
      <h1>{JSON.stringify(movies)}</h1>
    </div>
  );
}
