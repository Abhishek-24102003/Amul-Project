import React from "react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    review:
      "Amul products are always fresh and full of flavor. Their ice creams are my family's absolute favorite!",
    // Changed local path to a live placeholder image
    img: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 2,
    name: "Ravi Patel",
    review:
      "The quality of Amul milk and butter is unbeatable. Proud to support Indian farmers through Amul!",
    // Changed local path to a live placeholder image
    img: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 3,
    name: "Sneha Mehta",
    review:
      "Amul chocolates are so rich and creamy! Love the variety and smoothness of every bite.",
    // Changed local path to a live placeholder image
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 4,
    name: "Arjun Verma",
    review:
      "I trust Amul for all dairy products. The taste of their ghee reminds me of home-cooked meals.",
    // Changed local path to a live placeholder image
    img: "https://media.istockphoto.com/id/1280100017/photo/young-man-in-kurta-pyjamas-at-home-crossed-arms-on-a-festival-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=lX1ngu5w4L_rCCiRlztXOXmxAYe3IOZLIJlkTz4wNAk=",
  },
  {
    id: 5,
    name: "Neha Singh",
    review:
      "Refreshing lassi and amazing butter! Amul has been part of our daily routine for years.",
    // Changed local path to a live placeholder image
    img: "https://images.unsplash.com/photo-1597898111396-f149999e08f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  },
];

const Review = () => {
  return (
    <div className="w-full py-20 bg-linear-to-r from-red-100 via-purple-200 to-red-300">
      {/* Title */}
      <div className="text-center mb-25">
        <h2 className="text-3xl rubix mt-2 font-extrabol3 opacity-90 text-red-500">
          Here’s what our happy customers have to say!
        </h2>
      </div>

      {/* Review Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-6 md:px-16">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white text-gray-800 w-[280px] sm:w-[300px] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={r.img}
              alt={r.name}
              className="w-20 h-20 rounded-full mb-4 object-cover bg-top "
            />
            <h3 className="font-bold text-lg text-[#de0404]">{r.name}</h3>
            <p className="text-sm text-gray-700 mt-2 italic leading-relaxed">
              "{r.review}"
            </p>
            <div className="flex mt-3 text-[#FFD700] text-lg">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;