import Partners from "@/components/ui/Partners";
import IconCards from "@/components/ui/IconCards";
import Hero from "@/components/ui/Hero";
import ImageSection from "@/components/ui/ImageSection";

export default function Index({ features, whoWeAre }) {
  return (
    <div className="">
      <Hero />
      <ImageSection data={whoWeAre[0]} />
      <div className="bg-gray-100 py-12">
        <ImageSection data={whoWeAre[1]} />
      </div>
      <Partners />
      <IconCards features={features} />
    </div>
  );
}
export async function getStaticProps() {
  const featuresData = [
    {
      icon: "Folder",
      title: "Sed ultrices nisl velit ornare est ullamcorper",
      description:
        "Nunc quis nibh magna. Proin risus erat, fringilla vel purus sit amet.",
    },
    {
      icon: "Calendar",
      title: "Proin risus erat, fringilla vel purus sit amet",
      description:
        "Fringilla vel purus sit amet porttitor finibus eros lorem eget mauris.",
    },
    {
      icon: "PenTool",
      title: "Fusce ut velit laoreet, tempus arcu tortor",
      description:
        "Mauris lectus hendrerit purus, porttitor finibus eros lorem eget.",
    },
    {
      icon: "Paperclip",
      title: "Aliquam fringilla aliquam ex sit amet elementum",
      description: "Nam massa erat, aliquet a rutrum eu, sagittis.",
    },
  ];
  const whoWeAreData = [
    {
      title: "Who we are",
      subtitle: "Designed for everyone",
      description:
        "Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo.",
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Nulla sit amet velit nec nulla suscipit ultrices.",
      ],
      buttonBgColor: "bg-blue-700 hover:bg-blue-800",
      button: "Read more",
      image: [
        "/assets/images/erp2-home-cslider-pic1.jpg",
        "/assets/images/erp2-home-pic1.png",
      ],
    },
    {
      title: "BeERP",
      subtitle: "The platform",
      description:
        "Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh.",
      features: [
        "Maecenas eget arcu venenatis, sagittis",
        "Orci varius natoque penatibus magnis.",
      ],
      button: "Read more",
      buttonBgColor: "bg-secondary hover:bg-secondary-200",
      image: ["/assets/images/erp2-home-pic1.png"],
      reverse: true,
    },
  ];
  return {
    props: {
      features: featuresData,
      whoWeAre: whoWeAreData,
    },
  };
}

Index.getHeader = {
  title: "Home",
  isHome: true,
};
