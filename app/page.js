import Image from "next/image";

const products = [
  "Fresh Fruit",
  "Fresh Vegetables",
  "Wholesale Supply",
  "Reliable Deliveries",
  "Seasonal Produce",
  "Business Orders",
];

const reasons = [
  {
    title: "Fresh Stock Daily",
    text: "Quality produce supplied with consistency, care, and a strong focus on freshness.",
  },
  {
    title: "Reliable Service",
    text: "Dependable supply for businesses that need stock on time and without hassle.",
  },
  {
    title: "Trade Focused",
    text: "Supplying shops, takeaways, restaurants, caterers, and other local businesses.",
  },
];

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        color: "#111827",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 40px",
          borderBottom: "1px solid #e5e7eb",
          background: "rgba(255,255,255,0.95)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src="/logo.png"
            alt="T&S Robinson logo"
            width={46}
            height={46}
          />
          <div>
            <div style={{ fontWeight: 800, fontSize: 18 }}>T&S Robinson</div>
            <div style={{ fontSize: 12, color: "#6b7280" }}>
              Fresh Fruit & Vegetable Wholesale
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 20,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          <a href="#home" style={{ textDecoration: "none", color: "#111827" }}>
            Home
          </a>
          <a href="#about" style={{ textDecoration: "none", color: "#111827" }}>
            About
          </a>
          <a href="#products" style={{ textDecoration: "none", color: "#111827" }}>
            Products
          </a>
          <a href="#contact" style={{ textDecoration: "none", color: "#111827" }}>
            Contact
          </a>
        </div>
      </div>

      <section
        id="home"
        style={{
          padding: "90px 30px 100px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #eff6ff 0%, #ffffff 45%, #ecfdf5 100%)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: 999,
              background: "#dbeafe",
              color: "#1d4ed8",
              fontWeight: 700,
              fontSize: 13,
              marginBottom: 22,
            }}
          >
            Trusted local wholesale supplier
          </div>

          <div style={{ marginBottom: 20 }}>
            <Image
              src="/logo.png"
              alt="T&S Robinson logo"
              width={170}
              height={170}
              priority
            />
          </div>

          <h1
            style={{
              fontSize: 54,
              lineHeight: 1.1,
              margin: "0 0 18px",
              fontWeight: 900,
              maxWidth: 900,
              marginInline: "auto",
            }}
          >
            Fresh produce for businesses that need quality and reliability
          </h1>

          <p
            style={{
              fontSize: 20,
              color: "#4b5563",
              maxWidth: 760,
              margin: "0 auto 34px",
              lineHeight: 1.7,
            }}
          >
            T&S Robinson supplies fresh fruit and vegetables to trade customers
            with dependable service, strong relationships, and stock you can rely on.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <a
              href="#contact"
              style={{
                display: "inline-block",
                background: "#1d4ed8",
                color: "#fff",
                padding: "15px 24px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 800,
                boxShadow: "0 10px 30px rgba(29,78,216,0.25)",
              }}
            >
              Get In Touch
            </a>

            <a
              href="#products"
              style={{
                display: "inline-block",
                background: "#ffffff",
                color: "#111827",
                padding: "15px 24px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 800,
                border: "1px solid #d1d5db",
              }}
            >
              View Products
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        style={{
          padding: "85px 30px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 30,
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "#2563eb",
                marginBottom: 14,
              }}
            >
              About Us
            </div>

            <h2
              style={{
                fontSize: 38,
                margin: "0 0 18px",
                fontWeight: 900,
              }}
            >
              Wholesale produce with a simple, honest approach
            </h2>

            <p
              style={{
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: 18,
                maxWidth: 700,
              }}
            >
              T&S Robinson is a trusted wholesale supplier of fresh fruit and
              vegetables. We provide quality produce with freshness, reliability,
              and competitive pricing, helping businesses get the stock they need
              with dependable service they can build around.
            </p>
          </div>

          <div
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: 20,
              padding: 24,
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 18 }}>
              Who We Supply
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {[
                "Restaurants",
                "Takeaways",
                "Retail Shops",
                "Market Traders",
                "Caterers",
                "Local Businesses",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "#ffffff",
                    padding: 14,
                    borderRadius: 12,
                    textAlign: "center",
                    fontWeight: 700,
                    border: "1px solid #e5e7eb",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "80px 30px",
          background: "#0f172a",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#93c5fd",
              marginBottom: 14,
              textAlign: "center",
            }}
          >
            Why Choose Us
          </div>

          <h2
            style={{
              textAlign: "center",
              fontSize: 38,
              margin: "0 0 40px",
              fontWeight: 900,
            }}
          >
            Built for trade customers who need dependable supply
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 22,
            }}
          >
            {reasons.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: 26,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>
                  {item.title}
                </div>
                <div style={{ color: "#cbd5e1", lineHeight: 1.7 }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="products"
        style={{
          padding: "85px 30px",
          background: "#f8fafc",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#2563eb",
              marginBottom: 14,
              textAlign: "center",
            }}
          >
            What We Supply
          </div>

          <h2
            style={{
              fontSize: 38,
              textAlign: "center",
              marginBottom: 15,
              fontWeight: 900,
            }}
          >
            Quality produce for a wide range of businesses
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#4b5563",
              marginBottom: 40,
              fontSize: 18,
            }}
          >
            Fresh stock for shops, restaurants, takeaways, caterers, and local businesses.
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
                  padding: 28,
                  borderRadius: 18,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  textAlign: "center",
                  fontWeight: 800,
                  fontSize: 18,
                  border: "1px solid #e5e7eb",
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
          padding: "85px 30px",
          textAlign: "center",
          background: "#ffffff",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#2563eb",
              marginBottom: 14,
            }}
          >
            Contact
          </div>

          <h2 style={{ fontSize: 38, marginBottom: 15, fontWeight: 900 }}>
            Let’s talk about your business needs
          </h2>

          <p
            style={{
              color: "#4b5563",
              marginBottom: 25,
              fontSize: 18,
            }}
          >
            For enquiries, orders, and wholesale supply.
          </p>

          <div style={{ fontSize: 20, lineHeight: 1.9, marginBottom: 24 }}>
            <div>
              <strong>Tom:</strong> 07931 380496
            </div>
            <div>
              <strong>Sam:</strong> 07701 256670
            </div>
          </div>

          <div
            style={{
              marginTop: 30,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <a
              href="tel:07931380496"
              style={{
                display: "inline-block",
                background: "#1d4ed8",
                color: "#fff",
                padding: "13px 22px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 800,
                boxShadow: "0 8px 24px rgba(29,78,216,0.18)",
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
                padding: "13px 22px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              Call Sam
            </a>

            <a
              href="https://wa.me/447931380496"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#25D366",
                color: "#fff",
                padding: "13px 22px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 800,
                boxShadow: "0 8px 24px rgba(37,211,102,0.2)",
              }}
            >
              WhatsApp Tom
            </a>

            <a
              href="https://wa.me/447701256670"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#22c55e",
                color: "#fff",
                padding: "13px 22px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 800,
                boxShadow: "0 8px 24px rgba(34,197,94,0.2)",
              }}
            >
              WhatsApp Sam
            </a>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: "#0f172a",
          color: "#cbd5e1",
          textAlign: "center",
          padding: "26px 20px",
          fontSize: 14,
        }}
      >
        © {new Date().getFullYear()} T&S Robinson. All rights reserved.
      </footer>

      <a
        href="https://wa.me/447701256670"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#25D366",
          color: "#fff",
          padding: "14px 18px",
          borderRadius: 999,
          textDecoration: "none",
          fontWeight: 800,
          boxShadow: "0 10px 26px rgba(0,0,0,0.22)",
          zIndex: 1000,
        }}
      >
        WhatsApp Us
      </a>
    </main>
  );
}
