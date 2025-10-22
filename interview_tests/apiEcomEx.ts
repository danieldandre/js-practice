async function getProducts() {
    let products: {}[] = [];

    try {
        let data: {total: number, count: number, products: {}[]} = {total: 0, count: 0, products: []};
        let minCurrPrice: number = 0;

        while (minCurrPrice < 100000) {
            let range: number = 1000;
            let total: number = 0;
            let count: number = 0;

            do {
                let response = await fetch(`https://api.ecommerce.com/products?minPrice=${minCurrPrice}&maxPrice=${minCurrPrice + range}`);
                data = await response.json();
                total = data.total;
                count = data.count;
                if (count < total) range = range / 2;
            } while (count < total);

            products.push(...data.products);
            minCurrPrice = minCurrPrice + range;
        }
    } catch (error) {
        console.log("Failed to retrieve data");
    }
    return products;
}

/* Initially I wanted to make a request without giving any specifications about the minPrice and maxPrice for the first API call. 
I was assuming that the products would be sorted in ascending order by price, so that I could use the last product price as the starting minPrice for the next cycle. 

However, I abandoned that idea since I didn't have the product data structure. Instead, I used total and count to check if all products in a certain price range were being collected. 
Since count is capped at 1000 but total shows the actual amount of products within that range, I could narrow the range when count < total as to ensure I collected everything in that range.*/