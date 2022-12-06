import { storefront } from "../util";
import Link from "next/link";
import Slider from "../components/slider";
import Discoverourpick from "../components/discoverourpick";
import DryGroceries from "../components/dryGroceries";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HomeItems from "../components/homeitems";
import Ygoodpick from "../components/ygoodpick";
import Personal from "../components/personal";
import LifeStyle from "../components/lifeStyle";
import HomeSlider from "../components/HomeSlider";
import HomeSlider2 from "../components/homeSlider2";
import OurBrands from "../components/ourBrands";
import OurStory from "../components/ourStory";
import Community from "../components/community";

export default function Home({ products }) {
  const slides = [
    {
      text1: "Bringing agility and scale with the right strategy",

      image: "/carosel/strategy.jpg",
      id: "slide1",
    },
    {
      text1: "Nurturing and empowering a future-ready workforce",

      image: "/carosel/nurture.jpg",
      id: "slide2",
    },
    {
      text1: "Mobilizing the right talent for your business needs",

      image: "/carosel/mobilize.jpg",
      id: "slide3",
    },
    {
      text1: "A thought leader and trusted partner for over a decade",

      image: "/carosel/thought.jpg",
      id: "slide4",
    },
  ];
  console.log(products);
  return (
    <>
      <section>
        <HomeSlider />
      </section>
      <Discoverourpick />
      <DryGroceries
      products={products}
      
      />
      <HomeItems />
      <Ygoodpick />
      <Personal />
      <LifeStyle />
      <HomeSlider2 />
      <OurBrands />
      <OurStory />
      <Community/>

      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.edges.map((items) => {
            const product = items;

            return (
              <Link
                key={product.node.handle}
                href={`/products/${product.node.handle}`}
              >
                <a className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.node.images.edges[0].node.transformedSrc}
                      // alt={images.altText}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {product.node.title}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.node.priceRange.minVariantPrice.amount}
                  </p>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const { data } = await storefront(productQuery);
  return {
    props: {
      products: data.products,
    },
  };
}
const gql = String.raw;
const productQuery = gql`
  query products {
    products(first: 100) {
      edges {
        node {
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`;
