import { FaLocationArrow, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative overflow-hidden" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 bottom-0 h-full -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-20 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section 1: Description & Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Bernos Tech" className="h-10" />
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Bernos Tech
              </h2>
            </div>
            <p className="text-white-200 mb-4">
              We transform ideas into exceptional digital experiences through innovative 
              solutions and cutting-edge technology.
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-400" />
                <span>bernos@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-purple-400" />
                <span>+251 (9234) 567-8900</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-400" />
                <span>Addis Abeba, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Section 2: Contact Form */}
          <div className="bg-black-200/50 backdrop-blur-lg p-8 rounded-xl border border-purple-900/30 w-full max-w-lg">
            <h3 className="text-xl font-bold mb-6">Get in touch</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-black-300/50 border border-purple-900/30 rounded-lg px-4 py-3 text-white-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-black-300/50 border border-purple-900/30 rounded-lg px-4 py-3 text-white-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full bg-black-300/50 border border-purple-900/30 rounded-lg px-4 py-3 text-white-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <MagicButton
                title="Send Message"
                icon={<FaLocationArrow />}
                position="right"
              />
            </form>
          </div>
        </div>

        {/* Section 3: Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-purple-900/30 pt-8">
          <p className="text-sm text-white-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} Bernos Tech. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href="#"
                className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200/50 rounded-lg border border-purple-900/30 hover:bg-purple-900/30 transition-colors"
              >
                <img src={info.img} alt="social icon" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;