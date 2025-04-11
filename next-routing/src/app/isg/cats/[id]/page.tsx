import Image from "next/image";
import { CatBreed } from "@/interfaces/cat.interface";

export const revalidate = 30;

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CatPage({ params }: PageProps) {
  const { id } = await params;

  const res = await fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
      "x-api-key": process.env.CAT_API_KEY!,
    },
  });

  const allCats: CatBreed[] = await res.json();
  const cat = allCats.find((cat) => cat.id === id);

  if (!cat?.image?.url) {
    return <p className="p-4 text-center">Cat not found or image missing.</p>;
  }

  return (
    <div className="flex justify-center items-center h-screen p-4">
      <div className="relative w-full max-w-xl h-[500px]">
        <Image
          src={cat.image.url}
          alt="Cat"
          fill
          className="object-cover rounded-xl shadow"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={true}
        />
      </div>
    </div>
  );
}
