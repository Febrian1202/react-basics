export interface Product {
    name: string,
    slug: string,
    harga: number
}

export const Products: Product[] = [
    {
        'name': 'Kaos Oblong',
        'slug': 'kaos-oblong',
        'harga': 20000
    },
    {
        'name': 'Celana Jeans',
        'slug': 'celana-jeans',
        'harga': 70000
    },
    {
        'name': 'Crop Top',
        'slug': 'crop-top',
        'harga': 30000
    },
    {
        'name': 'Buku',
        'slug': 'buku',
        'harga': 30000
    },
]

export const getProductBySlug = (slug: string) => Products.find(p => p.slug === slug);
