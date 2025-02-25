import AuthGuard from "@/components/shared/AuthGuard";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <AuthGuard role="user">{children}</AuthGuard>
      <Footer />
    </>
  );
}
