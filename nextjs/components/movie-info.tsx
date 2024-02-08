import { API_URL } from '@/app/(home)/page';
import axios from 'axios';

async function getMovie(id: string) {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
