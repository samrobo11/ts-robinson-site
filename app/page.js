'use client';
import Image from "next/image";

const products = [
  "Fresh Fruit",
  "Fresh Vegetables",
  "Salads & Herbs",
  "Potatoes & Onions",
  "Seasonal Produce",
  "Wholesale Business Orders",
];

const reasons = [
  {
    title: "Fresh Stock Daily",
    text: "Quality produce supplied with consistency, care, and a strong focus on freshness.",
  },
  {
    title: "Reliable Local Service",
    text: "Dependable supply for businesses that need stock on time and without hassle.",
  },
  {
    title: "Built For Trade",
    text: "Supplying shops, takeaways, restaurants, caterers, and other local businesses.",
  },
];

const suppliedTo = [
  "Restaurants",
  "Takeaways",
  "Retail Shops",
  "Market Traders",
  "Caterers",
  "Local Businesses",
];

const whatsappSam =
  "https://wa.me/447701256670?text=Hi%20I%E2%80%99m%20interested%20in%20ordering%20produce%20from%20T%26S%20Robinson";
const whatsappTom =
  "https://wa.me/447931380496?text=Hi%20I%E2%80%99m%20interested%20in%20ordering%20produce%20from%20T%26S%20Robinson";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        color: "#111827",
        background: "#ffffff",
        scrollBehavior: "smooth",
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
            width={48}
            height={48}
          />
          <div>
            <div style={{ fontWeight: 900, fontSize: 18 }}>T&S Robinson</div>
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
            fontWeight: 700,
            flexWrap: "wrap",
            justifyContent: "flex-end",
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
          <a href="#delivery" style={{ textDecoration: "none", color: "#111827" }}>
            Delivery
          </a>
          <a href="#contact" style={{ textDecoration: "none", color: "#111827" }}>
            Contact
          </a>
        </div>
      </div>

      <section
        id="home"
        className="fade-up"
        style={{
          padding: "90px 30px 100px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #eff6ff 0%, #ffffff 45%, #ecfdf5 100%)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            className="soft-pop"
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: 999,
              background: "#dbeafe",
              color: "#1d4ed8",
              fontWeight: 800,
              fontSize: 13,
              marginBottom: 22,
            }}
          >
            Trusted wholesale supplier in Bradford
          </div>

          <div style={{ marginBottom: 20 }} className="floating-logo">
            <Image
              src="/logo.png"
              alt="T&S Robinson logo"
              width={180}
              height={180}
              priority
            />
          </div>

          <h1
            className="fade-up"
            style={{
              fontSize: 54,
              lineHeight: 1.1,
              margin: "0 0 18px",
              fontWeight: 900,
              maxWidth: 920,
              marginInline: "auto",
            }}
          >
            Fresh produce for businesses that need quality, speed, and reliability
          </h1>

          <p
            className="fade-up"
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
            className="fade-up"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
              marginBottom: 26,
            }}
          >
            <a
              href="#contact"
              className="cta-button primary-btn"
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
              href={whatsappSam}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button whatsapp-btn"
              style={{
                display: "inline-block",
                background: "#25D366",
                color: "#fff",
                padding: "15px 24px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 800,
                boxShadow: "0 10px 30px rgba(37,211,102,0.22)",
              }}
            >
              WhatsApp Us
            </a>

            <a
              href="#products"
              className="cta-button secondary-btn"
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

          <div
            className="fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              maxWidth: 980,
              margin: "30px auto 0",
            }}
          >
            {[
              "Units 27–29 St James's Market, Essex St, Bradford, BD4 7PN",
              "Mon–Fri 5:00AM–10:00AM",
              "Saturday 5:00AM–9:30AM",
              "Sunday Closed",
            ].map((item) => (
              <div
                key={item}
                className="glass-card hover-card"
                style={{
                  background: "rgba(255,255,255,0.72)",
                  border: "1px solid #e5e7eb",
                  borderRadius: 16,
                  padding: 16,
                  fontWeight: 700,
                  color: "#374151",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="fade-up"
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
                marginBottom: 18,
              }}
            >
              T&S Robinson is a trusted wholesale supplier of fresh fruit and
              vegetables. We provide quality produce with freshness, reliability,
              and competitive pricing, helping businesses get the stock they need
              with dependable service they can build around.
            </p>

            <p
              style={{
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: 18,
                maxWidth: 700,
              }}
            >
              Based in Bradford, we work with trade customers who need a supplier
              they can count on for consistent stock, straightforward communication,
              and local service.
            </p>
          </div>

          <div
            className="hover-card"
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
              {suppliedTo.map((item) => (
                <div
                  key={item}
                  className="hover-card"
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
        className="fade-up"
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
                className="dark-hover-card"
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
        className="fade-up"
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
                className="hover-card"
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
        id="delivery"
        className="fade-up"
        style={{
          padding: "85px 30px",
          background: "#ffffff",
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
            Delivery
          </div>

          <h2
            style={{
              fontSize: 38,
              textAlign: "center",
              marginBottom: 15,
              fontWeight: 900,
            }}
          >
            Local delivery available
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#4b5563",
              marginBottom: 36,
              fontSize: 18,
              maxWidth: 760,
              marginInline: "auto",
            }}
          >
            We offer delivery for businesses in local surrounding areas. Delivery
            locations can be expanded or updated once you decide exactly which places
            you want listed on the website.
          </p>

          <div
            className="hover-card"
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: 20,
              padding: 28,
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 10 }}>
              Need delivery information?
            </div>
            <div style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: 20 }}>
              Contact us directly to check delivery coverage and availability for your area.
            </div>
            <a
              href={whatsappSam}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button whatsapp-btn"
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
              Ask About Delivery
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="fade-up"
        style={{
          padding: "85px 30px",
          textAlign: "center",
          background: "#ffffff",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
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
              marginBottom: 35,
              fontSize: 18,
            }}
          >
            For enquiries, orders, deliveries, and wholesale supply.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
              marginBottom: 30,
            }}
          >
            <div
              className="hover-card"
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 18,
                padding: 22,
              }}
            >
              <div style={{ fontWeight: 800, marginBottom: 8 }}>Address</div>
              <div style={{ color: "#4b5563", lineHeight: 1.7 }}>
                Units 27-29 St James's Market,
                <br />
                Essex St, Bradford,
                <br />
                BD4 7PN
              </div>
            </div>

            <div
              className="hover-card"
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 18,
                padding: 22,
              }}
            >
              <div style={{ fontWeight: 800, marginBottom: 8 }}>Contact Details</div>
              <div style={{ color: "#4b5563", lineHeight: 1.8 }}>
                <div>01274 732352</div>
                <div>sales@tsrobinson.co.uk</div>
                <div>Tom: 07931 380496</div>
                <div>Sam: 07701 256670</div>
              </div>
            </div>

            <div
              className="hover-card"
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 18,
                padding: 22,
              }}
            >
              <div style={{ fontWeight: 800, marginBottom: 8 }}>Opening Hours</div>
              <div style={{ color: "#4b5563", lineHeight: 1.8 }}>
                <div>Mon–Fri: 5:00AM – 10:00AM</div>
                <div>Saturday: 5:00AM – 9:30AM</div>
                <div>Sunday: Closed</div>
              </div>
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
              href="tel:01274732352"
              className="cta-button primary-btn"
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
              Call Office
            </a>

            <a
              href="mailto:sales@tsrobinson.co.uk"
              className="cta-button dark-btn"
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
              Email Us
            </a>

            <a
              href={whatsappTom}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button whatsapp-btn"
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
              href={whatsappSam}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button whatsapp-btn"
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

      <section
        id="location"
        className="fade-up"
        style={{
          padding: "0 30px 85px",
          background: "#ffffff",
        }}
      >
        <div
          className="hover-card"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: 22,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ padding: 24 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "#2563eb",
                marginBottom: 10,
              }}
            >
              Location
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>
              Find us in Bradford
            </div>
            <div style={{ color: "#4b5563", lineHeight: 1.7 }}>
              Units 27-29 St James's Market, Essex St, Bradford, BD4 7PN
            </div>
          </div>

          <div
            style={{
              height: 320,
              background:
                "linear-gradient(135deg, #dbeafe 0%, #f8fafc 50%, #dcfce7 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              textAlign: "center",
              color: "#374151",
              fontWeight: 700,
            }}
          >
            Google Maps embed can be added here next.
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
        href={whatsappSam}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
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

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        a {
          transition: all 0.25s ease;
        }

        .fade-up {
          animation: fadeUp 0.8s ease both;
        }

        .soft-pop {
          animation: softPop 0.8s ease both;
        }

        .floating-logo {
          animation: floatLogo 3.5s ease-in-out infinite;
          display: inline-block;
        }

        .hover-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .hover-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 34px rgba(0,0,0,0.08);
        }

        .dark-hover-card {
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .dark-hover-card:hover {
          transform: translateY(-6px);
          background: rgba(255,255,255,0.1);
        }

        .cta-button:hover {
          transform: translateY(-2px) scale(1.02);
          filter: brightness(1.03);
        }

        .floating-whatsapp:hover {
          transform: scale(1.06);
          filter: brightness(1.05);
        }

        @keyframes floatLogo {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes softPop {
          0% {
            opacity: 0;
            transform: scale(0.96);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </main>
  );
}
