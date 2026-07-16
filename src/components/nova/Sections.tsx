import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Camera, Video, Moon, Sparkles, Cpu, Battery, Zap, Snowflake, Languages, FileText, Bot, Image as ImageIcon, Gauge, Play, ChevronDown, Check, ArrowRight, Star, Instagram, Twitter, Youtube, Github } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import designImg from "@/assets/design-detail.jpg";
import cameraImg from "@/assets/camera-night.jpg";
import chipImg from "@/assets/chip.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import heroImg from "@/assets/nova-hero.jpg";

/* ---------- DESIGN ---------- */
export function DesignSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  return (
    <section id="design" ref={ref} className="relative overflow-hidden py-32 sm:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <Eyebrow>Design</Eyebrow>
            <Reveal delay={0.05}>
              <h2 className="text-display text-5xl text-ink sm:text-7xl">
                Sculpté dans<br />la lumière.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-lg text-lg text-ink-soft">
                Un châssis en aluminium recyclé usiné à 0.02 mm près. Un verre céramique mat qui absorbe la lumière plutôt que de la refléter. Nova One tient dans la main comme une évidence.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-line pt-8">
              {[
                { k: "6.4", u: "mm", l: "Épaisseur" },
                { k: "168", u: "g", l: "Poids" },
                { k: "100", u: "%", l: "Recyclé" },
              ].map((s) => (
                <Reveal key={s.l} delay={0.1}>
                  <div>
                    <div className="text-display text-3xl text-ink">
                      {s.k}<span className="text-mute text-lg font-normal">{s.u}</span>
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-mute">{s.l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <motion.div style={{ y }} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink shadow-elev">
              <img src={designImg} alt="Détail titane" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Aerograde Titanium</p>
                <p className="mt-2 text-2xl font-medium">Un seul bloc. Zéro compromis.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CAMERA ---------- */
export function CameraSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <section id="camera" ref={ref} className="relative">
      <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <motion.div style={{ y: yImg, scale }} className="absolute inset-0 -m-20">
          <img src={cameraImg} alt="Photo de nuit Nova One" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-16 text-white">
          <Eyebrow>Appareil Photo</Eyebrow>
          <Reveal>
            <h2 className="text-display max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
              La nuit devient<br />une matière première.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Camera, t: "108 MP", d: "Capteur principal 1 pouce" },
            { icon: Moon, t: "Night+", d: "Vision nocturne assistée par IA" },
            { icon: Video, t: "8K · 60fps", d: "Vidéo Dolby Vision HDR" },
            { icon: Sparkles, t: "Neural ISP", d: "Traitement image en temps réel" },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 0.08}>
              <div className="group relative h-full rounded-3xl border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ink/30 hover:shadow-elev">
                <f.icon className="h-6 w-6 text-glacier" strokeWidth={1.5} />
                <p className="mt-6 text-display text-3xl text-ink">{f.t}</p>
                <p className="mt-2 text-sm text-ink-soft">{f.d}</p>
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity group-hover:opacity-100" style={{ boxShadow: "inset 0 0 0 1px oklch(0.62 0.19 250 / 0.3)" }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PERFORMANCE ---------- */
function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>;
}

export function PerfSection() {
  return (
    <section id="perf" className="relative overflow-hidden bg-ink py-32 text-white sm:py-48">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40" style={{ background: "radial-gradient(circle, oklch(0.62 0.19 250 / 0.4), transparent 60%)" }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-[11px] font-medium tracking-[0.3em] text-glacier uppercase">Nova X1</p>
          <Reveal>
            <h2 className="text-display mx-auto mt-6 max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
              La puce la plus rapide<br />jamais conçue chez Nova.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-xl text-lg text-white/60">
              Gravure 2 nm. 16 cœurs. Un Neural Engine capable de 45 trillions d'opérations par seconde.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-24 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Zap, k: 45, s: "T", l: "Ops / seconde", dec: 0 },
            { icon: Cpu, k: 2, s: " nm", l: "Gravure", dec: 0 },
            { icon: Battery, k: 36, s: " h", l: "Autonomie vidéo", dec: 0 },
            { icon: Snowflake, k: 2.5, s: "×", l: "Refroidissement", dec: 1 },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.1}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
                <s.icon className="h-5 w-5 text-glacier" strokeWidth={1.5} />
                <div className="mt-8 text-display text-5xl">
                  <Counter to={s.k} suffix={s.s} decimals={s.dec} />
                </div>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/50">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal>
            <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-3xl border border-white/10">
              <img src={chipImg} alt="Nova X1" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs uppercase tracking-[0.3em] text-glacier">Nova X1 · Bionic Architecture</p>
                <p className="mt-2 text-2xl font-medium">Silicium repensé, énergie maîtrisée.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- AI ---------- */
export function AISection() {
  const features = [
    { icon: Languages, t: "Traduction instantanée", d: "48 langues, en direct, dans vos écouteurs." },
    { icon: FileText, t: "Résumé automatique", d: "Vos e-mails, notes et documents synthétisés." },
    { icon: Bot, t: "Assistant intelligent", d: "Anticipe, propose, agit à votre place." },
    { icon: ImageIcon, t: "Génération d'images", d: "Créez visuellement, sans quitter la conversation." },
    { icon: Gauge, t: "Optimisation continue", d: "L'appareil apprend et devient plus efficace." },
  ];
  return (
    <section id="ai" className="relative overflow-hidden py-32 sm:py-48">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[oklch(0.97_0.01_240)]" />
        <div className="absolute left-[10%] top-1/3 h-[500px] w-[500px] rounded-full opacity-40 animate-drift" style={{ background: "radial-gradient(circle, oklch(0.85 0.09 240 / 0.7), transparent 60%)" }} />
        <div className="absolute right-[5%] top-2/3 h-[400px] w-[400px] rounded-full opacity-30 animate-float" style={{ background: "radial-gradient(circle, oklch(0.88 0.06 300 / 0.7), transparent 60%)" }} />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Nova Intelligence</Eyebrow>
          <Reveal>
            <h2 className="text-display text-5xl text-ink sm:text-7xl lg:text-8xl">
              Une intelligence<br />qui vous appartient.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-ink-soft">
              Traitée entièrement sur l'appareil. Aucune donnée ne quitte votre Nova One. La confidentialité comme point de départ, pas comme option.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <div className="group relative h-full min-h-[400px] overflow-hidden rounded-3xl border border-line bg-white p-10">
              <div className="absolute inset-0 bg-glacier-halo opacity-60" />
              <div className="relative">
                <Sparkles className="h-6 w-6 text-glacier" strokeWidth={1.5} />
                <h3 className="text-display mt-8 text-4xl text-ink sm:text-5xl">Comprend le contexte.<br />Répond à vos besoins.</h3>
                <p className="mt-6 max-w-md text-ink-soft">Nova Intelligence analyse ce que vous voyez, entendez et écrivez pour anticiper la prochaine action utile.</p>
                <div className="mt-10 flex flex-wrap gap-2">
                  {["Résume ce PDF", "Traduis en japonais", "Trouve ma dernière photo à Rome", "Écris un mot d'excuses"].map((p) => (
                    <span key={p} className="rounded-full glass px-4 py-2 text-sm text-ink-soft">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          {features.slice(0, 4).map((f, i) => (
            <Reveal key={f.t} delay={i * 0.05}>
              <div className="group h-full rounded-3xl border border-line bg-white/60 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white hover:shadow-elev">
                <f.icon className="h-5 w-5 text-glacier" strokeWidth={1.5} />
                <p className="mt-6 font-medium text-ink">{f.t}</p>
                <p className="mt-1 text-sm text-ink-soft">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
export function GallerySection() {
  const images = [
    { src: g1, alt: "Métal liquide", cls: "row-span-2" },
    { src: g2, alt: "Architecture", cls: "" },
    { src: g3, alt: "Portrait", cls: "row-span-2" },
    { src: g4, alt: "Montagnes", cls: "" },
  ];
  return (
    <section id="gallery" className="relative py-32 sm:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Galerie</Eyebrow>
            <Reveal>
              <h2 className="text-display max-w-2xl text-5xl text-ink sm:text-7xl">
                Capturé avec Nova One.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-ink-soft">Des créateurs du monde entier ont testé Nova One en avant-première. Voici ce qu'ils ont vu.</p>
          </Reveal>
        </div>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4">
          {images.map((im, i) => (
            <Reveal key={i} delay={i * 0.08} className={im.cls}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-ink">
                <img src={im.src} alt={im.alt} loading="lazy" className="h-full w-full object-cover transition-all duration-[1400ms] group-hover:scale-110 group-hover:brightness-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- VIDEO ---------- */
export function VideoSection() {
  return (
    <section id="video" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="group relative aspect-video overflow-hidden rounded-[2rem] bg-ink">
            <img src={heroImg} alt="Présentation Nova One" loading="lazy" className="h-full w-full object-cover opacity-70 transition-transform duration-[1600ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            <div className="absolute inset-0 grid place-items-center">
              <button aria-label="Lire la vidéo" className="group/btn relative grid h-24 w-24 place-items-center rounded-full bg-white/90 backdrop-blur-sm transition-all hover:scale-110 sm:h-32 sm:w-32">
                <div className="absolute inset-0 rounded-full bg-white/40 opacity-0 blur-2xl transition-opacity group-hover/btn:opacity-100" />
                <div className="absolute inset-[-8px] rounded-full border border-white/30 opacity-70 animate-ping" />
                <Play className="relative h-8 w-8 translate-x-0.5 fill-ink text-ink sm:h-10 sm:w-10" />
              </button>
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Keynote · Nova One</p>
              <p className="mt-2 text-2xl font-medium sm:text-3xl">Regardez la présentation intégrale — 12 min.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
export function TestimonialsSection() {
  const items = [
    { q: "Le premier téléphone qui disparaît vraiment dans la main. Un objet de désir absolu.", a: "Léa Martin", r: "Design Editor, MONO" },
    { q: "La puce X1 change les règles. J'ai monté un court-métrage entier depuis Nova One.", a: "Yassine Bakri", r: "Réalisateur" },
    { q: "En photo de nuit, il fait ce que mon reflex faisait il y a cinq ans. En mieux.", a: "Anna Reeves", r: "Photojournaliste" },
    { q: "Nova Intelligence est enfin une IA qui respecte ce que je suis en train de faire.", a: "Théo Vidal", r: "Développeur" },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [items.length]);
  return (
    <section className="relative overflow-hidden bg-[oklch(0.97_0.01_240)] py-32 sm:py-48">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Eyebrow>Ils l'ont essayé</Eyebrow>
        <div className="relative min-h-[280px]">
          {items.map((t, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : 20, filter: i === idx ? "blur(0px)" : "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute inset-0 ${i === idx ? "pointer-events-auto" : "pointer-events-none"}`}
            >
              <div className="flex justify-center gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-glacier text-glacier" />
                ))}
              </div>
              <p className="text-display mt-8 text-3xl text-ink sm:text-4xl">"{t.q}"</p>
              <div className="mt-8">
                <p className="font-medium text-ink">{t.a}</p>
                <p className="text-sm text-ink-soft">{t.r}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Témoignage ${idx + 1}`} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-ink" : "w-1.5 bg-ink/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
export function PricingSection() {
  const tiers = [
    { name: "Nova One", price: "999", features: ["Écran 6.1\" ProMotion", "128 Go stockage", "Triple capteur 48 MP", "Autonomie 24 h"] },
    { name: "Nova One Plus", price: "1 299", features: ["Écran 6.7\" ProMotion", "256 Go stockage", "Capteur 108 MP", "Autonomie 30 h", "Nova Intelligence Pro"], featured: true },
    { name: "Nova One Ultra", price: "1 699", features: ["Écran 6.9\" ProMotion XDR", "1 To stockage", "Capteur 108 MP · Périscope 10×", "Autonomie 36 h", "Titane classe aéronautique", "Support prioritaire"] },
  ];
  return (
    <section id="pricing" className="relative py-32 sm:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Eyebrow>Tarifs</Eyebrow>
          <Reveal>
            <h2 className="text-display text-5xl text-ink sm:text-7xl">Choisissez votre Nova.</h2>
          </Reveal>
        </div>
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={`group relative flex h-full flex-col rounded-3xl border p-10 transition-all duration-500 hover:-translate-y-2 ${
                  t.featured
                    ? "border-transparent bg-ink text-white shadow-elev lg:scale-[1.03]"
                    : "border-line bg-white hover:shadow-elev"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-glacier px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white">
                    Recommandé
                  </span>
                )}
                <p className={`text-sm ${t.featured ? "text-white/60" : "text-ink-soft"}`}>{t.name}</p>
                <div className="mt-4 text-display text-5xl">
                  <span className={t.featured ? "text-white" : "text-ink"}>{t.price}</span>
                  <span className={`ml-1 text-lg font-normal ${t.featured ? "text-white/50" : "text-mute"}`}>€</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${t.featured ? "text-white/80" : "text-ink-soft"}`}>
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-glacier-soft" : "text-glacier"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:scale-[1.02] ${
                    t.featured ? "bg-white text-ink hover:shadow-glow" : "bg-ink text-white hover:shadow-glow"
                  }`}
                >
                  Précommander <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-8 text-left"
      >
        <span className="text-lg font-medium text-ink sm:text-xl">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
          <ChevronDown className="h-5 w-5 text-ink-soft" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-8 pr-10 text-ink-soft">{a}</p>
      </motion.div>
    </div>
  );
}

export function FaqSection() {
  const faqs = [
    { q: "Quand Nova One sera-t-il disponible ?", a: "Les livraisons débutent le 14 mars. Les précommandes ouvrent dès aujourd'hui pour une livraison prioritaire." },
    { q: "Quelle est la garantie ?", a: "Chaque Nova One est garanti deux ans, avec un an de Nova Care+ offert incluant le remplacement d'écran." },
    { q: "Nova Intelligence fonctionne-t-il hors ligne ?", a: "Oui. L'ensemble du moteur d'IA s'exécute localement sur la puce Nova X1, sans connexion internet requise." },
    { q: "Puis-je reprendre mon ancien téléphone ?", a: "Notre programme Nova Trade reprend votre appareil actuel et déduit sa valeur immédiatement de votre commande." },
    { q: "Compatible avec mes accessoires actuels ?", a: "Nova One utilise USB-C 4 et est compatible avec la charge sans fil Qi2 jusqu'à 25 W." },
  ];
  return (
    <section className="py-32 sm:py-48">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <Eyebrow>Questions</Eyebrow>
          <Reveal>
            <h2 className="text-display text-5xl text-ink sm:text-6xl">Tout ce qu'il faut savoir.</h2>
          </Reveal>
        </div>
        <div className="mt-16">
          {faqs.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function FloatingInput({ label, type = "text", area = false, id }: { label: string; type?: string; area?: boolean; id: string }) {
  const [val, setVal] = useState("");
  const active = val.length > 0;
  const cls = "peer w-full border-0 border-b border-white/20 bg-transparent px-1 pb-2 pt-6 text-white outline-none transition-colors focus:border-glacier";
  return (
    <div className="relative">
      {area ? (
        <textarea id={id} rows={4} value={val} onChange={(e) => setVal(e.target.value)} className={cls} />
      ) : (
        <input id={id} type={type} value={val} onChange={(e) => setVal(e.target.value)} className={cls} />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-1 origin-left transition-all duration-300 ${
          active ? "top-1 scale-75 text-glacier" : "top-6 text-white/50 peer-focus:top-1 peer-focus:scale-75 peer-focus:text-glacier"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-32 text-white sm:py-48">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40" style={{ background: "radial-gradient(circle, oklch(0.62 0.19 250 / 0.5), transparent 60%)" }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h2 className="text-display text-5xl sm:text-6xl">Parlons de<br />l'avenir.</h2>
            <p className="mt-6 max-w-md text-white/60">Une question sur Nova One, un partenariat, une commande entreprise ? Notre équipe vous répond en 24 h.</p>
            <div className="mt-12 space-y-4 text-sm text-white/70">
              <p>hello@nova.example</p>
              <p>+33 1 84 88 42 00</p>
              <p>10 rue de l'Innovation, Paris</p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
            <div className="grid gap-8 sm:grid-cols-2">
              <FloatingInput id="fn" label="Prénom" />
              <FloatingInput id="ln" label="Nom" />
            </div>
            <FloatingInput id="em" label="Email" type="email" />
            <FloatingInput id="ms" label="Message" area />
            <button className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-ink transition-all hover:scale-[1.03] hover:shadow-glow">
              Envoyer
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
export function Footer() {
  return (
    <footer className="border-t border-line bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <p className="text-display text-2xl tracking-[-0.06em] text-ink">NOVA</p>
            <p className="mt-4 max-w-xs text-sm text-ink-soft">L'innovation prend une nouvelle forme.</p>
          </div>
          {[
            { h: "Produit", l: ["Nova One", "Nova One Plus", "Nova One Ultra", "Accessoires"] },
            { h: "Support", l: ["Aide", "Contact", "Nova Care+", "Trade-in"] },
            { h: "Entreprise", l: ["À propos", "Presse", "Carrières", "Développeurs"] },
          ].map((c) => (
            <div key={c.h}>
              <p className="text-sm font-medium text-ink">{c.h}</p>
              <ul className="mt-4 space-y-3">
                {c.l.map((x) => (
                  <li key={x}>
                    <a href="#" className="text-sm text-ink-soft transition-colors hover:text-ink">{x}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-8 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-mute">© 2026 Nova. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Youtube, Github].map((I, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft transition-all hover:-translate-y-0.5 hover:border-ink/40 hover:text-ink">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-sm items-center gap-2 rounded-full border border-line pl-4 pr-1 py-1">
            <input type="email" placeholder="Newsletter" className="flex-1 bg-transparent py-2 text-sm text-ink outline-none placeholder:text-mute" />
            <button className="rounded-full bg-ink px-4 py-2 text-xs text-white transition-all hover:shadow-glow">S'inscrire</button>
          </form>
        </div>
      </div>
    </footer>
  );
}