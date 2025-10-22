interface Product {
    id: string;
    name: string;
    price: number;
    inStock: boolean;
}
interface ApiResponse {
    products: Product[];
    currentPage: number;
    totalPages: number;
    totalProducts: number;
}

async function getAllProducts(category: string): Promise<Product[]> {
    let products: Product[] = [];
    let totalPages: number = 1;

    try {
        for (let currPage = 1; currPage <= totalPages; currPage++) {
            let response = await fetch(`https://api.shop.com/products?currentPage=${currPage}&category=${category}&limit=100`);
            let data: ApiResponse = await response.json();
            totalPages = data.totalPages;
            products.push(...data.products.filter(prod => prod.inStock));
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    } catch (error) {
        console.log("Failed to retrieve data");
        return [];
    }
    return products.sort((prod1, prod2) => {return prod1.price - prod2.price});
}
