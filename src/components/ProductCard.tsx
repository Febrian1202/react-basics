import React from 'react'

type ProductCardProps = {
    name: string,
    harga: number
}

const ProductCard = (props: ProductCardProps) => {
    const { name, harga } = props;

    return (
        <div className='flex flex-col gap-2 p-2 rounded-md bg-blue-950 border-slate-400 border'>
            <h1 className='font-semibold text-2xl'>{name}</h1>
            <p className='text-center text-lg font-semibold'>Rp. {harga.toLocaleString('id-ID')}</p>
        </div>
    )
}

export default ProductCard
