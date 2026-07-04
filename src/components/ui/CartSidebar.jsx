"use client";

import { useCart } from "@/context/CartContext";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Image from "next/image";

export default function CartSidebar() {
    const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity } = useCart();

    if (!isCartOpen) return null;

    const subtotal = cartItems.reduce((total, item) => {
        // Price might be a string like "$150", so we need to parse it if we want to do real math.
        // For now, assuming price might be string with currency, we'll try to extract numbers.
        const priceNum = parseFloat(item.price?.toString().replace(/[^0-9.]/g, '')) || 0;
        return total + (priceNum * item.quantity);
    }, 0);

    return (
        <>
            {/* Backdrop */}
            <div 
                className="fixed inset-0 bg-black/50 z-50 transition-opacity"
                onClick={() => setIsCartOpen(false)}
            />
            
            {/* Sidebar */}
            <div className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold">Your Cart</h2>
                    <button 
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <CloseOutlinedIcon />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-4">
                            <p>Your cart is empty.</p>
                            <button 
                                onClick={() => setIsCartOpen(false)}
                                className="text-black font-semibold border-b border-black pb-1"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="flex gap-4 items-center">
                                <div className="w-20 h-20 relative flex-shrink-0 bg-gray-50 rounded-md overflow-hidden">
                                    <Image 
                                        src={item.image} 
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{item.price}</p>
                                    
                                    <div className="flex items-center gap-3 mt-2">
                                        <div className="flex items-center border border-gray-200 rounded">
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="px-2 hover:bg-gray-100"
                                            >-</button>
                                            <span className="px-2 text-sm">{item.quantity}</span>
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="px-2 hover:bg-gray-100"
                                            >+</button>
                                        </div>
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-xs text-red-500 hover:underline"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer / Checkout */}
                {cartItems.length > 0 && (
                    <div className="border-t border-gray-100 p-6 bg-gray-50">
                        <div className="flex justify-between items-center mb-4 font-bold text-lg">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-6">Taxes and shipping calculated at checkout.</p>
                        <button className="w-full bg-black text-white py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
