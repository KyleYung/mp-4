import getArt from "@/lib/getArt";
import ArtCard from "@/components/art-gallery";

export default async function ArtPage() {
  let artworks = [];

  try {
    artworks = await getArt();
  } catch (error) {
    console.error("Failed to fetch data", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <p className="text-red-600 text-lg font-semibold"> Sorry, we couldn't load the gallery. Please try again later.</p>
      </div>
    );
  }

  return (
    <main className="bg-slate-100">
      <h1 className="text-center text-gray-600 text-5xl font-bold p-10">Harvard Art Gallery</h1>
      <ArtCard artworks={artworks} />
    </main>
  );
}
