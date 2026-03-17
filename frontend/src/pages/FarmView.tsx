import { HeroGallery } from "../components/mobile/Herogallery";
import { FilterChips } from "../components/mobile/FilterChips";
import {
  LiveHighlightGrid,
  type Highlight,
} from "../components/mobile/Livehighlightgrid";
import {
  PricingTable,
  type PricingRow,
} from "../components/mobile/Pricingtable";
import { ReviewList, type Review } from "../components/mobile/Reviewlist";
import { StickyBookingBar } from "../components/mobile/Stickybookingbar";

const images = [
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX7HLMx_Ng0v_lqdbJ0IqNGkKv4PtcXZ0r4hfaaUxgRRuIS_NNRaicizuaLZCXXfZE4QOZ_KdeisDrP56J_-3Dxd05a0_VMuDPMIthvJpIRVnti_Tk6sjW8tAIbMQ-dKjHpyC9gRHDZlwHXDyN-xcJb25qpb_w7snPdY4hNe2qvHPaOgKYcSu5XDcZkhLhU34FV8dXa-EG411qyS2oHTUwIaFmToVNEaiyxWZzofIyr854ZImZ7yscJIPlj8WjTy63XaYi4F8kzY3q",
    alt: "Lush green coffee farm mountains landscape at sunrise",
  },
];

const tagOptions = [
  { id: "tour", label: "Coffee tour" },
  { id: "birds", label: "Birdwatching" },
  { id: "lodge", label: "Lodging" },
  { id: "breakfast", label: "Farm breakfast" },
];

const highlights: Highlight[] = [
  {
    icon: "potted_plant",
    label: "Current Harvest",
    value: "Caturra + Castillo in red cherry",
  },
  {
    icon: "flight",
    label: "Birds spotted today",
    value: "Multicolored Tanager, Cock-of-the-rock (3)",
  },
  {
    icon: "coffee_maker",
    label: "Process available",
    value: "Natural, Washed, Honey",
  },
  {
    icon: "wb_sunny",
    label: "Weather today",
    value: "18°C, clear morning for birding",
  },
];

const pricing: PricingRow[] = [
  { label: "Full Coffee Tour (3h)", price: "$45 USD" },
  { label: "Lodging (Private Suite)", price: "$60 USD/night" },
  { label: "Cumanday Combo (Tour + Night)", price: "$90 USD", highlight: true },
];

const reviews: Review[] = [
  {
    author: "Sarah Jenkins",
    flag: "🇺🇸",
    rating: 5,
    text: "The birdwatching at 6 AM was incredible. The guide knew every species. Highly recommended!",
  },
  {
    author: "Lukas Schmidt",
    flag: "🇩🇪",
    rating: 5,
    text: "Unglaubliche Erfahrung. Der Kaffee ist Weltklasse und die Farm ist wunderschön gepflegt.",
  },
  {
    author: "Carlos Ruiz",
    flag: "🇨🇴",
    rating: 5,
    text: "Un orgullo regional. La atención de la familia es espectacular y el desayuno campesino es lo mejor.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const FarmView = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
      {/* Hero with back / share / favorite */}
      <HeroGallery images={images} onBack={() => window.history.back()} />

      {/* Content card slides up over the hero */}
      <div className="relative -mt-6 rounded-t-xl md:rounded-xl bg-background-light dark:bg-background-dark px-4 md:px-8 lg:px-12 pt-6 md:pt-8 pb-24 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto w-full md:mt-4">
        {/* Title + location */}
        <div className="flex flex-col gap-1 mb-4 md:mb-6">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary dark:text-slate-100">
              Finca La Esperanza
            </h1>
            <span
              className="material-symbols-outlined text-blue-500 text-xl"
              title="Verified Farm"
            >
              verified
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 font-medium flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">
              location_on
            </span>
            Chinchiná, Caldas · 1,450 masl
          </p>
        </div>

        {/* Tags — reuse FilterChips in display-only mode (no onChange needed) */}
        <div className="mb-8 md:mb-12">
          <FilterChips options={tagOptions} defaultSelected="" />
        </div>

        {/* RAG live highlights */}
        <LiveHighlightGrid
          highlights={highlights}
          badgeLabel="RAG-Powered Live Data"
        />

        {/* Pricing table */}
        <PricingTable rows={pricing} />

        {/* Reviews */}
        <ReviewList
          reviews={reviews}
          totalCount={124}
          onSeeAll={() => console.log("see all reviews")}
        />
      </div>

      {/* Fixed bottom CTA */}
      <StickyBookingBar
        primaryLabel="Book directly — no commission"
        primaryIcon="bolt"
        secondaryLabel="Ask Cumanday on WhatsApp"
        secondaryIcon="chat"
        secondaryIconColor="text-emerald-600"
      />
    </div>
  );
};

export default FarmView;
