import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = ({ title = null, breadcrumbs = [], isHome = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuFixed, setIsMenuFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuFixed(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = [
    {
      id: "0",
      title: "Home",
      url: "/",
    },
    {
      id: "1",
      title: "Pricing",
      url: "tarifs",
    },
    {
      id: "2",
      title: "About",
      url: "a-propos",
    },
    {
      id: "3",
      title: "Contact",
      url: "contact",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-50">
      <div
        className={`top-0 w-full ${
          isHome ? "absolute bg-transparent" : "bg-subheader-bg"
        }`}
      >
        <header
          className={[
            "p-6 py-3 transition-all duration-300 ease-in-out md:px-0", // Smooth transition
            isMenuFixed
              ? "fixed left-0 right-0 w-full translate-y-0 bg-[#5325B3] opacity-100 shadow-lg"
              : "relative translate-y-0 bg-transparent opacity-100", // Ensure visible by default
          ].join(" ")}
        >
          <div className="mx-auto flex items-center gap-6 md:max-w-screen-lg">
            <Link href={"/"}>
              <img src={"logo.svg"} height={100} width={200} alt="logo" />
            </Link>
            <nav className="hidden md:block">
              <ul className="flex justify-between">
                {navigation.map((item) => (
                  <li key={"navigation" + item.id} className="mx-6">
                    <Link
                      href={item.url}
                      className="text-sm font-semibold text-white"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href="#"
              className="ml-auto hidden rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 p-4 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-gradient-to-r hover:shadow-md md:block"
            >
              Commencez maintenant!
            </a>
            {/* Mobile Menu Button */}
            <div className="top-6 ml-auto md:hidden">
              <button
                onClick={toggleMenu}
                className="rounded-md p-2 text-black"
              >
                <Menu size={24} color="#ffffff" />
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <div>
          {isMenuOpen && (
            <div
              className="fixed top-0 z-20 h-screen w-screen bg-black/20"
              onClick={toggleMenu}
            ></div>
          )}
          <div
            className={`fixed right-0 top-0 z-30 flex h-full w-3/4 flex-col bg-[#1A0E46] transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } z-10 gap-6 px-10 py-6 md:hidden`}
          >
            <div className="z-40 ml-auto md:hidden">
              <button
                onClick={toggleMenu}
                className="rounded-md p-2 text-black"
              >
                <X size={24} color="#ffffff" />
              </button>
            </div>
            <nav className="flex h-full flex-col items-start">
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={"mobile" + item.id}>
                    <Link
                      href={item.url}
                      className="border-b-2 border-gray-300 text-lg font-semibold text-gray-300 hover:border-white"
                      onClick={toggleMenu}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mb-4 w-full">
              <a
                href="#"
                className="ml-auto mt-auto block w-full rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 p-4 py-3 text-center text-sm font-bold text-white transition-all hover:scale-105 hover:bg-gradient-to-r hover:shadow-md"
              >
                Commencez maintenant!
              </a>
            </div>
          </div>
        </div>

        {!isHome && (
          <div className="mx-auto flex flex-col items-center justify-between pb-6 pt-6 md:max-w-screen-md md:flex-row md:pb-8 md:pt-6 lg:max-w-screen-lg">
            <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
              {title}
            </h1>
            <ul className="hidden justify-between md:flex">
              {breadcrumbs.map((item, index) => (
                <li key={"breadcrumb" + item.title} className="mx-6">
                  <Link
                    href={item.url}
                    className="text-sm font-semibold text-gray-200"
                  >
                    {index > 0 && (
                      <span className="ml-[-30px] pr-4">{`>`}</span>
                    )}
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
