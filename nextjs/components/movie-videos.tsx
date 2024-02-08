import { API_URL } from '@/app/(home)/page';
import axios from 'axios';

async function getVideos(id: string) {
  const { data } = await axios.get(`${API_URL}/${id}/videos`);
  return data;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
