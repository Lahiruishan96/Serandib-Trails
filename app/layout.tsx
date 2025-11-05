import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // ✅ keep this

export const metadata = {
  title: "Serendib Trails",
  description: "Discover Sri Lanka with Serendib Trails",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer /> {/* ✅ keep only here */}
      </body>
    </html>
  );
}
