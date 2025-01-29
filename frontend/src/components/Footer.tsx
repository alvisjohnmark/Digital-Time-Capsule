import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#ff8a65] text-white py-6 border-t ">
      <div className="container mx-auto text-center">
        <h1 className=" text-center mb-4 text-2xl font-bold">Digicap</h1>

        <div className="flex justify-center gap-4">
          <a href="#" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm mt-4">
          &copy; DTC Inc. All rights reserved. {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
