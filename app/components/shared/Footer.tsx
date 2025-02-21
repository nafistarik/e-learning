import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
]

const footerLinks = {
  Company: ["Home", "Categories", "Courses", "Contact"],
  Profile: ["Login", "Register", "Support"],
  Contact: {
    email: "info@elearning.com",
    phone: "+880 1234567890",
    address: "Dhaka, Bangladesh",
  },
}

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">E-Learning</span>
            </Link>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link key={index} href={social.href} className="text-muted-foreground hover:text-foreground">
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Profile</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.Profile.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-muted-foreground">Email: {footerLinks.Contact.email}</li>
              <li className="text-muted-foreground">Phone: {footerLinks.Contact.phone}</li>
              <li className="text-muted-foreground">Address: {footerLinks.Contact.address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2024 E-Learning. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 md:justify-end">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

