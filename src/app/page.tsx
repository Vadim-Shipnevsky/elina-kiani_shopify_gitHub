import { postToShopify } from "@/utils/shopify";

const productsQuery = `
query {
     products(first: 10) {
       edges {
         node {
           title
           handle
           tags
           priceRange {
             minVariantPrice {
               amount
               currencyCode
             }
           }
           images(first: 1) {
             nodes {
               transformedSrc
               altText
             }
           }
         }
       }
     }
   }
`;
export default async function Home() {
  const data = await postToShopify({ query: productsQuery, variables: {}})
  console.log(data)

  return (
    <div>

    </div>
  );
}

