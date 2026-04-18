import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreProvider from "@/components/StoreProvider";

export const metadata = {
  title: "Portfolio",
  description: "Mon portfolio Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <StoreProvider>
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}