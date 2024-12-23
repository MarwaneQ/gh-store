import PricingCards from '@/components/ui/PricingCards';
import WhyChooseUs from '@/components/ui/WhyYouChooseUs';
import { Box, TimerResetIcon, Users } from 'lucide-react';

function Tarifs({ features,  }) {
  const plans = [
    {
      id: 1,
      title: 'Starter',
      price: '3000 DA',
      duration: 'Abonnement de 1 mois',
      features: [
        {
          name: 'Gestion des commandes',
          icon: Box
        },
        {
          name: 'Gestion des clients',
          icon: Users
        },
        {
          name: 'Gestion en temps réel',
          icon: TimerResetIcon
        },
        {
          name: 'Accés a plus de 30 theme',
          icon: Box
        },
      ],
      buttonLabel: 'Get Started',
      highlight: false,
      additionalClasses: '',
    },
    {
      id: 2,
      title: 'Premium',
      price: '2000 DA',
      duration: 'Abonnement de 12 mois',
      features: [
        {
          name: 'Gestion des commandes',
          icon: Box
        },
        {
          name: 'Gestion des clients',
          icon: Users
        },
        {
          name: 'Gestion en temps réel',
          icon: TimerResetIcon
        },
        {
          name: 'Accés a plus de 30 theme',
          icon: Box
        },
      ],
      buttonLabel: 'Choose Plan',
      highlight: true,
      additionalClasses: 'bg-blue-100',
    },
    {
      id: 3,
      title: 'Pro',
      price: '2500 DA',
      duration: 'Abonnement de 6 mois',
      features: [
        {
          name: 'Gestion des commandes',
          icon: Box
        },
        {
          name: 'Gestion des clients',
          icon: Users
        },
        {
          name: 'Gestion en temps réel',
          icon: TimerResetIcon
        },
        {
          name: 'Accés a plus de 30 theme',
          icon: Box
        },
      ],
      buttonLabel: 'Go Premium',
      highlight: false,
      additionalClasses: '',
    },
  ];

  return (
    <article className=" bg-white bg-contact-bg py-16">
      <div className="md:max-w-screen-lg mx-auto">
        <WhyChooseUs features={features} />

        <PricingCards plans={plans} />
      </div>
    </article>
  );
}
export function getStaticProps() {
  const features = [
    {
      icon: 'Truck',
      title: 'FAST & FREE SHIPPING',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
      icon: 'Shield',
      title: 'WARRANTY PROTECTION',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit.',
    },
    {
      icon: 'Star',
      title: 'PREMIUM MATERIALS',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqu.',
    },
  ];

  const plans = [
    {
      id: 1,
      title: 'Starter',
      price: '3000 DA',
      duration: 'Abonnement de 1 mois',
      features: [
        {
          name: 'Gestion des commandes',
          icon: Box
        },
        {
          name: 'Gestion des clients',
          icon: Users
        },
        {
          name: 'Gestion en temps réel',
          icon: TimerResetIcon
        },
        {
          name: 'Accés a plus de 30 theme',
          icon: Box
        },
      ],
      buttonLabel: 'Get Started',
      highlight: false,
      additionalClasses: '',
    },
    {
      id: 2,
      title: 'Premium',
      price: '2000 DA',
      duration: 'Abonnement de 12 mois',
      features: [
        {
          name: 'Gestion des commandes',
          icon: Box
        },
        {
          name: 'Gestion des clients',
          icon: Users
        },
        {
          name: 'Gestion en temps réel',
          icon: TimerResetIcon
        },
        {
          name: 'Accés a plus de 30 theme',
          icon: Box
        },
      ],
      buttonLabel: 'Choose Plan',
      highlight: true,
      additionalClasses: 'bg-blue-100',
    },
    {
      id: 3,
      title: 'Pro',
      price: '2500 DA',
      duration: 'per 6 month',
      features: [
        {
          name: 'Gestion des commandes',
          icon: Box
        },
        {
          name: 'Gestion des clients',
          icon: Users
        },
        {
          name: 'Gestion en temps réel',
          icon: TimerResetIcon
        },
        {
          name: 'Accés a plus de 30 theme',
          icon: Box
        },
      ],
      buttonLabel: 'Go Premium',
      highlight: false,
      additionalClasses: '',
    },
  ];

  return {
    props: {
      features,
      // plans,
    },
  };
}
Tarifs.getHeader = {
  title: 'Notre Tarifs',
  breadcrumbs: [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Tarifs',
      url: '/tarifs',
    },
  ],
};
export default Tarifs;
