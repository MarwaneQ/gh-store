import { Truck, Shield, Star } from "lucide-react";

export default function WhyChooseUs({ features }) {
  const icons = {
    Truck: <Truck className="w-10 text-red-500" />,
    Shield: <Shield className="h-12 w-10 text-yellow-300" />,
    Star: <Star className="w-10 text-purple-500" />,
  };
  return (
    <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-3 md:px-0 md:py-20">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-800 md:col-span-3">
        Why choose us?
      </h2>

      {features.map((feature, index) => (
        <div
          key={index}
          className={`relative mb-5 flex w-full flex-col items-center rounded-lg p-6 shadow-lg md:mb-0 ${
            index === 1 ? "bg-blue-100 text-center md:top-10" : "bg-white"
          }`}
        >
          <div className="mb-4">{icons[feature.icon]}</div>
          <h3 className="text-xl font-semibold text-gray-800">
            {feature.title}
          </h3>
          <p className="mt-2 text-center text-gray-500">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
