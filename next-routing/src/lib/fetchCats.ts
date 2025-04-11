import { CatBreed } from '@/interfaces/cat.interface';

export async function fetchCats(): Promise<CatBreed[]> {
  const res = await fetch('https://api.thecatapi.com/v1/breeds?limit=10', {
    headers: {
      'x-api-key': process.env.CAT_API_KEY!,
    },
    next: { revalidate: 60 }, 
  });
  return res.json();
}
