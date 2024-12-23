import Image from 'next/image';
import dashboard from '/public/assets/images/dashboard.png';

function Hero() {
  const stats = [
    {
      id: '0',
      title: 'Lorem ipsum dolor',
      count: '8350',
    },
    {
      id: '1',
      title: 'Nulla sit amet',
      count: '350+',
    },
    {
      id: '2',
      title: 'Vestibulum euism',
      count: '17500',
    },
  ];
  return (
    <div className="px-0 md:px-4">
      <div
        className=""
        style={{
          background:
            'url(/assets/images/mask.png) center 90% / 100% no-repeat, url(/assets/images/home-bg.png) center top / 100% 90% no-repeat',
        }}
      >
        <div className="flex flex-col items-center justify-center gap-y-4 bg-contact-bg bg-cover pt-40 ">
          <h6 className="text-xs font-bold text-secondary md:text-xl">
            Plateforme E-Commerce
          </h6>

          <h1 className="text-center text-3xl font-bold text-white md:text-[80px] md:leading-[80px]">
            Une Platforme <br className="m-0" /> Des Possibilités Illimités
          </h1>
          <p className=" md:mt-4 text-xs font-light text-gray-400 md:text-base">
            A powerful tool to manage your projects, tasks, and teams.
          </p>
          <button className="mt-6 rounded-full bg-orange-500 px-10 py-3 text-xs font-medium text-white md:text-base">
            Explore all features
          </button>
        </div>

        <Image src={dashboard} className="mx-auto mt-8 md:mt-24" />
      </div>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 max-w-screen-lg items-center justify-center md:flex-row md:py-20">
        {stats.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col items-center gap-y-3 py-6 ${
              index !== stats.length - 1
                ? 'md:border-r md:border-gray-300 md:px-10 lg:px-20'
                : 'md:px-10 lg:px-20'
            }`}
          >
            <h3 className="text-3xl font-bold text-primary text-center md:text-4xl lg:text-5xl">
              {item.count}
            </h3>
            <h6 className="font-semibold text-gray-900 text-center md:text-xs lg:text-xl">
              {item.title}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
