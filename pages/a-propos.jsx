import AboutCard from '@/components/ui/AboutCard';
import ImageSection from '@/components/ui/ImageSection';

const About = ({ features }) => {
  return (
    <article>
      {/* Section 1 */}
      <section className=" bg-gray-100 bg-contact-bg bg-cover ">
        <div className="px-6 md:px-0 md:max-w-screen-lg md:mx-auto grid grid-cols-1 gap-6 gap-y-14 md:grid-cols-2 py-16">
          <h1 className="text-4xl md:text-6xl text-center md:text-left font-semibold md:col-span-2">
            A propos de{' '}
            <strong className="text-orange-500 block md:inline">
              GH Store
            </strong>
          </h1>

          <h5 className="text-lg font-medium md:border-r  border-b pb-12 md:p-0 md:border-none">
            <span className="font-bold text-orange-500">GH Store </span>
            est une plateforme pour créer des boutiques en lignes
            professionnelles.
          </h5>

          <p className="">
            Avec <span className="font-bold text-orange-500">GH Store </span>{' '}
            les utilisateurs peuvent créer des sites web e-commerce entièrement
            fonctionnels sans avoir besoin de compétences techniques ou de
            design avancées.
          </p>
        </div>
      </section>
      {/* Section 2 */}
      <section className="flex flex-col gap-12 items-center py-12">
        {features.map((feature, index) => (
          <ImageSection data={{...feature, reverse: index % 2 === 1}} />
        ))}
      </section>
    </article>
  );
};
export async function getStaticProps() {
  const features = [
    {
      id: 1,
      title: 'Big Title 1',
      subtitle: 'Short Title 1',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, neque vitae rutrum ultricies, nunc odio ultricies odio, nec tincidunt nunc odio nec odio.',
      features: [
        'Maecenas eget arcu venenatis, sagittis',
        'Orci varius natoque penatibus magnis',
        'Maecenas imperdiet ante eget hendrerit',
        'Donec sodales, neque vitae rutrum',
      ],
      image: ['/assets/images/erp2-about-pic1.jpg'],
    },
    {
      id: 2,
      title: 'Big Title 1',
      subtitle: 'Short Title 1',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, neque vitae rutrum ultricies, nunc odio ultricies odio, nec tincidunt nunc odio nec odio.',
      features: [
        'Maecenas eget arcu venenatis, sagittis',
        'Orci varius natoque penatibus magnis',
        'Maecenas imperdiet ante eget hendrerit',
        'Donec sodales, neque vitae rutrum',
      ],
      image: ['/assets/images/erp2-about-pic1.jpg'],
    },
    {
      id: 3,
      title: 'Big Title 1',
      subtitle: 'Short Title 1',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, neque vitae rutrum ultricies, nunc odio ultricies odio, nec tincidunt nunc odio nec odio.',
      features: [
        'Maecenas eget arcu venenatis, sagittis',
        'Orci varius natoque penatibus magnis',
        'Maecenas imperdiet ante eget hendrerit',
        'Donec sodales, neque vitae rutrum',
      ],
      image: ['/assets/images/erp2-about-pic1.jpg'],
    },
  ];
  return {
    props: {
      features: features,
    },
  };
}
About.getHeader = {
  title: 'Qui nous sommes',
  breadcrumbs: [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'a-propos',
      url: '/a-propos',
    },
  ],
};
export default About;
