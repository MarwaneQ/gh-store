import ContactUs from '@/components/ui/ContactUs';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <article className="pt-20 bg-[#F8F9FA] md:bg-contact-bg ">
      <div className=" px-6 md:px-0 md:max-w-screen-lg mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 justify-between">
          <div className="mb-4 flex flex-col justify-evenly gap-y-4">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-primary md:text-7xl">
                Feel free to <span className="block">contact us</span>
              </h2>
              <div className="space-y-1 text-sm font-light md:text-lg">
                <p className="flex items-center">
                  <Phone color="#FF7A18" className="mx-2" />
                  <a href="tel:+610383766284">+61 (0) 383 766 284</a>
                </p>
                <p className="flex items-center text-primary">
                  <Mail color="#FF7A18" className="mx-2" />
                  <a href="mailto:noreply@envato.com">noreply@envato.com</a>
                </p>
              </div>
            </div>
            <hr className="w-full" />
            <div className="space-y-2 text-sm md:text-lg">
              <p className="font-semibold text-[#FF7A18]">Our address</p>
              <h5 className="font-bold">
                Level 13, 2 Elizabeth St,
                <span className="block">Melbourne, Victoria 3000,</span>
                Australia
              </h5>
            </div>
            <hr />
            <div className="text-xs text-gray-500 md:text-sm">
              <p>Fusce ut velit laoreet, tempus arcu eu, molestie tortor.</p>
              <p>Mon – Sat: 9 am – 6 pm</p>
            </div>
          </div>

          <img src="assets/images/contact.png" alt="contact" />
        </div>
        <ContactUs />
      </div>
    </article>
  );
};

Contact.getHeader = {
  title: 'Contact us',
  breadcrumbs: [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ],
  isHome: false,
};

export default Contact;
