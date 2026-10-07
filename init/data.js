const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60"
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
        category: "Beach"
    },

    {
        title: "Modern Mountain Cabin",
        description: "A peaceful cabin surrounded by beautiful mountains, perfect for a relaxing weekend away from the city.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60"
        },
        price: 2200,
        location: "Manali",
        country: "India",
        category: "Mountains"
    },

    {
        title: "Luxury Pool Villa",
        description: "Enjoy a private pool, spacious rooms and a peaceful atmosphere in this beautiful luxury villa.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60"
        },
        price: 4500,
        location: "Goa",
        country: "India",
        category: "Pools"
    },

    {
        title: "Forest Retreat",
        description: "Stay close to nature in this cozy forest retreat surrounded by trees and fresh mountain air.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=60"
        },
        price: 1800,
        location: "Rishikesh",
        country: "India",
        category: "Forest"
    },

    {
        title: "Peaceful Lake House",
        description: "Wake up to beautiful lake views and enjoy a calm stay away from the busy city.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
        },
        price: 2800,
        location: "Udaipur",
        country: "India",
        category: "Lake"
    },

    {
        title: "Desert Camp Stay",
        description: "Experience the beauty of the desert with a comfortable camp, traditional food and amazing sunsets.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=60"
        },
        price: 1900,
        location: "Jaisalmer",
        country: "India",
        category: "Desert"
    },

    {
        title: "Beautiful City Apartment",
        description: "A modern apartment in the heart of the city, close to restaurants, shopping areas and popular attractions.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
        },
        price: 2500,
        location: "New Delhi",
        country: "India",
        category: "Cities"
    },

    {
        title: "Cozy Farmhouse",
        description: "Relax in a peaceful farmhouse surrounded by green fields and beautiful countryside views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=60"
        },
        price: 2100,
        location: "Punjab",
        country: "India",
        category: "Farms"
    },

    {
        title: "Hilltop Wooden House",
        description: "A beautiful wooden home on a hilltop with breathtaking views and a peaceful environment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60"
        },
        price: 3200,
        location: "Shimla",
        country: "India",
        category: "Mountains"
    },

    {
        title: "Tropical Beach House",
        description: "Spend your vacation in a tropical beach house with easy access to the sea and beautiful sunsets.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=800&q=60"
        },
        price: 3500,
        location: "Bali",
        country: "Indonesia",
        category: "Beach"
    },

    {
        title: "Downtown Luxury Room",
        description: "A comfortable and stylish private room located in the center of the city.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=60"
        },
        price: 1700,
        location: "Mumbai",
        country: "India",
        category: "Rooms"
    },

    {
        title: "Adventure Camping Spot",
        description: "Enjoy an exciting camping experience under the stars with beautiful natural surroundings.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60"
        },
        price: 1200,
        location: "Ladakh",
        country: "India",
        category: "Camping"
    },

    {
        title: "Snowy Arctic Cabin",
        description: "A warm and cozy cabin surrounded by snow-covered landscapes and peaceful winter scenery.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=800&q=60"
        },
        price: 5200,
        location: "Lapland",
        country: "Finland",
        category: "Arctic"
    },

    {
        title: "Royal Palace Stay",
        description: "Experience traditional architecture and royal hospitality in this beautiful heritage property.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60"
        },
        price: 4000,
        location: "Jaipur",
        country: "India",
        category: "Cities"
    },

    {
        title: "Lakeside Wooden Cabin",
        description: "A peaceful wooden cabin beside a beautiful lake, ideal for couples and small families.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
        },
        price: 2900,
        location: "Nainital",
        country: "India",
        category: "Lake"
    },

    {
        title: "Luxury Goa Villa",
        description: "Enjoy a relaxing holiday in a stylish villa with modern facilities and easy beach access.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=60"
        },
        price: 5000,
        location: "North Goa",
        country: "India",
        category: "Pools"
    },

    {
        title: "Riverside Retreat",
        description: "Stay beside a peaceful river and enjoy nature, fresh air and beautiful surroundings.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=60"
        },
        price: 2300,
        location: "Rishikesh",
        country: "India",
        category: "Trending"
    },

    {
        title: "Countryside Farm Stay",
        description: "Experience peaceful countryside living with open spaces, greenery and fresh local food.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=60"
        },
        price: 1600,
        location: "Haryana",
        country: "India",
        category: "Farms"
    },

    {
        title: "Modern Delhi Loft",
        description: "A stylish modern loft located near popular city attractions, cafes and shopping areas.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60"
        },
        price: 2700,
        location: "New Delhi",
        country: "India",
        category: "Cities"
    },

    {
        title: "Mountain View Resort",
        description: "Relax in a comfortable resort with spectacular mountain views and peaceful surroundings.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60"
        },
        price: 3800,
        location: "Mussoorie",
        country: "India",
        category: "Mountains"
    },

    {
        title: "Beachside Apartment",
        description: "A bright apartment near the beach with comfortable interiors and beautiful ocean views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60"
        },
        price: 2400,
        location: "Pondicherry",
        country: "India",
        category: "Beach"
    },

    {
        title: "Jungle Tree House",
        description: "Stay high among the trees and enjoy a unique nature experience surrounded by greenery.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=60"
        },
        price: 2600,
        location: "Wayanad",
        country: "India",
        category: "Forest"
    },

    {
        title: "Luxury Desert Villa",
        description: "Enjoy a luxurious stay in the desert with traditional design, open spaces and beautiful sunsets.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
        },
        price: 3300,
        location: "Jaisalmer",
        country: "India",
        category: "Desert"
    },

    {
        title: "Lake View Apartment",
        description: "Wake up to peaceful lake views from this comfortable and modern apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
        },
        price: 3100,
        location: "Udaipur",
        country: "India",
        category: "Lake"
    },

    {
        title: "Forest Cottage",
        description: "A cozy cottage surrounded by nature, perfect for a peaceful weekend getaway.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=60"
        },
        price: 2000,
        location: "Coorg",
        country: "India",
        category: "Forest"
    },

    {
        title: "Family Pool House",
        description: "A spacious family-friendly house with a private pool and comfortable outdoor area.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60"
        },
        price: 4200,
        location: "Lonavala",
        country: "India",
        category: "Pools"
    },

    {
        title: "Mountain Camping Retreat",
        description: "Camp in the mountains and enjoy fresh air, scenic views and unforgettable sunsets.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60"
        },
        price: 1400,
        location: "Kasol",
        country: "India",
        category: "Camping"
    },

    {
        title: "Cozy European Room",
        description: "A charming private room with comfortable interiors in a beautiful European neighborhood.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=60"
        },
        price: 3600,
        location: "Paris",
        country: "France",
        category: "Rooms"
    },

    {
        title: "Island Beach Retreat",
        description: "Relax on a beautiful island with clear water, peaceful beaches and comfortable accommodation.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
        },
        price: 4800,
        location: "Phuket",
        country: "Thailand",
        category: "Beach"
    },

    {
        title: "Luxury City Penthouse",
        description: "Stay in a stylish penthouse with modern interiors, city views and premium facilities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=60"
        },
        price: 6500,
        location: "Dubai",
        country: "United Arab Emirates",
        category: "Cities"
    },

    {
        title: "Peaceful Himalayan Stay",
        description: "Enjoy a relaxing Himalayan getaway with beautiful views, fresh air and a comfortable stay.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60"
        },
        price: 3000,
        location: "Dharamshala",
        country: "India",
        category: "Trending"
    }
];

module.exports = {
    data: sampleListings
};