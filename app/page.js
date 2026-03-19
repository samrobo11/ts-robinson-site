export default function TSRobinsonWebsite() {
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
      title: "Fresh stock, every day",
      text: "Quality fruit and veg supplied with consistency, care, and a focus on freshness.",
    },
    {
      title: "Built for trade customers",
      text: "Ideal for shops, restaurants, takeaways, market traders, caterers, and local businesses.",
    },
    {
      title: "Reliable local service",
      text: "A straightforward wholesale service you can trust for regular orders and dependable delivery.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200 blur-3xl" />
          <div className="absolute top-16 right-0 h-72 w-72 rounded-full bg-emerald-200 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between rounded-2xl border bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
            <div>
              <div className="text-2xl font-black tracking-tight text-sky-700">T&amp;S Robinson</div>
              <div className="text-sm text-slate-600">Fresh Fruit &amp; Vegetable Wholesale</div>
            </div>
            <a
              href="#contact"
              className="rounded-2xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow transition hover:scale-[1.02]"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 shadow-sm">
              Trusted local wholesale supplier
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Fresh produce for businesses that need quality and reliability.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              T&amp;S Robinson supplies fresh fruit and vegetables to trade customers with dependable service,
              strong relationships, and a focus on keeping stock fresh and orders moving.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-sky-700 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                Request a quote
              </a>
              <a
                href="#about"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Learn more
              </a>
            </div>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {products.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-lg shadow-slate-200/60 backdrop-blur"
                >
                  <div className="text-lg font-bold text-slate-900">{item}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">
                    Professional supply for local businesses that need dependable produce and service.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">About us</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Wholesale produce with a simple, honest approach.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              T&amp;S Robinson is a fresh produce business focused on supplying quality fruit and vegetables to trade
              customers. Whether you need regular wholesale supply or dependable stock for busy service days, the goal
              is simple: good produce, fair service, and reliability you can build around.
            </p>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-6 shadow-sm">
            <div className="text-lg font-bold">Who we supply</div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="rounded-2xl bg-white p-4 shadow-sm">Restaurants</div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">Takeaways</div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">Retail shops</div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">Market traders</div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">Caterers</div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">Local businesses</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">Why choose us</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
                <h3 className="text-2xl font-bold">{reason.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border bg-gradient-to-r from-emerald-50 to-sky-50 p-8 shadow-sm md:p-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">Orders & service</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Need a dependable produce supplier?</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                We work with businesses that want fresh stock, straightforward communication, and reliable supply.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-sky-700">Flexible ordering</div>
                <div className="mt-2 text-slate-600">Regular customers and repeat business welcome.</div>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-sky-700">Fresh stock focus</div>
                <div className="mt-2 text-slate-600">Produce selected with freshness and consistency in mind.</div>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-sky-700">Trade-friendly</div>
                <div className="mt-2 text-slate-600">Built around the needs of busy businesses and service hours.</div>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-sky-700">Local trust</div>
                <div className="mt-2 text-slate-600">A practical, honest supplier relationship that lasts.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">Contact</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Let’s talk about your business needs.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Use the contact details below to enquire about stock, trade supply, deliveries, or regular orders.
            </p>
          </div>

          <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
            <div className="space-y-5">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Business</div>
                <div className="mt-1 text-xl font-bold">T&amp;S Robinson</div>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Phone</div>
                <div className="mt-1 text-lg">Tom: 07931 380496</div>
                <div className="text-lg">Sam: 07701 256670</div>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Email</div>
                <div className="mt-1 text-lg text-slate-700">info@tsrobinson.co.uk</div>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Message</div>
                <p className="mt-1 leading-7 text-slate-600">
                  Fresh fruit and vegetable wholesale for local businesses. Get in touch for supply enquiries,
                  pricing, and regular orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
