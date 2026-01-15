import { Link, useSearchParams } from 'react-router'
import ProductCard from '../components/ProductCard';
import { Products } from '../models/Product';

const ProductListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams() // any\

    const handleSortValueChange = (sortValue: string) => {
        // ganti search params `sort` dengan asc
        searchParams.set("sort", sortValue)

        setSearchParams(searchParams)
    };
    return (
        <div className="flex flex-col items-center gap-2 m-4 h-max">
            <h1 className='font-extrabold text-6xl '>Product List Page</h1>
            <ul className='w-9/12'>
                <li>Sort: {searchParams.get("sort")}</li>
                <li>Name: {searchParams.get("name")}</li>
            </ul>
            <div className='flex gap-2 w-9/12'>
                <button className='border rounded-md px-2 py-1' onClick={() => handleSortValueChange("price-asc")}>Sort price asc</button>
                <button className='border rounded-md px-2 py-1' onClick={() => handleSortValueChange("price-desc")}>Sort price desc</button>
                <button className='border rounded-md px-2 py-1' onClick={() => handleSortValueChange("popular")}>Sort popular</button>
            </div>
            <div className='flex flex-row w-full p-2 gap-2 border items-center'>
                {Products.map((product) => (
                    <Link key={product.slug} to={`/product/${product.slug}`}>
                        <ProductCard name={product.name} harga={product.harga} />
                    </Link>
                )
                )
                }
            </div>
        </div>
    )
}

export default ProductListPage
