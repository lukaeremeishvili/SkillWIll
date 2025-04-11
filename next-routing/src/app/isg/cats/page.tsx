import Image from "next/image";
import Link from "next/link";
import { fetchCats } from "@/lib/fetchCats";
import { CatBreed } from "@/interfaces/cat.interface";

export const revalidate = 30; 

export default async function ISGPage() {
  const cats: CatBreed[] = await fetchCats();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cat Images (ISG)</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {cats.map((cat) =>
          cat.image?.url ? (
            <Link href={`/isg/cats/${cat.id}`} key={cat.id}>
              <div className="relative w-full h-60 cursor-pointer">
                <Image
                  src={cat.image.url}
                  alt="Cat"
                  fill
                  className="object-cover rounded-xl shadow"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={true}
                />
              </div>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}
