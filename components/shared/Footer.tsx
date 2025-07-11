import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import logo from "@/app/assets/images/shared/logo.png";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
];

const footerLinks = {
  Company: ["Home", "Courses", "Contact"],
  Profile: ["Login", "Register", "Support"],
  Contact: {
    email: "info@skillflow.com",
    phone: "+880 1234567890",
    address: "Dhaka, Bangladesh",
  },
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-muted-foreground">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              width={1000}
              height={1000}
              className="h-10 w-auto"
              alt="logo"
            />
          </Link>
            <p className="mt-2 text-sm leading-relaxed">
              Unlock knowledge anytime, anywhere.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-muted-foreground hover:bg-muted hover:text-primary transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.Company.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="transition hover:text-primary"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Profile
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.Profile.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="transition hover:text-primary"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                Email:{" "}
                <span className="text-foreground">
                  {footerLinks.Contact.email}
                </span>
              </li>
              <li>
                Phone:{" "}
                <span className="text-foreground">
                  {footerLinks.Contact.phone}
                </span>
              </li>
              <li>
                Address:{" "}
                <span className="text-foreground">
                  {footerLinks.Contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="container flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left">
            © 2025 SkillFlow. All rights reserved.
          </p>
          <div className="flex gap-5 justify-center md:justify-end">
            <Link
              href="#"
              className="transition hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="transition hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
