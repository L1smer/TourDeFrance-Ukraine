import { Facebook, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-4 mt-10">
      <div className="flex flex-col md:flex-row mx-10 justify-between items-center gap-4">
        <div className="text-center flex gap-2">
          <Mail size={24} /><a href="mailto:sergiy.krasnov@email.com" className="text-blue-400 hover:underline">sergiy.krasnov@gmail.com</a>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=61576887392494&locale=pl_PL"
            target="_blank"
            rel=""
            aria-label="Facebook"
            className="hover:text-blue-500 transition-colors"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.youtube.com/@SerhiiKrasnov"
            target="_blank"
            rel=""
            aria-label="YouTube"
            className="hover:text-red-500 transition-colors"
          >
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};