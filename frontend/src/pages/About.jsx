import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="pt-8 text-2xl text-center border-t">
        <Title text1="ABOUT " text2="US" />
      </div>

      <div className="flex flex-col gap-16 my-10 md:flex-row">
        <img
          src={assets.about_img}
          alt="About TrendKart"
          className="w-full md:max-w-[450px]"
        />

        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <p>
            TrendKart brings together quality, comfort, and everyday style in
            one simple shopping experience. We carefully select products that
            help you look good and feel confident.
          </p>

          <p>
            Our goal is to make online shopping easy, reliable, and enjoyable.
            From discovering new arrivals to receiving your order, we focus on
            delivering value at every step.
          </p>

          <b className="text-gray-800">Our Mission</b>

          <p>
            To make stylish, high-quality products accessible to everyone while
            providing friendly support and a seamless shopping experience.
          </p>
        </div>
      </div>

      <div className="py-4 text-xl">
        <Title text1="WHY " text2="CHOOSE US" />
      </div>

      <div className="flex flex-col mb-20 text-sm md:flex-row">
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Every product is selected with care to meet our quality standards.
          </p>
        </div>

        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Shop easily from anywhere with a clean, simple, and secure process.
          </p>
        </div>

        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our support team is here to help whenever you need us.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
