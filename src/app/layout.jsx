import "./index.css";
import Navbar from "@/sections/header/Header";
import Footer from "@/sections/footer/Footer";

export const metadata = {
  title: "Portfolio",
  description: "Abdurehim Kedir. - Fullstack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
          <Navbar />
          <div className="max-w-7xl lg:px-5 mx-auto">
            {children}
          </div>
          <Footer />
      </body>
    </html>
  );
}
