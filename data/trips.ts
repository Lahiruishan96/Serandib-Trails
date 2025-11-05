// data/trips.ts

interface Trip {
  id: number;
  name: string;
  days: number;
  categories: string[];
  image: string;
  // REQUIRED for the detail page
  description: string;
  gallery: string[]; 
}

export const trips: Trip[] = [
  {
    id: 1,
    name: "Cultural Essence of Kandy",
    days: 3,
    categories: ["Historical", "Hill Side"],
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80",
    description: "Explore the sacred city of Kandy, home to the Temple of the Tooth Relic and stunning botanical gardens. A perfect short immersion into Sri Lankan culture.",
    gallery: [
      "https://images.unsplash.com/photo-1549488344-ec24cf74e2d3?auto=format&fit=crop&w=700&h=450&q=80",
      "https://images.unsplash.com/photo-1521742618210-9e9f697669d6?auto=format&fit=crop&w=700&h=450&q=80",
    ],
  },
  {
    id: 2,
    name: "Southern Coastal Escape",
    days: 5,
    categories: ["Beach", "Relaxation"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description: "Five days of pure relaxation on the golden beaches of the Southern Coast. Enjoy sunbathing, surfing, and delicious seafood.",
    gallery: [
      "https://images.unsplash.com/photo-1510414731885-3c12669e48c0?auto=format&fit=crop&w=700&h=450&q=80",
      "https://images.unsplash.com/photo-1588636254471-a4b52b2b1a1c?auto=format&fit=crop&w=700&h=450&q=80",
    ],
  },
  {
    id: 3,
    name: "Wildlife Safari in Yala",
    days: 7,
    categories: ["Adventure", "Safari"],
    image:
      "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?auto=format&fit=crop&w=800&q=80",
    description: "A thrilling safari adventure through Yala National Park, home to leopards, elephants, and a variety of unique wildlife.",
    gallery: [
      "https://images.unsplash.com/photo-1534346896223-9528d2d6c63c?auto=format&fit=crop&w=700&h=450&q=80",
      "https://images.unsplash.com/photo-1546740683-16a7575306e9?auto=format&fit=crop&w=700&h=450&q=80",
    ],
  },
  {
    id: 4,
    name: "Tea Trails of Nuwara Eliya",
    days: 3,
    categories: ["Hill Side", "Countryside"],
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "Immerse yourself in the colonial charm and rolling tea plantations of Nuwara Eliya, the 'Little England' of Sri Lanka.",
    gallery: [
      "https://images.unsplash.com/photo-1584224744747-92582881b850?auto=format&fit=crop&w=700&h=450&q=80",
      "https://images.unsplash.com/photo-1587588386348-18e950882e37?auto=format&fit=crop&w=700&h=450&q=80",
    ],
  },
  {
    id: 5,
    name: "Anuradhapura Heritage Tour",
    days: 14,
    categories: ["Historical"],
    image:
      "https://images.unsplash.com/photo-1602461371527-7c5b05b3a55e?auto=format&fit=crop&w=800&q=80",
    description: "A deep dive into Sri Lanka's ancient kingdom, exploring colossal dagobas, ancient reservoirs, and historical ruins.",
    gallery: [
      "https://images.unsplash.com/photo-1620861118749-9c59508922c2?auto=format&fit=crop&w=700&h=450&q=80",
      "https://images.unsplash.com/photo-1623955688537-b4d4b1a415a7?auto=format&fit=crop&w=700&h=450&q=80",
    ],
  },
  {
    id: 6,
    name: "Adam's Peak Hike",
    days: 21,
    categories: ["Adventure", "Safari", "Hill Side"],
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    description: "The ultimate Sri Lankan expedition, combining culture, wildlife, and the challenging but rewarding climb to the summit of Adam's Peak.",
    gallery: [
      "https://images.unsplash.com/photo-1606830588691-b3b4d4c5c2a3?auto=format&fit=crop&w=700&h=450&q=80",
      "https://images.unsplash.com/photo-1519782800-e7f016f40660?auto=format&fit=crop&w=700&h=450&q=80",
    ],
  },
];

// Helper function to find a trip by ID
export const getTripById = (id: number) => {
    return trips.find(trip => trip.id === id);
};