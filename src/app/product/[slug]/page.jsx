import ProductDetail from "@/components/products/ProductDetail";

async function fetchProduct(id) {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    if(!response.ok){
        if (response.status === 404) return null;
        throw new Error("Failed to fetch product");
    }
    
    const data = await response.json();
    return data;
}


const Productpage = async ({params}) => {
    const  {slug} = await params
    const product = await fetchProduct(slug);
  return (
    <div>
        <ProductDetail product={product} />
    </div>
  )
}

export default Productpage