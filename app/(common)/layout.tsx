import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="relative">
        <div className="absolute top-0 w-full px-0">
          <Navbar />
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
