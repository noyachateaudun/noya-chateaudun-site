import { RESTAURANT } from "@/data/restaurant";
import { MENU_MIDI, MENU_SOIR, type MenuSection } from "@/data/menu";

export function getRestaurantSchema() {
  const menuSections = [...MENU_MIDI.sections, ...MENU_SOIR.sections];
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: RESTAURANT.name,
    alternateName: RESTAURANT.alternateName,
    image: [
      `${RESTAURANT.url}/images/hero-pita.jpg`,
      `${RESTAURANT.url}/images/restaurant-interieur.jpg`,
    ],
    url: RESTAURANT.url,
    telephone: RESTAURANT.telephone,
    email: RESTAURANT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: RESTAURANT.address.street,
      addressLocality: RESTAURANT.address.city,
      postalCode: RESTAURANT.address.postalCode,
      addressCountry: RESTAURANT.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: RESTAURANT.geo.latitude,
      longitude: RESTAURANT.geo.longitude,
    },
    servesCuisine: RESTAURANT.servesCuisine,
    priceRange: RESTAURANT.priceRange,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "110",
      reviewCount: "110",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "11:30",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "19:00",
        closes: "23:00",
      },
    ],
    menu: `${RESTAURANT.url}/menu`,
    acceptsReservations: "True",
    potentialAction: [
      {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: RESTAURANT.links.reservation,
          actionPlatform: "https://schema.org/DesktopWebPlatform",
        },
        result: {
          "@type": "FoodEstablishmentReservation",
          name: "Réservation chez Noya",
        },
      },
      {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: RESTAURANT.links.emporter,
        },
      },
    ],
    hasMenu: {
      "@type": "Menu",
      url: `${RESTAURANT.url}/menu`,
      hasMenuSection: menuSections.map(sectionToSchema),
    },
  };
}

function sectionToSchema(section: MenuSection) {
  return {
    "@type": "MenuSection",
    name: section.title,
    hasMenuItem: section.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.desc || item.name,
      offers: {
        "@type": "Offer",
        price: item.price.replace(",", ".").split(" ")[0],
        priceCurrency: "EUR",
      },
      ...(item.badge === "VG"
        ? {
            suitableForDiet: [
              "https://schema.org/VeganDiet",
              "https://schema.org/VegetarianDiet",
            ],
          }
        : {}),
    })),
  };
}

export function getMenuSchema() {
  const allSections = [...MENU_MIDI.sections, ...MENU_SOIR.sections];
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `Carte Noya Châteaudun`,
    url: `${RESTAURANT.url}/menu`,
    hasMenuSection: allSections.map(sectionToSchema),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getCateringSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FoodService",
    name: "Noya Châteaudun — Service Traiteur Levantin",
    description:
      "Service traiteur levantin et méditerranéen pour événements privés et corporate à Paris et Île-de-France. Buffets mezze, cocktails, mariages.",
    provider: {
      "@type": "Restaurant",
      name: RESTAURANT.name,
      url: RESTAURANT.url,
    },
    areaServed: [
      { "@type": "City", name: "Paris" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
    ],
    serviceType: ["Catering", "Buffet", "Event catering"],
  };
}
