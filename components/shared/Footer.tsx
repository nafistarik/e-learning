import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
]

const footerLinks = {
  Company: ["Home", "Courses", "Contact"],
  Profile: ["Login", "Register", "Support"],
  Contact: {
    email: "info@elearning.com",
    phone: "+880 1234567890",
    address: "Dhaka, Bangladesh",
  },
}

export default function Footer() {
  return (
    <footer className="border-t bg-[#E1EDF9] text-muted-foreground">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo & Social Links */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold text-foreground">E-Learning</span>
            </Link>
            <p className="mt-2 text-sm">Unlock knowledge anytime, anywhere.</p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-muted-foreground transition hover:bg-muted hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.Company.map((link) => (
                <li key={link}>
                  <Link href="#" className="transition hover:text-foreground">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground">Profile</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.Profile.map((link) => (
                <li key={link}>
                  <Link href="#" className="transition hover:text-foreground">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Email: <span className="text-foreground">{footerLinks.Contact.email}</span></li>
              <li>Phone: <span className="text-foreground">{footerLinks.Contact.phone}</span></li>
              <li>Address: <span className="text-foreground">{footerLinks.Contact.address}</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-3 py-4 md:flex-row">
          <p className="text-center text-sm md:text-left">
            © 2024 E-Learning. All rights reserved.
          </p>
          <div className="flex gap-3">
            <Link href="#" className="text-sm transition hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm transition hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
