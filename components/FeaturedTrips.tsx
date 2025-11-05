// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// interface Trip {
//   id: number;
//   name: string;
//   days: number;
//   categories: string[];
//   image: string;
// }

// const trips: Trip[] = [
//   {
//     id: 1,
//     name: "Cultural Essence of Kandy",
//     days: 3,
//     categories: ["Historical", "Hill Side"],
//     image:
//       "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 2,
//     name: "Southern Coastal Escape",
//     days: 5,
//     categories: ["Beach", "Relaxation"],
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 3,
//     name: "Wildlife Safari in Yala",
//     days: 7,
//     categories: ["Adventure", "Safari"],
//     image:
//       "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 4,
//     name: "Tea Trails of Nuwara Eliya",
//     days: 3,
//     categories: ["Hill Side", "Countryside"],
//     image:
//       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 5,
//     name: "Anuradhapura Heritage Tour",
//     days: 14,
//     categories: ["Historical"],
//     image:
//       "https://images.unsplash.com/photo-1602461371527-7c5b05b3a55e?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 6,
//     name: "Adam's Peak Hike",
//     days: 21,
//     categories: ["Adventure", "Safari", "Hill Side"],
//     image:
//       "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const durationOptions = [3, 5, 7, 14, 21];
// const categoryOptions = [
//   "Adventure",
//   "Safari",
//   "Historical",
//   "Hill Side",
//   "Countryside",
//   "Beach",
//   "Relaxation",
// ];

// const FeaturedTrips: React.FC = () => {
//   const [selectedDays, setSelectedDays] = useState<number | null>(null);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   // Filter logic
//   const filteredTrips = trips.filter((trip) => {
//     const matchDays = selectedDays ? trip.days === selectedDays : true;
//     const matchCategory = selectedCategory
//       ? trip.categories.includes(selectedCategory)
//       : true;

//     return matchDays && matchCategory;
//   });

//   return (
//     <section className="py-20 bg-white text-gray-800">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold">Our Featured Trips</h2>
//           <p className="mt-3 text-gray-600 text-lg">
//             Discover Sri Lanka’s best experiences handpicked for you.
//           </p>
//         </div>

//         {/* Filter Section */}
//         <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Sort by Duration */}
//             <div>
//               <label
//                 htmlFor="duration"
//                 className="block text-lg font-semibold mb-2"
//               >
//                 Sort by Duration
//               </label>
//               <select
//                 id="duration"
//                 value={selectedDays ?? ""}
//                 onChange={(e) =>
//                   setSelectedDays(
//                     e.target.value ? Number(e.target.value) : null
//                   )
//                 }
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               >
//                 <option value="">All Durations</option>
//                 {durationOptions.map((days) => (
//                   <option key={days} value={days}>
//                     {days} days
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Sort by Category */}
//             <div>
//               <label
//                 htmlFor="category"
//                 className="block text-lg font-semibold mb-2"
//               >
//                 Sort by Category
//               </label>
//               <select
//                 id="category"
//                 value={selectedCategory ?? ""}
//                 onChange={(e) =>
//                   setSelectedCategory(e.target.value || null)
//                 }
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               >
//                 <option value="">All Categories</option>
//                 {categoryOptions.map((cat) => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Trip Cards */}
//         {filteredTrips.length > 0 ? (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {filteredTrips.map((trip) => (
//               <div
//                 key={trip.id}
//                 className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
//               >
//                 {/* Image Container with Categories Overlay (FIX APPLIED HERE) */}
//                 <div className="relative w-full h-52">
//                   <Image
//                     src={trip.image}
//                     alt={trip.name}
//                     fill
//                     className="object-cover"
//                   />
                  
//                   {/* Categories Overlay - now visible with absolute positioning and z-index */}
//                   <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
//                     {trip.categories.map((cat, index) => (
//                       <span
//                         key={index}
//                         // Enhanced styling for better contrast on images
//                         className="bg-blue-700 text-white text-sm px-3 py-1 rounded-full font-medium shadow-lg"
//                       >
//                         {cat}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Trip Info Block */}
//                 <div className="p-5 flex flex-col h-full">
//                   <h3 className="text-xl font-semibold mb-2">{trip.name}</h3>
//                   <p className="text-gray-600">
//                     Duration:{" "}
//                     <span className="font-medium">{trip.days} days</span>
//                   </p>
//                   {/* NOTE: The redundant categories div has been removed from here */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 mt-10">
//             No trips match your selected filters.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FeaturedTrips;

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { trips } from "@/data/trips"; // ✅ path works if tsconfig has baseUrl set

// const durationOptions = [3, 5, 7, 14, 21];
// const categoryOptions = [
//   "Adventure",
//   "Safari",
//   "Historical",
//   "Hill Side",
//   "Countryside",
//   "Beach",
//   "Relaxation",
// ];

// const FeaturedTrips: React.FC = () => {
//   const [selectedDays, setSelectedDays] = useState<number | null>(null);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   const filteredTrips = trips.filter((trip) => {
//     const matchDays = selectedDays ? trip.days === selectedDays : true;
//     const matchCategory = selectedCategory
//       ? trip.categories.includes(selectedCategory)
//       : true;
//     return matchDays && matchCategory;
//   });

//   return (
//     <section className="py-20 bg-white text-gray-800">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold">Our Featured Trips</h2>
//           <p className="mt-3 text-gray-600 text-lg">
//             Discover Sri Lanka’s best experiences handpicked for you.
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="p-8 mb-12 rounded-2xl border-2 border-blue-100 bg-white shadow-xl">
//           <h3 className="text-2xl font-bold mb-6 text-gray-800">
//             Find Your Perfect Trip
//           </h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Sort by Duration */}
//             <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
//               <label className="block text-sm uppercase text-blue-600 font-bold mb-2">
//                 Trip Duration
//               </label>
//               <select
//                 value={selectedDays ?? ""}
//                 onChange={(e) =>
//                   setSelectedDays(
//                     e.target.value ? Number(e.target.value) : null
//                   )
//                 }
//                 className="w-full border-none bg-transparent text-xl font-semibold text-gray-700 focus:ring-0 cursor-pointer"
//               >
//                 <option value="">Any Duration</option>
//                 {durationOptions.map((d) => (
//                   <option key={d} value={d}>
//                     {d} days
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Sort by Category */}
//             <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
//               <label className="block text-sm uppercase text-blue-600 font-bold mb-2">
//                 Trip Category
//               </label>
//               <select
//                 value={selectedCategory ?? ""}
//                 onChange={(e) => setSelectedCategory(e.target.value || null)}
//                 className="w-full border-none bg-transparent text-xl font-semibold text-gray-700 focus:ring-0 cursor-pointer"
//               >
//                 <option value="">All Interests</option>
//                 {categoryOptions.map((cat) => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Trip Cards */}
//         {filteredTrips.length > 0 ? (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {filteredTrips.map((trip) => (
//               <Link
//                 key={trip.id}
//                 href={`/trips/${trip.id}`} // ✅ Correct Next.js route
//                 className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden block"
//               >
//                 <div className="relative w-full h-52">
//                   <Image
//                     src={trip.image}
//                     alt={trip.name}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
//                     {trip.categories.map((cat, i) => (
//                       <span
//                         key={i}
//                         className="bg-blue-700 text-white text-sm px-3 py-1 rounded-full font-medium shadow-lg"
//                       >
//                         {cat}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="p-5">
//                   <h3 className="text-xl font-semibold mb-2">{trip.name}</h3>
//                   <p className="text-gray-600">
//                     Duration:{" "}
//                     <span className="font-medium">{trip.days} days</span>
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 mt-10">
//             No trips match your selected filters.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FeaturedTrips;







"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { trips } from "@/data/trips"; // ✅ path works if tsconfig has baseUrl set

const durationOptions = [3, 5, 7, 14, 21];
const categoryOptions = [
  "Adventure",
  "Safari",
  "Historical",
  "Hill Side",
  "Countryside",
  "Beach",
  "Relaxation",
];

const FeaturedTrips: React.FC = () => {
  const [selectedDays, setSelectedDays] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTrips = trips.filter((trip) => {
    const matchDays = selectedDays ? trip.days === selectedDays : true;
    const matchCategory = selectedCategory
      ? trip.categories.includes(selectedCategory)
      : true;
    return matchDays && matchCategory;
  });

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Featured Trips</h2>
          <p className="mt-3 text-gray-600 text-lg">
            Discover Sri Lanka’s best experiences handpicked for you.
          </p>
        </div>

        {/* 🔹 Redesigned Filters Section */}
         <div className="p-8 mb-12 bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl shadow-md">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* Title */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                Find Your Perfect Trip
              </h3>
              <p className="text-gray-600">
                Filter by duration or category to explore tailored adventures.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-5">
              {/* Sort by Duration */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-blue-700 mb-2">
                  Trip Duration
                </label>
                <select
                  value={selectedDays ?? ""}
                  onChange={(e) =>
                    setSelectedDays(
                      e.target.value ? Number(e.target.value) : null
                    )
                  }
                  className="border border-gray-300 bg-white text-gray-800 rounded-xl py-2.5 px-4 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-base"
                >
                  <option value="">Any Duration</option>
                  {durationOptions.map((d) => (
                    <option key={d} value={d}>
                      {d} days
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort by Category */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-blue-700 mb-2">
                  Trip Category
                </label>
                <select
                  value={selectedCategory ?? ""}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="border border-gray-300 bg-white text-gray-800 rounded-xl py-2.5 px-4 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-base"
                >
                  <option value="">All Interests</option>
                  {categoryOptions.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset Button */}
              {(selectedDays || selectedCategory) && (
                <button
                  onClick={() => {
                    setSelectedDays(null);
                    setSelectedCategory(null);
                  }}
                  className="self-end bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md transition"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Trip Cards */}
        {filteredTrips.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredTrips.map((trip) => (
              <Link
                key={trip.id}
                href={`/trips/${trip.id}`}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden block"
              >
                <div className="relative w-full h-52">
                  <Image
                    src={trip.image}
                    alt={trip.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                    {trip.categories.map((cat, i) => (
                      <span
                        key={i}
                        className="bg-blue-700 text-white text-sm px-3 py-1 rounded-full font-medium shadow-lg"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{trip.name}</h3>
                  <p className="text-gray-600">
                    Duration:{" "}
                    <span className="font-medium">{trip.days} days</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No trips match your selected filters.
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedTrips;
