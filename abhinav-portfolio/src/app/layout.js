
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

export const metadata = {
  title: "Abhinav Sharma | Full Stack & Cloud Developer",
  description:
    "Portfolio of Abhinav Sharma - Full Stack Developer specializing in Next.js, React, Python, FastAPI and Google Cloud.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
