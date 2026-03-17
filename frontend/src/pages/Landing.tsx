import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { SearchBar } from "../components/ui/SearchBar";
import { SectionTitle } from "../components/ui/SectionTitle";
import { FeatureCard } from "../components/cards/FeatureCard";
import { ExperienceCard } from "../components/cards/ExperienceCard";

const features = [
  {
    icon: "public",
    iconColor: "primary" as const,
    title: "For Tourists",
    description:
      "Ask, discover, book. Our AI understands your preferences and connects you with authentic PCC experiences in your own language.",
    linkLabel: "Start exploring",
  },
  {
    icon: "upload_file",
    iconColor: "secondary" as const,
    title: "For Operators",
    description:
      "Register your farm in just 7 steps. Manage bookings, reach global markets, and grow your business with our easy-to-use platform.",
    linkLabel: "Become a partner",
  },
  {
    icon: "hub",
    iconColor: "accent" as const,
    title: "For the Territory",
    description:
      "100% local revenue. We support the Coffee Cultural Landscape community by keeping profits within the region and the families.",
    linkLabel: "Learn about PCC",
  },
];

const experiences = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARGwr7jVNyag9wjjjvOYp6znnZCGFivgZBiD2_ZR4z_TJDRQT3FfOakIZYccMwAV-WlaUSNSIagrSP2SvG-SHXjGouQQ43CiRmDwQJHKM3b5-6ncvnYZE0WfiygF4qphAtnVksG4x0hKTAfYjEQ0M5bhKmH-0l_63qqDks3MbkvZROw84TDthN_EwY3mrdFhmNfKSpd7-kJ3lK5W2_cmR0LAH2QLGeX_kfyueQr1MBuVu8TKCsrHidbP7cpPzi150KQjYNX3cAFjA",
    imageAlt: "Barista preparing specialty coffee in rural setting",
    rating: "4.9 (120)",
    badgeLabel: "Harvest Season",
    badgeVariant: "primary" as const,
    title: "Traditional Harvest Tour",
    location: "Quindío, Colombia",
    price: "$45/person",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNE7nAzRi97gdsfMUrDP_92ELW-R62oFLpFEATxo7bYNPUBpZbigw7eGQ52l03Mxjr4nwUqZXw7tiW0PmuZgPI-GBdiZok5b_giUxs8k3BjwVBl7UW2Qe33-VJX6UDj5aPDdZUaAemHXfszglIQbQQ1cxWrvQ4VWOiv8iPVxO3ZloPOfljaSs4l9gITowgzjYteltyQnBlyKT89z_eDTnZGRh729UMdVpho4jv_7rD55XRPYR9bISxe5u5fuzrbU23EXFDGEctlY4",
    imageAlt: "Coffee farm landscape with drying beans",
    rating: "5.0 (85)",
    badgeLabel: "Authentic Stay",
    badgeVariant: "secondary" as const,
    title: "Colonial Estate Lodging",
    location: "Salento",
    price: "$120/night",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCm59hKfmBxbBgSdDiE0WJ-5C6e1aG-alcJylAYP1nFAiV1zaQS6k_GBp6aD_pDPXsJu1ToDKVznXu5wOoBlbXGwmttBdbt25ofCLOVNLP5JlA-Nkak4dL0OVeBgfFOJFv4x4u74bGHcK1DswYFD5k9mW2ML-T_9xIhkYwvTykFrTHu6u8P5I3QitzI-PVVjoJ1vcqPRc9Bg4tbJLfmCOiz5eq9pKNh2LEX7iP-TYDzyAwOod3ow2zjp359q-TyDXz4ZccRCPU2wPs",
    imageAlt: "Pour over coffee preparation process",
    rating: "4.8 (210)",
    badgeLabel: "Workshop",
    badgeVariant: "accent" as const,
    title: "Specialty Cupping Masterclass",
    location: "Manizales",
    price: "$35/person",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARShjb3q_ePMJjVTKXIDe_FtBgZlCVHm268vqrruo9hG3wed4ffzVJNK4x5sbTwGHC_MQbMyuNCbks6Jpbbaxbq26XAt6Hsbysx__9bx9EHMVVv7wj7OvySGfPai_bDwiEmN1O46NlliORHSQdEDFQFs93_iVyW0ys7-Y1mKZ8xjv26got8noVJ0jJAroTz1bSGYrKT689e72Gl4nY8xoib5oVpyrdhYUIFYQNXMVVEHWWy1siyETTwNdKaU2Bp0yhedcmfZVxd10",
    imageAlt: "Hummingbird on a coffee flower",
    rating: "4.9 (54)",
    badgeLabel: "Nature",
    badgeVariant: "primary" as const,
    title: "Birdwatching & Coffee",
    location: "Pijao",
    price: "$60/person",
  },
];

const stats = [
  { value: "47", label: "Municipalities" },
  { value: "12k+", label: "Growers" },
  { value: "100%", label: "Authentic" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const Landing = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <Navbar />

      {/* ── Hero ── */}
      <header className="relative h-[870px] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Coffee Mountains"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTV3KJTOsU5uIQ2mFyzQ-mvINRLtgK917IsPFP0LOxyzYNhwhppygnUKiN7oiAj9s7itUeof9_d8BjIs05vChdhQ8LgVWk5GZMAviC7QFsWw6lzY6c2ELw30z_mDerH5CzrZPGOQmk9WT3-V2leyZ9Y3hmZ2e8ufJJIe3vZtDv8qAtwwiEBbiF0NihEGh51348t9wROX6EyHbcvbtrThWWgK7ajxMROZrhPgKX8kg2t6cQl8D35M9nOLcf4F2KpQeN3E5qmgWm6ig"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] drop-shadow-lg">
            The Coffee Cultural Landscape, <br />
            <span className="text-accent italic">now in your language</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-slate-100 max-w-2xl mx-auto font-light leading-relaxed">
            Direct booking powered by AI for authentic coffee experiences.
            Connect directly with local growers and discover hidden gems in the
            heart of Colombia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Explore experiences
            </Button>
            <Button
              variant="white-outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Register your business
            </Button>
          </div>

          {/* Floating Search Bar */}
          <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-full max-w-5xl px-6">
            <SearchBar />
          </div>
        </div>
      </header>

      {/* ── How It Works ── */}
      <section className="pt-32 pb-20 px-6 leaf-pattern dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="How CafIA Works" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Experiences ── */}
      <section className="py-20 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <SectionTitle
              title="What's happening in the PCC right now"
              subtitle="Discover hand-picked activities from our most passionate operators."
              align="left"
            />
            <div className="flex gap-2 mb-16">
              <Button variant="icon-round" icon="arrow_back" />
              <Button variant="icon-round" icon="arrow_forward" />
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.title} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              eyebrow="The Territory"
              title="Explore the UNESCO World Heritage Landscape"
              align="left"
            />
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed -mt-10">
              The Coffee Cultural Landscape of Colombia (PCC) is more than just
              a place—it's a living heritage. With CafIA, navigate through 47
              municipalities and thousands of independent farms using our
              interactive map.
            </p>
            <div className="flex items-center gap-6">
              {stats.map((stat, i) => (
                <React.Fragment key={stat.label}>
                  {i > 0 && (
                    <div className="w-px h-10 bg-slate-200 dark:bg-slate-700" />
                  )}
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-secondary dark:text-primary">
                      {stat.value}
                    </span>
                    <span className="text-xs font-bold uppercase text-slate-400">
                      {stat.label}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[400px]">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ75S3qye5obzXwf-AJt22B-tfHvOJEu8eG4h13ut3CY9F85WnjEA6uXzr3Q1zSB2-xsfa7OzK52yV0jpoeYypwi2jnOv_GYWLEestohBYjebHQzfemcZBveDL81iQPx3yij85lntPDfWHD-KPTGL9OD6jKpoh9Z4sZTl9kEScHigNajTsLOLWAI8NxlOwBvBMW9Xd298DygDXt3lWHxAOMz6uoYOn4-y0_VyAPkG_6gIT0nvV-GbJWTxHbA2fHc7cNl8uicMgwvE"
              alt="Colombia Coffee Region Map"
            />
            <div className="absolute inset-0 bg-secondary/10 pointer-events-none" />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">map</span>
              Open Interactive Map
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
