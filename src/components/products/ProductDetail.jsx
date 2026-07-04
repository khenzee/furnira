"use client";

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useCart } from "@/context/CartContext";

const ProductDetail = ({product}) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    }

  return (
    <section className="lg:flex gap-10 p-4 md:p-8 max-w-7xl mx-auto">
        <div className="flex-1">
            <Image src={product.image} alt={product.name} width={800} height={800} className='w-full h-auto aspect-square object-cover rounded-xl'/>
        </div>
        <div className="flex-1 mt-6 lg:mt-0">
            <Link href="/product" className="text-gray-500 hover:text-black flex items-center gap-2 mb-6 transition-colors">
                <ArrowBackIcon fontSize="small" /> Back to products
            </Link>
            
            <div className="flex flex-col gap-6">
                <div>
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <p className="text-xl font-medium text-gray-700 mt-2">{product.price}</p>
                </div>

                <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center border border-gray-300 rounded-md">
                        <button onClick={handleDecrease} className="px-4 py-2 hover:bg-gray-100 transition-colors text-lg">-</button>
                        <span className="px-6 border-l border-r border-gray-300 py-2 font-medium">{quantity}</span>
                        <button onClick={handleIncrease} className="px-4 py-2 hover:bg-gray-100 transition-colors text-lg">+</button>
                    </div>
                    <button 
                        onClick={() => addToCart(product, quantity)}
                        className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-semibold flex-1 md:flex-none"
                    >
                        Add to Cart
                    </button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex gap-6 border-b border-gray-200 pb-2 mb-6">
                        <button 
                            className={`font-semibold pb-2 border-b-2 transition-colors ${activeTab === 'description' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'}`}
                            onClick={() => setActiveTab('description')}
                        >
                            Description
                        </button>
                        <button 
                            className={`font-semibold pb-2 border-b-2 transition-colors ${activeTab === 'details' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'}`}
                            onClick={() => setActiveTab('details')}
                        >
                            Details
                        </button>
                        <button 
                            className={`font-semibold pb-2 border-b-2 transition-colors ${activeTab === 'shipping' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'}`}
                            onClick={() => setActiveTab('shipping')}
                        >
                            Shipping
                        </button>
                    </div>

                    <div className="min-h-[100px]">
                        {activeTab === 'description' && (
                            <p className="text-gray-600 leading-relaxed">{product.description || "No description available."}</p>
                        )}
                        {activeTab === 'details' && (
                            <p className="text-gray-600 leading-relaxed">{product.details || "No details available."}</p>
                        )}
                        {activeTab === 'shipping' && (
                            <p className="text-gray-600 leading-relaxed">{product.shippingInfo || "No shipping information available."}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetail