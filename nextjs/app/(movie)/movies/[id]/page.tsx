import { API_URL } from '@/app/(home)/page';
import axios from 'axios';

async function getMovie(id: string) {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
}

async function getVideos(id: string) {
  const { data } = await axios.get(`${API_URL}/${id}/videos`);
  return data;
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);

  return <h1>{movie.title}</h1>;
}
