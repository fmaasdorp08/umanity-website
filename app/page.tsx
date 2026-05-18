"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Sparkles, HandHeart, Leaf, Shield, Star, CalendarDays, Mic2, Store, Landmark, Smile, Globe2, Menu } from "lucide-react";

const pillars = [
  { title: 'Hope & Rebirth', icon: Sparkles, text: 'Creating space for new beginnings, renewed courage, and practical restoration.' },
  { title: 'Light & Compassion', icon: Heart, text: 'Leading with tenderness, dignity, and a deep commitment to human care.' },
  { title: 'Safety & Warmth', icon: Shield, text: 'Helping people feel held, protected, and emotionally steady again.' },
  { title: 'Belonging & Family', icon: Users, text: 'Building community where every person feels seen, valued, and connected.' },
  { title: 'Healing & Restoration', icon: Leaf, text: 'Supporting emotional wellness, recovery, and the rebuilding of life.' },
  { title: 'Unity & Purpose', icon: Globe2, text: 'Mobilizing people, partners, and neighborhoods around shared dignity.' },
];

const initiatives = [
  { title: 'Community Events', icon: CalendarDays, desc: 'Gatherings that create joy, trust, and meaningful shared experience.' },
  { title: 'Food Drives', icon: HandHeart, desc: 'Dignified support for families facing urgent need and uncertainty.' },
  { title: 'Women Empowerment', icon: Smile, desc: 'Programs that strengthen voice, confidence, skills, and opportunity.' },
  { title: 'Mentorship', icon: Mic2, desc: 'Guidance for youth and adults building a stronger next chapter.' },
  { title: 'Small Business Support', icon: Store, desc: 'Local economic support that helps communities grow from within.' },
  { title: 'Emotional Wellness', icon: Heart, desc: 'Healing-centered spaces that restore hope, calm, and resilience.' },
  { title: 'Family & Youth', icon: Landmark, desc: 'Interventions that protect, equip, and nurture the family unit.' },
];

const stories = [
  { quote: 'uManity helped our family feel human again. The care was practical, but the dignity was what we felt most.', name: 'Community Member', role: 'Family Support Recipient' },
  { quote: 'In a world that can feel cold, this movement brings warmth, presence, and real restoration.', name: 'Volunteer Partner', role: 'Local Advocate' },
  { quote: 'They do not only meet needs. They restore belonging, which changes everything.', name: 'Program Beneficiary', role: 'Mentorship Participant' },
];

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } as const;

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#f6f1e8] text-[#2d2a26]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(145,120,67,0.18),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(48,88,63,0.16),_transparent_30%),linear-gradient(to_bottom,#fbf8f2,#f4efe6)]" />
      <header className="sticky top-0 z-50 border-b border-white/40 bg-[#f6f1e8]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/umanity-logo.svg" alt="uManity logo" className="h-12 w-auto object-contain" />
          </div>
          <nav className="hidden items-center gap-8 text-sm text-[#4d463f] md:flex">
            <a href="#about">About</a><a href="#impact">Impact</a><a href="#initiatives">Initiatives</a><a href="#support">Support</a><a href="#stories">Stories</a>
          </nav>
          <button className="rounded-full border border-[#b8aa8a]/50 bg-white/60 px-4 py-2 text-sm shadow-sm md:hidden"><Menu size={18} /></button>
        </div>
      </header>
      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,18,16,0.24),rgba(20,18,16,0.52)),url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(20,18,16,0.22)_100%)]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 py-16 lg:px-8 lg:py-20">
          <motion.div className="max-w-3xl text-white" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] backdrop-blur-md">Putting U back into Humanity</p>
            <h1 className="font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">Restoring Humanity Through Hope.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86">A humanitarian movement helping communities heal, rebuild, and rise together through compassion, practical support, and unity.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a className="rounded-full bg-[#d2b77b] px-7 py-4 font-medium text-[#1f1a15] transition hover:translate-y-[-2px]" href="#support">Join The Movement <ArrowRight className="inline-block" size={18} /></a>
              <a className="rounded-full border border-white/30 bg-white/10 px-7 py-4 font-medium text-white backdrop-blur-md transition hover:bg-white/15" href="#support">Support Our Mission</a>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <motion.div {...fadeUp} className="rounded-[2rem] border border-white/60 bg-white/55 p-8 shadow-[0_30px_90px_rgba(68,55,35,0.08)] backdrop-blur-xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#7b6d5a]">About uManity</p>
          <h2 className="font-serif text-4xl leading-tight text-[#201c18]">A movement built to restore dignity, belonging, and practical hope.</h2>
          <p className="mt-5 text-lg leading-8 text-[#544c44]">uManity exists to meet human need with warmth and precision. We support families, empower women, mentor youth, and create spaces where healing can happen with dignity.</p>
          <p className="mt-4 text-lg leading-8 text-[#544c44]">Our approach is simple: show up with compassion, listen deeply, and turn care into action that communities can feel immediately.</p>
        </motion.div>
        <div className="grid gap-5">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-64 rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center shadow-2xl" />
          <div className="grid gap-5 sm:grid-cols-2">
            <motion.div {...fadeUp} className="rounded-[2rem] bg-[#24382f] p-6 text-white shadow-xl"><p className="text-sm uppercase tracking-[0.3em] text-white/60">Core Belief</p><p className="mt-4 font-serif text-3xl">Compassion becomes credible when it is felt.</p></motion.div>
            <motion.div {...fadeUp} className="rounded-[2rem] border border-[#d8c8a5] bg-[#f0e6d3] p-6"><p className="text-sm uppercase tracking-[0.3em] text-[#7c6d54]">Promise</p><p className="mt-4 text-lg leading-7 text-[#3d342b]">We build trust through warmth, consistency, and meaningful community response.</p></motion.div>
          </div>
        </div>
      </section>
      <section id="impact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-2xl"><p className="text-xs uppercase tracking-[0.35em] text-[#7b6d5a]">Impact pillars</p><h2 className="mt-3 font-serif text-4xl text-[#201c18]">Six pillars that shape every act of care.</h2></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map(({ title, icon: Icon, text }) => (
            <motion.div key={title} {...fadeUp} whileHover={{ y: -6 }} className="group rounded-[1.8rem] border border-white/70 bg-white/60 p-6 shadow-[0_20px_60px_rgba(48,38,20,0.07)] backdrop-blur-xl transition hover:shadow-[0_25px_80px_rgba(48,38,20,0.12)]"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe2c8] text-[#51412d]"><Icon size={22} /></div><h3 className="mt-5 font-serif text-2xl">{title}</h3><p className="mt-3 leading-7 text-[#5c534a]">{text}</p></motion.div>
          ))}
        </div>
      </section>
      <section id="initiatives" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div {...fadeUp} className="rounded-[2rem] bg-[#25372f] p-8 text-white shadow-2xl"><p className="text-xs uppercase tracking-[0.35em] text-white/50">Community initiatives</p><h2 className="mt-3 font-serif text-4xl">Programs designed to make care tangible.</h2><p className="mt-4 max-w-xl text-white/78">Each initiative is built to feel personal, respectful, and rooted in the realities of South African communities.</p></motion.div>
          <div className="rounded-[2rem] border border-white/60 bg-white/60 p-8 backdrop-blur-xl"><div className="grid gap-4 sm:grid-cols-2">{initiatives.map(({ title, icon: Icon, desc }) => (<motion.div key={title} whileHover={{ y: -4 }} className="rounded-3xl bg-[#faf6ef] p-5 transition hover:bg-white"><Icon className="text-[#7d6a45]" size={22} /><h3 className="mt-4 font-medium text-[#221d19]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#5c534a]">{desc}</p></motion.div>))}</div></div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div {...fadeUp} className="rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center p-8 shadow-2xl"><div className="rounded-[1.6rem] bg-black/35 p-6 text-white backdrop-blur-sm"><p className="text-xs uppercase tracking-[0.35em] text-white/65">Community reawakening event</p><h2 className="mt-3 font-serif text-4xl">A celebration of unity, warmth, and shared restoration.</h2><div className="mt-6 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-white/12 p-4"><p className="text-white/60">Event Date</p><p className="mt-1 text-lg">To be announced</p></div><div className="rounded-2xl bg-white/12 p-4"><p className="text-white/60">Event Location</p><p className="mt-1 text-lg">South Africa</p></div></div><div className="mt-5 rounded-2xl bg-white/12 p-4 text-sm leading-7 text-white/82">Community meals, local markets, music, mentorship touchpoints, family support, and moments of collective care.</div></div></motion.div>
        <motion.div id="support" {...fadeUp} className="rounded-[2rem] border border-white/60 bg-white/65 p-8 backdrop-blur-xl"><p className="text-xs uppercase tracking-[0.35em] text-[#7b6d5a]">Support pathways</p><h2 className="mt-3 font-serif text-4xl text-[#201c18]">Support with dignity, not pressure.</h2><p className="mt-4 text-lg leading-8 text-[#544c44]">Donation, sponsorship, volunteering, and partnerships are presented as invitations to participate in meaningful restoration.</p><div className="mt-8 grid gap-4">{['Donate with intention','Become a volunteer','Partner as a sponsor'].map((item) => (<a key={item} href="#" className="flex items-center justify-between rounded-2xl border border-[#e0d3bb] bg-[#faf6ef] px-5 py-4 transition hover:bg-white"><span className="font-medium text-[#251f19]">{item}</span><ArrowRight size={18} className="text-[#8a744b]" /></a>))}</div><div className="mt-6 grid gap-3 sm:grid-cols-3 text-sm text-[#5c534a]"><div className="rounded-2xl bg-[#efe4cf] p-4">Transparent impact</div><div className="rounded-2xl bg-[#efe4cf] p-4">Sponsor-ready</div><div className="rounded-2xl bg-[#efe4cf] p-4">Community-first</div></div></motion.div>
      </section>
      <section id="stories" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-2xl"><p className="text-xs uppercase tracking-[0.35em] text-[#7b6d5a]">Stories</p><h2 className="mt-3 font-serif text-4xl text-[#201c18]">Real voices, told with care.</h2></div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">{stories.map((story) => (<motion.figure key={story.name} {...fadeUp} className="rounded-[1.8rem] border border-white/70 bg-white/60 p-7 shadow-[0_20px_60px_rgba(48,38,20,0.07)] backdrop-blur-xl"><div className="flex gap-1 text-[#c2a768]"><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /></div><blockquote className="mt-5 font-serif text-2xl leading-9 text-[#27211d]">“{story.quote}”</blockquote><figcaption className="mt-6 text-sm text-[#665d53]"><span className="font-medium text-[#251f19]">{story.name}</span> · {story.role}</figcaption></motion.figure>))}</div>
      </section>
      <footer className="border-t border-white/60 bg-[#f4ecdf]"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-3 lg:px-8"><div><img src="/umanity-logo.svg" alt="uManity logo" className="h-12 w-auto object-contain" /><p className="mt-3 max-w-sm text-sm leading-7 text-[#5f564c]">Putting U back into Humanity. A movement for compassion, healing, and belonging.</p></div><div className="text-sm text-[#5f564c]"><p className="font-medium text-[#26201a]">Contact</p><p className="mt-3">info@umanity.org.za</p><p>South Africa</p><p className="mt-4">NGO / NPC Registration details</p></div><div className="text-sm text-[#5f564c]"><p className="font-medium text-[#26201a]">Navigation</p><div className="mt-3 grid gap-2"><a href="#about">About</a><a href="#impact">Impact</a><a href="#support">Support</a><a href="#stories">Stories</a></div></div></div></footer>
    </main>
  );
}
