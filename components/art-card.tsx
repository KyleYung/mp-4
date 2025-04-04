import { ArtProps } from "@/types";

export default function ArtCard({id, title, image_url, dated }: ArtProps) {
    return (
      <div className="p-4 border rounded bg-white shadow">
        {image_url && (<img src={image_url} alt={title} className="w-full h-auto mb-2" />)}
        <h2 className="text-sm text-gray-600 font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{dated}</p>
      </div>
    );
}