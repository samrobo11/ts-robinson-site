export const metadata = {
  title: "T&S Robinson",
  description: "Fresh Fruit & Vegetable Wholesale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
