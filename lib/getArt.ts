import { ArtProps } from "@/types";

export default async function getArt(): Promise<ArtProps[]> {
  const apiKey = process.env.HARVARD_API_KEY;

  const res = await fetch(
    `https://api.harvardartmuseums.org/object?apikey=${apiKey}&hasimage=1&sort=random&q=imagepermissionlevel:0 `
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  
  return data.records.map((item: any) => ({
    id: item.id,
    title: item.title,
    image_url: item.primaryimageurl,
    dated: item.dated,
  }));
}