import { Folder, Calendar, PenTool, Paperclip } from "lucide-react";

const IconCards = ({ features }) => {
  const icons = {
    Folder: <Folder className="h-12 w-7 text-red-500" />,
    Calendar: <Calendar className="h-12 w-7 text-yellow-300" />,
    PenTool: <PenTool className="h-12 w-7 text-purple-500" />,
    Paperclip: <Paperclip className="h-12 w-7 text-sky-400" />,
  };

  return (
    <div className="flex w-full flex-wrap justify-center bg-[#180e2a] py-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className="m-4 flex w-full flex-col items-center rounded-md border border-[#2e2640] bg-[#180e2a] px-4 py-10 text-center transition duration-500 hover:border-gray-400 md:w-52"
        >
          <div className="mb-6 flex h-16 w-12 items-center justify-center rounded-xl bg-[#3e2d69]">
            {icons[feature.icon]}
          </div>
          <h5 className="mb-8 text-xl font-semibold text-orange-500">
            {feature.title}
          </h5>
          <p className="mb-8 text-base text-white">{feature.description}</p>
        </div>
      ))}
      <div className="mt-8 flex w-full justify-center">
        <button className="rounded-md bg-orange-500 px-6 py-3 text-white transition duration-300 hover:bg-orange-600">
          Read more
        </button>
      </div>
    </div>
  );
};

export default IconCards;
