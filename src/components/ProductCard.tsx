import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../hooks/useCart";




type ProductCardProps = {
    name: string,
    harga: number,
    slug: string
}

const ProductCard = (props: ProductCardProps) => {
    const { name, harga, slug } = props;
    const { addToCart } = useCart();

    return (
        <div className='flex flex-col gap-2 p-2 rounded-md bg-blue-950 border-slate-400 border'>
            <h1 className='font-semibold text-center text-2xl'>{name}</h1>
            <p className='text-center text-lg font-semibold'>Rp. {harga.toLocaleString('id-ID')}</p>
            <button onClick={() => addToCart({ name, harga, slug })} className='flex flex-row font-semibold gap-2 items-center text-center justify-center text-sm p-2 border rounded-md bg-green-600 hover:bg-green-700'>
                Add to Cart
                <FontAwesomeIcon icon={faCartShopping} className="text-white" />
            </button>
        </div>
    )
}

export default ProductCard
