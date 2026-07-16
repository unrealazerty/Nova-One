import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowRight, Play, MousePointer2 } from "lucide-react";
import heroImg from "@/assets/nova-hero.jpg";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 80, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 80, damping: 15 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  function onMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-dvh items-center justify-center overflow-hidden pt-24"
    >
      {/* Animated backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[oklch(0.97_0.01_240)]" />
        <motion.div
          className="absolute left-1/2 top-1/3 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 animate-drift"
          style={{ background: "radial-gradient(circle, oklch(0.85 0.09 240 / 0.55), transparent 60%)" }}
        />
        <motion.div
          className="absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full opacity-50 animate-float"
          style={{ background: "radial-gradient(circle, oklch(0.9 0.05 280 / 0.5), transparent 60%)" }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[-10%] h-[700px] w-[700px] rounded-full opacity-40 animate-drift"
          style={{ background: "radial-gradient(circle, oklch(0.88 0.05 200 / 0.5), transparent 65%)", animationDelay: "-6s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(oklch(0.14 0.01 260) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <motion.div style={{ y, opacity, scale }} className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-widest text-ink-soft"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-glacier shadow-glow" />
          NOUVELLE GÉNÉRATION · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-display text-[clamp(4rem,14vw,12rem)] text-ink"
        >
          Nova One
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft sm:text-xl"
        >
          Plus qu'un smartphone. Une nouvelle façon d'imaginer la technologie.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#design"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-glow"
          >
            Découvrir
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#video"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/40 px-7 py-3.5 text-sm font-medium text-ink backdrop-blur-md transition-all hover:scale-[1.03] hover:border-ink/40"
          >
            <Play className="h-4 w-4 fill-current" />
            Voir la présentation
          </a>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9, filter: "blur(30px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1400 }}
          className="relative mx-auto mt-16 max-w-3xl"
        >
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <div className="absolute inset-x-10 bottom-0 h-10 rounded-full bg-ink/20 blur-3xl" />
            <img
              src={heroImg}
              alt="Nova One smartphone"
              width={1600}
              height={1600}
              className="relative mx-auto w-full max-w-2xl drop-shadow-[0_40px_60px_rgba(0,0,0,0.15)]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-medium tracking-[0.3em] text-ink-soft"
      >
        <MousePointer2 className="h-3.5 w-3.5" />
        <span>SCROLL</span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-8 w-px bg-ink/40"
        />
      </motion.div>
    </section>
  );
}