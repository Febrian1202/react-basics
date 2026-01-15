// import React from 'react'

import { useParams } from "react-router"
import { getProductBySlug } from "../models/Product"

const ProductDetailPage = () => {
    const { productSlug } = useParams<{ productSlug: string }>()
    const product = productSlug ? getProductBySlug(productSlug) : undefined;

    if (!product) {
        return <p>Produk tidak ditemukan</p>
    }
    return (
        <div className="flex flex-col items-center gap-2 m-4 h-max">
            <h1 className='font-extrabold text-6xl'>Produk Detail Page</h1>
            <p>{product.name}</p>
            <p>Rp. {product.harga.toLocaleString('id-ID')}</p>
        </div>
    )
}

export default ProductDetailPage
