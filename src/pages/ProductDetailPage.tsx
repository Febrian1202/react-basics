// import React from 'react'

import { useParams } from "react-router"

const ProductDetailPage = () => {
    const params = useParams()
    return (
        <div>
            <h1>Produk Detail Page</h1>
            <p>{params.productSlug}</p>
        </div>
    )
}

export default ProductDetailPage
