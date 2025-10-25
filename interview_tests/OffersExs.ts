/*- You get back an array of objects in the following shape (imagine there can be a million of those):

- Make a request to this URL that returns a JSON - https://api.apify.com/v2/datasets/VuFwckCdhVhoLJJ08/items?clean=true&format=json

```json
[
    {
        "productId": "B07BQZ8S7V",
        "offerId": "B092CB4GRR",
        "price": "$4.25"
    }
]
```
Each object contains data about a single offer with its unique `offerId`. `productId` might be the same for more offers → One product can have one or multiple offers. 

- Process the data in a way that the new array will only contain the cheapest offer for each product. It should have the same format as the input array. */


interface Offer {
    productId: string,
    offerId: string,
    price: string
};

async function store(offers: Offer[]): Promise<Offer[] | null> {
    try {
        const response = await fetch(`https://api.apify.com/v2/datasets/VuFwckCdhVhoLJJ08/items?clean=true&format=json`)
        const data: Offer[] = await response.json();
        const prodIdArr: string[] = offers.map((offer) => offer.productId);
        const prodSet: Set<string> = new Set(prodIdArr);
        let cheapestOffers: Offer[] = [];       

        for (const el of prodSet) {
            const filOffer: Offer[] = data.filter((offer) => offer.productId == el);
            let currCheapOffer: Offer = filOffer[0];

            for (const currOff of filOffer) {
                if (parseFloat(currOff.price.replace('$', '')) < parseFloat(currCheapOffer.price.replace('$', ''))) currCheapOffer = currOff;
            }
            cheapestOffers.push(currCheapOffer);
        }
        return cheapestOffers;

    } catch (error) {
        console.log("Failed to retrieve data", error);
        return null;
    }
}