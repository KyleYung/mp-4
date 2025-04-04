import { ArtProps } from "@/types";
import ArtCard from "./art-card";

export default function ArtGallery({ artworks }: { artworks: ArtProps[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {artworks.map((art) => (
        <ArtCard key={art.id} {...art} title={art.title} image_url={art.image_url} dated={art.dated}/>
      ))}
    </div>
  );
}
