import Image from "next/image"
import Link from "next/link"

const ProductCard = ({product}) => {
  return (
    <Link href={`/product/${product.id}`}>
        <div className="aspect-square">
            <Image src={product.image} alt="" width={400} height={400} className="h-full object-cover" />
            
        </div>
        <div className="py-4">
            <h4>{product.name}</h4>
            <p>{product.price}</p>
        </div>
    </Link>
  )
}

export default ProductCard