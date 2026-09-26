import "./globals.css";
import Image from "next/image";
export const metadata = {
  title: "T&S Robinson",
  description: "Fresh Fruit & Vegetable Wholesale",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="brand-intro" aria-hidden="true">
          <div className="brand-intro-mark">
            <Image src="/logo.png" alt="" width={220} height={220} priority />
            <div className="brand-intro-name">T&amp;S Robinson</div>
            <div className="brand-intro-caption">Fresh produce. Personal service.</div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}

