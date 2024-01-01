import { Link } from "react-router-dom";
import Hero from "../../../assets/images/hero.jpg";

export const HomeHero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
      <div className="text my-5">
        <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">
          OnlineBookStore is the world's most popular and authoritative source
          for classic novels. Find ratings and access the ebooks digitally.
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-color03 dark:hover:bg-color04 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore eBooks
        </Link>
      </div>
      <div className="visual my-5 w-full ms-6">
        <img
          className="rounded-lg max-h-full"
          src={Hero}
          alt="CodeBook Hero Section"
        />
      </div>
    </section>
  );
};
