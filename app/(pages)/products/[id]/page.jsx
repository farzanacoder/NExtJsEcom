import Image from "next/image";

async function getSingleProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

const ProductDetailsPage = async ({ params }) => {
  const prdct = await getSingleProduct(params.id);
  console.log(params);

  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <Image
          src={prdct.thumbnail || "/fallback.png"}
          alt='detail'
          width={400}
          height={400}
          className="rounded-md"
        />
        <div>
          <h1 className="text-2xl font-bold mb-3">{prdct.title}</h1>
          <p className="text-gray-600 mb-4">{prdct.description}</p>
          <p className="text-xl font-semibold text-red-600">${prdct.price}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
