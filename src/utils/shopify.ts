
export const postToShopify = async ({ query, variables = {} }: any) => {
    try {
        const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_API_ENDPOINT;
        const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN;
      
        if (!endpoint) {
            throw new Error('Shopify API endpoint is not defined.');
        }
        if (!accessToken) {
            throw new Error('Shopify Storefront Access Token is not defined.');
        }

        const result = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token':
                    accessToken,
            },
            body: JSON.stringify({ query, variables }),
        }).then((res) => res.json());

        if (result.errors) {
            console.log({ errors: result.errors });
        } else if (!result || !result.data) {
            console.log({ result });
            return 'No results found.';
        }
        return result.data;
    } catch (error) {
        console.log(error);
    }
};