import ProductHome from "@/components/products/ProductHome";

async function fetchProducts() {
    const response = await fetch("http://localhost:3000/api/products");
    if(!response.ok){
        throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
}


const Productpage = async () => {
  const product = await fetchProducts();
  return (
    <div>
      <ProductHome prod={product} />
    </div>
  )
}

export default Productpage