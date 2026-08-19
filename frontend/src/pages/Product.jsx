import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      setSize("");
    }
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0">Loading product...</div>;
  }

  return (
    <>
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
        <div className="flex flex-col gap-12 sm:flex-row">
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:w-1/2">
            <div className="flex w-full gap-3 overflow-x-auto sm:flex-col sm:w-[18.7%] sm:overflow-y-scroll">
              {productData.image.map((item, index) => (
                <img
                  key={index}
                  onClick={() => setImage(item)}
                  src={item}
                  alt={`${productData.name} view ${index + 1}`}
                  className="w-24 cursor-pointer sm:w-full sm:mb-3 flex-shrink-0"
                />
              ))}
            </div>

            <div className="w-full sm:w-[80%]">
              <img
                className="w-full h-auto"
                src={image}
                alt={productData.name}
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="mt-2 text-2xl font-medium text-gray-900">
              {productData.name}
            </h1>

            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_dull_icon} alt="" className="w-3.5" />
              <p className="pl-2 text-sm">(122)</p>
            </div>

            <p className="mt-5 text-3xl font-medium">
              {currency}
              {productData.price}
            </p>

            <p className="mt-5 text-gray-500 md:w-4/5">
              {productData.description}
            </p>

            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>

              <div className="flex gap-2">
                {productData.sizes.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-gray-100 ${
                      size === item ? "border-orange-500" : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => addToCart(productData._id, size)}
              className="px-8 py-3 text-sm text-white bg-black active:bg-gray-700"
            >
              ADD TO CART
            </button>

            <hr className="mt-8 sm:w-4/5" />

            <div className="flex flex-col gap-1 mt-5 text-sm text-gray-500">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </>
  );
};

export default Product;
