import ProductCard from "./ProductCard"
import Image from "next/image"

const ProductHome = ({prod}) => {
    const heroImg = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"


  return (
    <section>
        <div className="relative">
            <Image src={heroImg} alt="product hero image" width={800} height={800} className="w-full object-cover"/>
            <div className="bg-white/30 text-center  place-content-center w-full h-full text-foreground absolute top-0 left-0">
                <h5>Product</h5>
                <h1>All Product</h1>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {prod?.map((product, index)=>{
                return (
                    <div key={index}>
                        <ProductCard product= {product} />
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default ProductHome