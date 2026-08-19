import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="pt-10 text-2xl text-center border-t">
        <Title text1="CONTACT " text2="US" />
      </div>

      <div className="flex flex-col justify-center gap-10 my-10 mb-28 md:flex-row">
        <img
          src={assets.contact_img}
          alt="Contact TrendKart"
          className="w-full md:max-w-[480px]"
        />

        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-xl font-semibold text-gray-600">Our Store</p>

          <p className="text-gray-500">
            TrendKart Online Store
            <br />
            India
          </p>

          <p className="text-gray-500">
            Tel: +91 98765 43210
            <br />
            Email: contact@trendkart.com
          </p>

          <p className="text-xl font-semibold text-gray-600">
            Careers at TrendKart
          </p>

          <p className="text-gray-500">
            Learn more about our teams and available opportunities.
          </p>

          <button
            type="button"
            onClick={() =>
              alert("Career opportunities will be available soon.")
            }
            className="px-8 py-4 text-sm border border-black hover:bg-black hover:text-white transition"
          >
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
