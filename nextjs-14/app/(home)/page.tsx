import axios from 'axios';
import { Metadata } from 'next';
import { API_URL } from '../constants';

export const metadata: Metadata = {
  title: 'Home',
};

async function getMovies() {
  const { data } = await axios.get(API_URL);
  return data;
}

export default async function Home() {
  const data = await getMovies();
  return <p>{JSON.stringify(data)}</p>;
}
