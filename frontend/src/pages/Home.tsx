import { useState } from "react";
import { MobileHeader } from "../components/mobile/MobileHeader";
import { MobileSearchBar } from "../components/mobile/Mobilesearchbar";
import { FilterChips } from "../components/mobile/FilterChips";
import { FeaturedCard } from "../components/mobile/Featuredcard";
import { MiniCard } from "../components/mobile/Minicard";
import { BottomNav } from "../components/mobile/Bottomnav";
import { FloatingActionButton } from "../components/mobile/Floatingactionbutton";

const filterOptions = [
  { id: "all", label: "All" },
  { id: "farms", label: "Coffee farms", icon: "coffee" },
  { id: "birds", label: "Birdwatching", icon: "flutter_dash" },
  { id: "hostels", label: "Rural hostels", icon: "cottage" },
];

const discoverCards = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0ZDUPRNyWMoqD7X6ACKm5z0kPXz_L6cPa64lASqr5t8fkWqQZ4q_otpGNqYpTSzMa3aChIbUMJ7rHviQ-l5kYDGbbLid2FzZjIruGnZKKEQCI6uS5r3QtZ6MgOc_5uUBu8CsLh0UAXHAdG8_w4J5y5bT9i6Hf5aSGIdP63nuW1oPAT7rcoz1M0GOJz5TXMmXT4cShknNcuzBwqWa8-SVP2gQduLeUFQBD4awjbJSmL-HTy7HUz3iI2hnA1ax4m0FoQW2-11TpRbzs",
    imageAlt: "Exotic bird in the colombian forest",
    title: "Cloud Forest Birding",
    subtitle: "Mist Forest Trail",
    price: 32,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAunR9RcL1SBZXvoZWLgj2egmBViQtG-BgCMn05vCWKnNm0B9uPJwSdSMoMYtqv46BY7-m-W5gBzdh1ocXTbrj4I4Gs710tdXMxVlMStz4cTi53tIG3Xmh1-Tjjk-8QHEZYvvJv19vVS3cS9Q1nva1Qdr5w2dXZPYTSOoCKZuMGjMSRAgTZlQeyqefqkPsCbPgiOhmisZlwoTzCU1pTBNEFDWgIH2l_0pBQCq5A01fsJ9P1DeK5OVfguv8t0gbiwGsLK_4HDY_8Lur",
    imageAlt: "Artisan hands weaving a traditional basket",
    title: "Artisan Workshop",
    subtitle: "Salento Town Center",
    price: 25,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    // Responsive shell: mobile-first, scales up responsively
    <div className="relative flex min-h-screen w-full flex-col max-w-md md:max-w-2xl lg:max-w-4xl mx-auto bg-warm-cream md:bg-white/50 shadow-lg md:shadow-none overflow-x-hidden font-display text-primary">
      <MobileHeader />

      <MobileSearchBar value={search} onChange={setSearch} />

      <FilterChips options={filterOptions} defaultSelected="all" />

      {/* ── Featured ── */}
      <section className="px-4 md:px-8 lg:px-12 pt-6 md:pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4">
          <h2 className="text-primary dark:text-slate-100 text-xl font-bold tracking-tight">
            Featured Experience
          </h2>
          <a
            className="text-accent-green text-sm font-semibold hover:underline"
            href="#"
          >
            View all
          </a>
        </div>
        <FeaturedCard
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBGpwPGzcOuKj8y274rjeHQ6knYIcV6rtbhMxCnid-6yNNQ4YF6dO2oWgY1CLXJNn_2lglRwq6QBnjWqjnOhOu9DVRJzguOjx-ZzKRWhCjH73qmT2pXOIfPm8Cc8DwBL_Q5OFIVwXLMTlO6zBroRtBoAv6v3qfc5oqK9Iq3hd3gvcVRyul4SH6zF8uT49ZMnVKlfm_ya-2EXY0YVtcm58AHCiJt-wKb-tKEu6NFcGcacYpUQii51kHQC4tFCxVhf5nYZLMSJuqtq1eR"
          imageAlt="Lush coffee farm at sunrise with mist"
          badge="UNESCO Heritage"
          title="Finca La Esperanza"
          location="Chinchiná, Caldas"
          rating={4.9}
          price={45}
          languages={[
            { code: "EN" },
            { code: "FR" },
            { code: "DE" },
            { code: "JA" },
          ]}
        />
      </section>

      {/* ── Discover More ── */}
      <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <h2 className="text-primary dark:text-slate-100 text-lg font-bold tracking-tight mb-4">
          Discover More
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {discoverCards.map((card) => (
            <MiniCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      {/* Bottom spacing so content isn't hidden behind the nav */}
      <div className="h-20" />

      <FloatingActionButton label="Ask Cumanday" icon="chat" />

      <BottomNav defaultActive="explore" />
    </div>
  );
};

export default Home;
