interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
}

interface SearchResponse {
    items: Product[];
    page: number;
    totalPages: number;
    totalItems: number;
}

async function searchProducts(searchTerm: string, minPrice?: number, maxPrice?: number): Promise<Product[]> {
    let products: Product[] = [];
    let currPage: number = 1;
    let totalPages: number = 1;

    try {
        while (currPage <= totalPages) {
            let url: string = `https://api.store.com/search?query=${searchTerm}&page=${currPage}&limit=50`;
            if (minPrice !== undefined) url += `&minPrice=${minPrice}`;
            if (maxPrice !== undefined) url += `&maxPrice=${maxPrice}`;
            let response = await fetch(url);

            let data: SearchResponse = await response.json();
            totalPages = data.totalPages;
            products.push(...data.items.filter((product) => product.inStock && product.rating >= 4.0 && product.reviewCount >= 10));
            currPage++;
            await new Promise(resolve => setTimeout(resolve, 125));
        }
    } catch (error) {
        console.log("Failed to retrieve data");
        return [];
    }

    return products.sort((p1, p2) => {
        if (p1.rating != p2.rating) {
            return p2.rating - p1.rating;
        } else {
            return p2.reviewCount - p1.reviewCount;
        }
    });
}