import type { Metadata } from 'next';
import styles from '../styles/home.module.css';
import axios from 'axios';
import Movie from '@/components/movie';
import { API_URL } from '../constant';

export const metadata: Metadata = {
  title: 'Home',
};

async function getMovies() {
  const { data: movies } = await axios.get(API_URL);
  return movies;
}

export default async function Home() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie: any) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
