export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
          borderBottom: "1px solid #eee",
        }}
      >
        <h2>T&S Robinson</h2>
        <div>
          <a style={{ marginRight: 20 }}>Home</a>
          <a style={{ marginRight: 20 }}>Products</a>
          <a>Contact</a>
        </div>
      </div>

      <section
        style={{
          padding: "80px 40px",
          textAlign: "center",
          background: "#f7f7f7",
        }}
      >
        <img 
  src="/logo.png"
  alt="T&S Robinson logo"
  style={{ width: 300, marginBottom: 20 }}
/>
        <h1 style={{ fontSize: 40, marginBottom: 10 }}>
          Fresh Fruit & Vegetable Wholesale
        </h1>
        <p style={{ fontSize: 18, color: "#555" }}>
          Supplying quality produce since 1998
        </p>
      </section>

      <section style={{ padding: "60px 40px", textAlign: "center" }}>
        <h2>About Us</h2>
        <p style={{ maxWidth: 600, margin: "20px auto", color: "#555" }}>
          T&S Robinson is a trusted wholesale supplier of fresh fruit and
          vegetables. We provide high-quality produce with freshness,
          reliability, and competitive pricing.
        </p>
      </section>

      <section
        style={{
          padding: "60px 40px",
          background: "#f7f7f7",
          textAlign: "center",
        }}
      >
        <h2>Contact</h2>
        <p>Tom: 07931 380496</p>
        <p>Sam: 07701 256670</p>
      </section>
    </main>
  );
}
