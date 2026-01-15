import "./globals.css";

export const metadata = {
  title: "Smooth Project",
  description: "Smooth Project with smooth scroll",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
