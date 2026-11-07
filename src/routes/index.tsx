import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import emblem from "@/assets/little-flower-emblem.png";
import campus from "@/assets/goa-school-campus.jpg";
import classroom from "@/assets/classroom-learning.jpg";
import activities from "@/assets/student-activities.jpg";
import { school } from "@/content/school";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Little Flower of Jesus High School | Calangute, Goa" },
      { name: "description", content: "Little Flower of Jesus High School in Calangute, Goa nurtures young minds through learning, character and duty." },
      { property: "og:title", content: "Little Flower of Jesus High School, Calangute" },
      { property: "og:description", content: "A nurturing school in Goa guided by the motto Duty First." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Home", "home"], ["About Us", "about"], ["Academics", "academics"], ["Facilities", "facilities"],
  ["Student Life", "student-life"], ["Gallery", "gallery"], ["News & Events", "news"],
  ["Admissions", "admissions"], ["Contact Us", "contact"],
];

function Eyebrow({ children }: { children: string }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold">{children}</p>;
}

function Index() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [...d.entries()].map(([k, v]) => `${k}: ${v}`).join("\n");
    window.location.href = `mailto:${school.contact.email}?subject=${encodeURIComponent("Admissions enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <img src={emblem} alt="Little Flower of Jesus High School emblem" width={56} height={56} className="h-14 w-14 shrink-0 object-contain" />
            <span className="min-w-0"><span className="block truncate font-display text-lg leading-tight">{school.name}</span><span className="block text-xs text-muted-foreground">{school.location}</span></span>
          </a>
          <div className="flex items-center gap-2">
            <Button asChild className="hidden rounded-full bg-gold px-5 text-gold-foreground hover:bg-gold/90 sm:inline-flex"><a href="#admissions">Admissions Enquiry</a></Button>
            <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</Button>
          </div>
        </div>
        <nav className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full z-50 max-h-[calc(100vh-5rem)] flex-col gap-1 overflow-y-auto border-b border-border bg-background px-5 pb-4 shadow-elegant xl:static xl:mx-auto xl:flex xl:max-h-none xl:max-w-7xl xl:flex-row xl:justify-center xl:overflow-visible xl:border-0 xl:pb-3 xl:shadow-none`}>
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground">{label}</a>)}
        </nav>
      </header>

      <main>
        <section id="home" className="relative min-h-screen overflow-hidden pt-32">
          <img src={campus} alt="Students walking through a sunny school campus in Goa" width={1712} height={1008} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-end px-5 pb-16 lg:px-8">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000 text-primary-foreground">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold-soft">Calangute · Goa · {school.motto}</p>
              <h1 className="font-display text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">Building Bright Futures Through Education</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/85">At Little Flower of Jesus High School, we nurture young minds, inspire curiosity and develop responsible individuals equipped to make a difference in the world.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-full bg-background text-foreground hover:bg-background/90"><a href="#about">Explore Our School <ArrowRight /></a></Button>
                <Button asChild size="lg" className="h-12 rounded-full bg-gold text-gold-foreground hover:bg-gold/90"><a href="#admissions">Admissions Enquiry</a></Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-32">
          <img src={classroom} alt="Teacher guiding students in a bright classroom" width={1200} height={912} loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-elegant" />
          <div className="self-center">
            <Eyebrow>Welcome</Eyebrow>
            <h2 className="font-display text-4xl leading-tight sm:text-6xl">Welcome to Little Flower of Jesus High School</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">A place for academic excellence, character development, discipline and responsibility — where holistic education grows in a supportive learning environment.</p>
            <blockquote className="mt-9 border-l-2 border-gold pl-6">
              <p className="font-display text-2xl">{school.principal.title}</p>
              <p className="mt-3 leading-7 text-muted-foreground">{school.principal.message}</p>
              <footer className="mt-4 text-sm font-semibold">— {school.principal.signOff}</footer>
            </blockquote>
          </div>
        </section>

        <section id="about" className="bg-primary py-24 text-primary-foreground lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div><Eyebrow>About Our School</Eyebrow><h2 className="font-display text-5xl leading-tight">Rooted in values. Ready for the world.</h2></div>
              <div className="grid gap-px overflow-hidden rounded-3xl bg-primary-foreground/15 sm:grid-cols-2">
                {[["Our History", "Little Flower of Jesus High School has served families in Calangute for generations, growing from a small parish school into a trusted name in Goan education."], ["Our Vision", "To nurture confident, compassionate and responsible individuals who carry the spirit of Duty First into every part of their lives."], ["Our Mission", "To provide a safe, disciplined and joyful learning environment where every child is encouraged to grow academically, spiritually and socially."], ["Our Philosophy", "We believe true education goes beyond textbooks — it is the shaping of character, conscience and community through faith, discipline and care."]].map(([t, d]) => <article key={t} className="bg-primary p-8"><h3 className="font-display text-2xl">{t}</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/70">{d}</p></article>)}
              </div>
            </div>
            <div className="mt-14 flex flex-col items-center gap-6 rounded-[2rem] bg-background p-8 text-center text-foreground sm:flex-row sm:text-left">
              <img src={emblem} alt="School emblem with motto Duty First" width={112} height={112} loading="lazy" className="h-28 w-28 object-contain" />
              <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Motto</p><p className="font-display text-5xl">Duty First</p></div>
            </div>
          </div>
        </section>

        <section id="academics" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Eyebrow>Academic Excellence</Eyebrow>
          <div className="grid gap-12 lg:grid-cols-2"><h2 className="font-display text-5xl leading-tight">Learning that shapes thoughtful, capable young people.</h2><p className="self-end text-lg leading-8 text-muted-foreground">Our learning environment brings together curiosity, care and steady guidance, both inside and beyond the classroom.</p></div>
          <div className="mt-14 grid border-t border-border md:grid-cols-5">
            {["Teaching and Learning", "Student Development", "Classroom Experiences", "Academic Activities", "Co-curricular Learning"].map((x, i) => <div key={x} className="border-b border-border py-7 md:border-r md:px-5 md:last:border-r-0"><span className="text-sm text-gold">0{i + 1}</span><h3 className="mt-8 font-display text-2xl">{x}</h3></div>)}
          </div>
        </section>

        <section id="student-life" className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.25fr_.75fr] lg:px-8">
            <img src={activities} alt="Students building a science and art model together" width={1200} height={912} loading="lazy" className="h-full min-h-96 w-full rounded-[2rem] object-cover" />
            <div className="self-center"><Eyebrow>Beyond Academics</Eyebrow><h2 className="font-display text-5xl leading-tight">Every talent deserves room to grow.</h2><ul className="mt-8 divide-y divide-border border-y border-border">{["Sports and Physical Education", "Cultural Activities", "Arts and Creativity", "Science and Innovation", "Competitions and Events"].map((x) => <li key={x} className="py-4 font-medium">{x}</li>)}</ul></div>
          </div>
        </section>

        <section id="facilities" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Eyebrow>School Facilities</Eyebrow><h2 className="max-w-3xl font-display text-5xl leading-tight">Spaces designed for focus, discovery and play.</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[["Classrooms", classroom, "Bright, well-ventilated rooms for focused learning"], ["Science Laboratories", activities, "Hands-on labs for physics, chemistry and biology"], ["Computer Laboratory", classroom, "Modern systems for computer literacy classes"], ["Library", classroom, "A quiet space stocked with books for every age"], ["Sports Facilities", campus, "Open grounds for sports and physical education"], ["School Campus", campus, "A safe, welcoming campus in the heart of Calangute"]].map(([t, img, d]) => <article key={t} className="group overflow-hidden rounded-3xl bg-card shadow-sm"><img src={img} alt={`${t} at Little Flower of Jesus High School`} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" /><div className="p-5"><h3 className="font-display text-xl">{t}</h3><span className="text-xs text-muted-foreground">{d}</span></div></article>)}
          </div>
        </section>

        <section id="gallery" className="px-5 pb-24 lg:px-8"><div className="mx-auto max-w-7xl"><Eyebrow>Student Life</Eyebrow><div className="columns-1 gap-5 sm:columns-2 lg:columns-3">{[campus, activities, classroom, activities, campus, classroom].map((img, i) => <img key={i} src={img} alt="Students taking part in school life at Little Flower of Jesus High School" loading="lazy" className={`mb-5 w-full break-inside-avoid rounded-3xl object-cover ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`} />)}</div></div></section>

        <section id="news" className="border-y border-border py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Eyebrow>News & Events</Eyebrow><h2 className="font-display text-5xl">From our school community</h2><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">{school.news.map((n) => <article key={n.tag} className="rounded-3xl border border-border p-6 transition hover:-translate-y-1 hover:shadow-elegant"><p className="text-xs font-semibold uppercase tracking-wider text-gold">{n.tag}</p><h3 className="mt-6 font-display text-xl">{n.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{n.text}</p><p className="mt-6 text-xs text-muted-foreground">{n.date}</p></article>)}</div></div></section>

        <section id="admissions" className="bg-primary py-24 text-primary-foreground lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8"><div><Eyebrow>Admissions</Eyebrow><h2 className="font-display text-5xl leading-tight sm:text-6xl">Your Child's Journey Towards a Brighter Future Starts Here.</h2><p className="mt-6 max-w-lg leading-7 text-primary-foreground/70">Send an enquiry and the school office can share admission details with you.</p></div>
          <form onSubmit={submit} className="grid gap-4 rounded-[2rem] bg-background p-6 text-foreground sm:grid-cols-2 sm:p-8">
            {[["Parent's Name", "text"], ["Student's Name", "text"], ["Contact Number", "tel"], ["Email", "email"]].map(([l, t]) => <label key={l} className="grid gap-2 text-sm font-medium">{l}<Input name={l} type={t} required className="h-11" /></label>)}
            <label className="grid gap-2 text-sm font-medium sm:col-span-2">Class Seeking Admission<Input name="Class Seeking Admission" required placeholder="Enter class" className="h-11" /></label>
            <label className="grid gap-2 text-sm font-medium sm:col-span-2">Message<Textarea name="Message" rows={4} /></label>
            <Button type="submit" className="h-12 rounded-full bg-gold text-gold-foreground hover:bg-gold/90 sm:col-span-2">Submit Enquiry</Button>
            {sent && <p role="status" className="text-sm text-muted-foreground sm:col-span-2">Your email app should open with your enquiry ready to send.</p>}
          </form></div></section>
      </main>

      <footer id="contact" className="bg-background py-16"><div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8"><div className="flex gap-4"><img src={emblem} alt="School emblem" width={80} height={80} loading="lazy" className="h-20 w-20 shrink-0 object-contain" /><div><p className="font-display text-2xl">{school.name}</p><p className="text-muted-foreground">Calangute, Goa</p></div></div><div className="grid content-start gap-2 text-sm">{nav.slice(1, 6).map(([l, id]) => <a key={id} href={`#${id}`} className="hover:text-gold">{l}</a>)}</div><address className="grid content-start gap-2 text-sm not-italic text-muted-foreground"><span>{school.contact.address}</span><a href={`tel:${school.contact.phone}`}>{school.contact.phone}</a><a href={`mailto:${school.contact.email}`}>{school.contact.email}</a><span>{school.contact.officeHours}</span><span className="flex gap-4 pt-2 text-foreground">{school.social.map((s) => <a key={s.label} href={s.href}>{s.label}</a>)}</span></address></div><p className="mx-auto mt-12 max-w-7xl px-5 text-xs text-muted-foreground lg:px-8">© {new Date().getFullYear()} {school.name}. All rights reserved.</p></footer>
    </div>
  );
}
