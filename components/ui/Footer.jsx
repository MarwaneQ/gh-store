import { ChevronUp, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center gap-10 px-8 py-20 md:flex-row md:px-0">
        <img
          src="assets/images/footer.png"
          alt="footer"
          className="w-1/2 bg-contain md:w-[20%] lg:w-[10%]"
        />
        <div className="flex flex-col justify-around">
          <h6 className="text-sm font-semibold text-secondary md:text-xl">
            Do you have a question?
          </h6>
          <h4 className="pb-6 pt-2 text-3xl font-bold text-primary md:text-5xl">
            Feel free to contact
          </h4>
          <div className="flex items-center gap-x-4 text-sm  md:text-xl  ">
            <p className="flex items-center hover:text-primary-hover">
              <Phone  className="mr-2 text-secondary" />
              <a href="tel:+213660345345">+213 660 345 345</a>
            </p>
            <p className="flex items-center text-primary hover:text-primary-hover">
              <Mail className="mx-2 text-secondary" />
              <a href="mailto:contact@gh-store.shop">contact@gh-store.shop</a>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-y-4 px-4 py-4 text-center text-sm font-medium text-gray-500 md:max-w-screen-lg md:flex-row lg:max-w-screen-xl">
        <p>
          © 2020 GH Store - 
          <Link
            href="/"
            className="font-normal hover:font-medium hover:text-gray-950 first-letter:hover:underline"
          >
          GH Soft Algérie
          </Link>
        </p>
        <div className="flex items-center gap-x-4">
          <Link
            href="/"
            className="font-normal hover:font-medium hover:text-gray-950 first-letter:hover:underline"
          >
            Privacy policy
          </Link>
          <Link
            href="/"
            className="font-normal hover:font-medium hover:text-gray-950 first-letter:hover:underline"
          >
            Cookies
          </Link>
          <ChevronUp
            color="#6b7280"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
