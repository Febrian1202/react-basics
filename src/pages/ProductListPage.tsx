import React from 'react'
import { useSearchParams } from 'react-router'

const ProductListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams() // any\

    const handleSortValueChange = (sortValue: string) => {
        // ganti search params `sort` dengan asc
        searchParams.set("sort", sortValue)

        setSearchParams(searchParams)
    };
    return (
        <div>
            <h1>Product List Page</h1>
            <ul>
                <li>Sort: {searchParams.get("sort")}</li>
                <li>Name: {searchParams.get("name")}</li>
            </ul>
            <div className='flex gap-2'>
                <button className='border rounded-md px-2 py-1' onClick={() => handleSortValueChange("price-asc")}>Sort price asc</button>
                <button className='border rounded-md px-2 py-1' onClick={() => handleSortValueChange("price-desc")}>Sort price desc</button>
                <button className='border rounded-md px-2 py-1' onClick={() => handleSortValueChange("popular")}>Sort popular</button>
            </div>
        </div>
    )
}

export default ProductListPage
