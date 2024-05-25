"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  async function fetchApi() {
    const url =
      "https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=2478868012&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9683a4c1d6msha90665f26c27ca4p1c497ajsn854e808bcb70",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.data.products);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <main>
      <h1 className="text-center p-4 text-2xl font-bold">Products</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-7 p-10">
          {data.map((product, index) => (
            <div
              className="border flex flex-col justify-between shadow-lg p-3"
              key={index}
            >
              <Image
                src={product.product_photo}
                width={200}
                height={100}
                alt="foto"
              />
              <div className="overflow-auto h-fit">
                <h2 className="text-md font-semibold">
                  {product.product_title}
                </h2>
                <p>{product.product_price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
