import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Mon portfolio Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}