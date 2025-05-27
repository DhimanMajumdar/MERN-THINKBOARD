import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full px-6 py-8 bg-base-300 text-base-content border-t border-base-content">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <h2 className="font-bold text-lg tracking-wide">ThinkBoard</h2>
          <p className="text-sm opacity-70">
            Built for minds that don’t rest. Capture and organize your thoughts.
          </p>
        </div>

        <div className="flex gap-6 items-center">
          <a href="#" className="hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-base-300 mt-6 pt-4 text-center text-xs text-base-content/60">
        <p>
          © {new Date().getFullYear()} Dhiman Majumdar. All rights reserved. ·{" "}
          <a href="#" className="underline hover:text-primary transition">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
