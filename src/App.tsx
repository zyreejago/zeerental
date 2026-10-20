import { useState } from "react";
import {
  BUSINESS,
  FAQS,
  IMAGES,
  INCLUDED,
  STEPS,
  TESTIMONIALS,
  TRUST_STATS,
  VEHICLES,
  WA_GENERAL,
  formatRupiah,
  waLink,
  type Vehicle,
  type VehicleKind,
} from "./data";

function ChatIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3C6.5 3 2 6.9 2 11.8c0 1.6.5 3.1 1.4 4.4L2 21l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-3.9 10-8.8S17.5 3 12 3Zm0 16.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-2.9.8.8-2.8-.2-.3a7.3 7.3 0 0 1-1.2-4C3.8 7.6 7.5 4.7 12 4.7s8.2 2.9 8.2 6.5-3.7 7.9-8.2 7.9Zm4.6-5.9c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.1-.3.1-.5 0a8.2 8.2 0 0 1-4-3.5c-.3-.5.3-.5.7-1.6a.6.6 0 0 0 0-.5c-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2.2-.2 3.9a14.6 14.6 0 0 0 5.7 5.3c2.1 1 2.4.8 2.9.7.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function SectionHead({
  index,
  kicker,
  title,
  sub,
}: {
  index: string;
  kicker: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs font-semibold tracking-[0.25em] text-signal uppercase">
        {index} — {kicker}
      </p>
      <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {sub ? <p className="mt-4 text-lg leading-relaxed text-smoke">{sub}</p> : null}
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#atas" className="font-display text-xl font-black tracking-tight">
          ZEE<span className="text-signal">RENTAL</span>
          <span className="ml-1 inline-block h-2 w-2 bg-signal align-baseline" />
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[11px] font-medium tracking-[0.2em] text-ink-soft uppercase lg:flex">
          <a href="#armada" className="transition-colors hover:text-signal">
            Armada
          </a>
          <a href="#dapat" className="transition-colors hover:text-signal">
            Yang Anda dapat
          </a>
          <a href="#cara-sewa" className="transition-colors hover:text-signal">
            Cara sewa
          </a>
          <a href="#testimoni" className="transition-colors hover:text-signal">
            Testimoni
          </a>
          <a href="#faq" className="transition-colors hover:text-signal">
            FAQ
          </a>
        </nav>
        <a
          href={WA_GENERAL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-signal"
        >
          <ChatIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Chat WhatsApp</span>
          <span className="sm:hidden">Chat</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="atas" className="pt-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-14 pb-16 md:pt-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-signal uppercase">
            Sewa mobil &amp; motor · Bali
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[0.98] font-black tracking-tight text-balance md:text-7xl">
            Sewa mobil dan motor di Bali yang bikin Anda{" "}
            <span className="hero-underline">tinggal jalan.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-smoke">
            Unit bersih dan terawat kami antar ke hotel, villa, atau bandara. Harga yang Anda
            lihat adalah harga final: tanpa biaya siluman, tanpa drama deposit.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-signal px-7 py-3.5 font-display text-base font-bold text-white transition-colors hover:bg-signal-dark"
            >
              <ChatIcon />
              Sewa lewat WhatsApp
            </a>
            <a
              href="#armada"
              className="font-display text-base font-bold text-ink underline decoration-signal decoration-2 underline-offset-8 transition-colors hover:text-signal"
            >
              Lihat armada ↓
            </a>
          </div>
          <p className="mt-6 font-mono text-xs tracking-wide text-smoke">
            Lepas kunci atau pakai sopir · antar mulai ±15 menit di area kota
          </p>
        </div>
        <div className="lg:col-span-5">
          <figure className="border border-ink bg-paper">
            <img
              src={IMAGES.hero}
              alt="Pantai di Bali dengan air laut biru jernih"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
            <figcaption className="flex items-center justify-between gap-4 border-t border-ink px-4 py-3">
              <span className="text-sm font-medium">
                Unit diantar ke tempat Anda menginap. Anda tinggal naik.
              </span>
              <span className="font-mono text-[11px] font-semibold tracking-widest whitespace-nowrap text-signal uppercase">
                Denpasar · Bali
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-line bg-cream/60">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
        {TRUST_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-5 py-7 md:px-7 ${i > 0 ? "border-l border-line max-lg:[&:nth-child(3)]:border-l-0" : ""} max-lg:[&:nth-child(n+3)]:border-t max-lg:[&:nth-child(n+3)]:border-line`}
          >
            <dt className="order-2 mt-2 block font-mono text-[11px] leading-relaxed tracking-[0.15em] text-smoke uppercase">
              {stat.label}
            </dt>
            <dd className="font-display text-3xl font-black tracking-tight md:text-4xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

type FleetFilter = "Semua" | VehicleKind;

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const rentLink = waLink(
    `Halo ZeeRental, saya mau sewa ${vehicle.name}. Masih tersedia? Tanggalnya saya kabari setelah ini.`,
  );
  return (
    <article className="group flex flex-col border border-line bg-white transition-colors hover:border-ink">
      <div className="relative">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-paper px-2.5 py-1 font-mono text-[11px] font-semibold tracking-[0.2em] uppercase">
          {vehicle.kind}
        </span>
        <span className="absolute bottom-3 left-3 bg-ink px-3 py-1.5 font-mono text-sm font-semibold text-paper">
          {formatRupiah(vehicle.pricePerDay)}
          <span className="text-paper/60"> / hari</span>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl font-extrabold tracking-tight">{vehicle.name}</h3>
        <p className="mt-2 leading-relaxed text-smoke">{vehicle.note}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {vehicle.specs.map((spec) => (
            <li
              key={spec}
              className="border border-line px-2.5 py-1 font-mono text-[11px] font-medium tracking-wider text-ink-soft uppercase"
            >
              {spec}
            </li>
          ))}
        </ul>
        <div className="mt-5 grid grid-cols-2 divide-x divide-line border border-line">
          <div className="px-3.5 py-2.5">
            <p className="font-mono text-[10px] tracking-[0.2em] text-smoke uppercase">
              Deposit WNI
            </p>
            <p className="mt-0.5 font-mono text-sm font-semibold">
              {formatRupiah(vehicle.depositWni)}
            </p>
          </div>
          <div className="px-3.5 py-2.5">
            <p className="font-mono text-[10px] tracking-[0.2em] text-smoke uppercase">
              Deposit WNA
            </p>
            <p className="mt-0.5 font-mono text-sm font-semibold">
              {formatRupiah(vehicle.depositWna)}
            </p>
          </div>
        </div>
        <a
          href={rentLink}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 bg-ink px-5 py-3 font-display text-sm font-bold text-paper transition-colors hover:bg-signal"
        >
          <ChatIcon className="h-4 w-4" />
          Sewa unit ini
        </a>
      </div>
    </article>
  );
}

function Fleet() {
  const [filter, setFilter] = useState<FleetFilter>("Semua");
  const visible = VEHICLES.filter((v) => filter === "Semua" || v.kind === filter);
  const filters: FleetFilter[] = ["Semua", "Mobil", "Motor"];
  return (
    <section id="armada" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            index="01"
            kicker="Armada"
            title="Mau sewa apa?"
            sub="Mobil buat rombongan, motor buat berdua atau sendiri. Semua harga per hari dan sudah final — yang Anda bayar ya angka itu."
          />
          <div className="flex border border-ink">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-4 py-2 font-mono text-xs font-semibold tracking-[0.15em] uppercase transition-colors ${
                  filter === f ? "bg-ink text-paper" : "bg-transparent text-ink hover:bg-cream"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
        <p className="mt-8 font-mono text-xs tracking-wide text-smoke">
          Butuh unit lain, sewa mingguan, atau bulanan? Tarifnya lebih murah. Tanya saja lewat
          WhatsApp.
        </p>
      </div>
    </section>
  );
}

function Included() {
  return (
    <section id="dapat" className="scroll-mt-16 border-y border-line bg-cream/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead
            index="02"
            kicker="Selalu termasuk"
            title="Yang selalu Anda dapat."
            sub="Di semua unit, di semua harga. Tidak perlu upgrade paket cuma buat dapat helm bersih."
          />
          <figure className="mt-10 hidden border border-ink lg:block">
            <img
              src={IMAGES.gate}
              alt="Gerbang pura di Bali"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="border-t border-ink px-4 py-3 font-mono text-[11px] tracking-[0.15em] text-smoke uppercase">
              Gerbang Handara, salah satu rute favorit penyewa kami
            </figcaption>
          </figure>
        </div>
        <ul className="lg:col-span-7">
          {INCLUDED.map((item) => (
            <li key={item.title} className="flex gap-4 border-b border-line py-6 first:pt-0">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center bg-signal text-white">
                <CheckIcon />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-1.5 leading-relaxed text-smoke">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section id="cara-sewa" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead
          index="03"
          kicker="Cara sewa"
          title="Begini perjalanannya."
          sub="Dari chat pertama sampai deposit kembali, semuanya lewat WhatsApp. Tidak ada formulir panjang, tidak ada antre di kantor rental."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex flex-col border border-line bg-white p-6">
              <span className="step-number font-display text-6xl font-black">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-xl leading-snug font-extrabold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 font-mono text-[11px] font-semibold tracking-[0.15em] text-signal uppercase">
                {step.duration}
              </p>
              <p className="mt-3 flex-1 leading-relaxed text-smoke">{step.text}</p>
              <p className="mt-5 border-t border-line pt-4 text-sm">
                <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-smoke uppercase">
                  Bagian Anda:{" "}
                </span>
                {step.yourPart}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const AVATAR_BG = ["bg-ink", "bg-palm", "bg-signal"];

function Testimonials() {
  return (
    <section id="testimoni" className="scroll-mt-16 border-y border-line bg-cream/60">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead
          index="04"
          kicker="Testimoni"
          title="Kata yang sudah sewa."
          sub="Kami biarkan mereka yang cerita."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.name} className="flex flex-col border border-line bg-paper p-7">
              <span className="font-display text-5xl leading-none font-black text-signal">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-[17px] leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-extrabold text-white ${AVATAR_BG[i % AVATAR_BG.length]}`}
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block font-display font-bold">{t.name}</span>
                  <span className="block font-mono text-[11px] tracking-wider text-smoke uppercase">
                    {t.origin} · {t.detail}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead
              index="05"
              kicker="FAQ"
              title="Yang biasanya ditanyakan."
            />
            <p className="mt-4 leading-relaxed text-smoke">
              Pertanyaan lain?{" "}
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-ink underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
              >
                WhatsApp saja
              </a>
              , kami balas seadanya juga tidak apa-apa.
            </p>
          </div>
          <div className="lg:col-span-8">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.question} className="border-t border-line last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-lg font-bold tracking-tight md:text-xl">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center border font-mono text-lg ${
                        isOpen ? "border-signal bg-signal text-white" : "border-line text-ink"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="max-w-3xl pb-6 leading-relaxed text-smoke">{faq.answer}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-signal uppercase">
            Terakhir
          </p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-balance md:text-6xl">
            Ceritakan saja kebutuhan Anda.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/70">
            Mau keliling Bali bawa keluarga besar, atau motoran santai ke Ubud berdua? Tulis
            seadanya lewat WhatsApp, kami balas dengan saran unit dan harga finalnya. Tidak jadi
            sewa juga tidak apa-apa.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-signal px-8 py-4 font-display text-base font-bold text-white transition-colors hover:bg-signal-dark"
            >
              <ChatIcon />
              Chat {BUSINESS.whatsappDisplay}
            </a>
            <p className="font-mono text-xs leading-relaxed tracking-wide text-paper/50">
              Dibalas ±15 menit pada jam kerja
              <br />
              {BUSINESS.workHours} · tulis seadanya
            </p>
          </div>
        </div>
        <figure className="hidden border border-paper/25 lg:col-span-5 lg:block">
          <img
            src={IMAGES.terrace}
            alt="Terasering sawah di Ubud, Bali"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <figcaption className="border-t border-paper/25 px-4 py-3 font-mono text-[11px] tracking-[0.15em] text-paper/60 uppercase">
            Terasering Tegalalang, 20 menit dari pusat Ubud
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-paper/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8">
        <p className="font-display text-base font-black tracking-tight text-paper">
          ZEE<span className="text-signal">RENTAL</span>
          <span className="ml-2 font-sans text-sm font-normal text-paper/60">
            · {BUSINESS.tagline}
          </span>
        </p>
        <nav className="flex flex-wrap gap-6 font-mono text-[11px] tracking-[0.2em] uppercase">
          <a href="#armada" className="transition-colors hover:text-paper">
            Armada
          </a>
          <a href="#cara-sewa" className="transition-colors hover:text-paper">
            Cara sewa
          </a>
          <a href="#faq" className="transition-colors hover:text-paper">
            FAQ
          </a>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-paper"
          >
            WhatsApp
          </a>
        </nav>
        <p className="font-mono text-[11px] tracking-wider">
          © 2026 {BUSINESS.name} · {BUSINESS.city}
        </p>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Fleet />
        <Included />
        <Steps />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
