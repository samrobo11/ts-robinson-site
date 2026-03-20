import Image from "next/image";

const products = [
  "Fresh Fruit",
  "Fresh Vegetables",
  "Wholesale Supply",
  "Reliable Deliveries",
  "Seasonal Produce",
  "Business Orders",
];

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0, color: "#1f2937" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #e5e7eb",
          background: "#ffffff",
          position: "sticky",
          top: 0,
        }}
      >
        <h2 style={{ margin: 0 }}>T&S Robinson</h2>
        <div style={{ display: "flex", gap: 20, fontSize: 14 }}>
          <a href="#home" style={{ textDecoration: "none", color: "#1f2937" }}>Home</a>
          <a href="#about" style={{ textDecoration: "none", color: "#1f2937" }}>About</a>
          <a href="#products" style={{ textDecoration: "none", color: "#1f2937" }}>Products</a>
          <a href="#contact" style={{ textDecoration: "none", color: "#1f2937" }}>Contact</a>
        </div>
      </div>

      <section
        id="home"
        style={{
          padding: "80px 30px",
          textAlign: "center",
          background: "linear-gradient(to bottom, #f9fafb, #f3f4f6)",
        }}
      >
        <Image
          src="/logo.png"
          alt="T&S Robinson logo"
          width={180}
          height={180}
          priority
        />
        <h1 style={{ fontSize: 44, margin: "20px 0 10px" }}>
          Fresh Fruit & Vegetable Wholesale
        </h1>
        <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 30 }}>
          Supplying quality produce since 1998
        </p>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            background: "#2e3192",
            color: "#fff",
            padding: "14px 24px",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Get In Touch
        </a>
      </section>

      <section
        id="about"
        style={{
          padding: "70px 30px",
          textAlign: "center",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: 32, marginBottom: 15 }}>About Us</h2>
        <p style={{ maxWidth: 720, margin: "0 auto", color: "#4b5563", lineHeight: 1.7 }}>
          T&S Robinson is a trusted wholesale supplier of fresh fruit and vegetables.
          We provide high-quality produce with freshness, reliability, and competitive pricing,
          helping businesses get the stock they need with dependable service.
        </p>
      </section>

      <section
        id="products"
        style={{
          padding: "70px 30px",
          background: "#f9fafb",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, textAlign: "center", marginBottom: 15 }}>What We Supply</h2>
          <p style={{ textAlign: "center", color: "#4b5563", marginBottom: 40 }}>
            Quality produce for shops, restaurants, takeaways, caterers, and local businesses.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {products.map((item) => (
              <div
                key={item}
                style={{
                  background: "#ffffff",
                  padding: 24,
                  borderRadius: 14,
                  boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          padding: "70px 30px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 32, marginBottom: 15 }}>Contact</h2>
        <p style={{ color: "#4b5563", marginBottom: 25 }}>
          For enquiries, orders, and wholesale supply.
        </p>

        <div style={{ fontSize: 18, lineHeight: 1.9 }}>
          <div><strong>Tom:</strong> 07931 380496</div>
          <div><strong>Sam:</strong> 07701 256670</div>
        </div>

        <div style={{ marginTop: 30 }}>
          <a
            href="tel:07931380496"
            style={{
              display: "inline-block",
              marginRight: 12,
              marginBottom: 12,
              background: "#2e3192",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Call Tom
          </a>

          <a
            href="tel:07701256670"
            style={{
              display: "inline-block",
              background: "#111827",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Call Sam
          </a>
        </div>
      </section>
    </main>
  );
}
