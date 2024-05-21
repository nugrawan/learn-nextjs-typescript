import Image from "next/image";

interface Cat {
  name: string;
  imgCat: string;
}

function ItemCard({ name, imgCat }: Cat) {
  console.log("ItemCard");
  return (
    <div className="border-gray-900 border-2 w-52">
      <Image
        src={imgCat}
        alt={name}
        width={800}
        height={100}
        className="object-cover h-40"
      />
      <h2 className="text-xl text-center font-bold">{name}</h2>
    </div>
  );
}

export default ItemCard;
