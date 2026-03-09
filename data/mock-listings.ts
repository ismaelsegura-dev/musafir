export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  badges: string[];
  amenities: string[];
  description: string;
  host: {
    name: string;
    image: string;
    joined: string;
  };
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Serene Ubud Jungle Villa with Private Pool',
    location: 'Ubud, Bali',
    price: 150,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    rating: 4.9,
    reviews: 124,
    badges: ['No Alcohol', 'Private Pool', 'Halal Food Nearby'],
    amenities: ['Private Pool', 'Wifi', 'Air Conditioning', 'Kitchen', 'Prayer Mat', 'Qibla Direction'],
    description: 'Escape to this tranquil jungle villa in the heart of Ubud. Featuring a completely private pool and lush greenery, this villa is perfect for Muslim couples or families seeking privacy. Halal dining options are just a 5-minute walk away.',
    host: {
      name: 'Arief',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      joined: '2019'
    }
  },
  {
    id: '2',
    title: 'Langkawi Beachfront Islamic Retreat',
    location: 'Langkawi, Malaysia',
    price: 220,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    rating: 4.8,
    reviews: 89,
    badges: ['No Alcohol', 'Private Pool', 'Halal Food Nearby'],
    amenities: ['Beachfront', 'Private Pool', 'Halal Breakfast', 'Family Friendly', 'Prayer Room'],
    description: 'Experience luxury right on the beach. This property offers a secluded environment with no alcohol served on premises. Enjoy the private pool overlooking the Andaman Sea.',
    host: {
      name: 'Sarah',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      joined: '2021'
    }
  },
  {
    id: '3',
    title: 'Modern Seminyak Family Villa',
    location: 'Seminyak, Bali',
    price: 180,
    image: 'https://images.unsplash.com/photo-1600596542815-2495db98dada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    rating: 4.7,
    reviews: 210,
    badges: ['Private Pool', 'Halal Food Nearby'],
    amenities: ['Private Pool', 'Smart TV', 'Fully Equipped Kitchen', '24/7 Security', 'Prayer Rugs'],
    description: 'A stylish and modern villa in the heart of Seminyak. Close to many halal restaurants and shops. The pool is enclosed for privacy.',
    host: {
      name: 'Dewi',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      joined: '2020'
    }
  },
  {
    id: '4',
    title: 'Rainforest Hideaway with Mountain View',
    location: 'Langkawi, Malaysia',
    price: 130,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    rating: 4.95,
    reviews: 45,
    badges: ['No Alcohol', 'Halal Food Nearby'],
    amenities: ['Mountain View', 'Wifi', 'Terrace', 'BBQ Grill', 'Prayer Direction Marked'],
    description: 'Wake up to the sounds of nature. This hideaway offers stunning mountain views and fresh air. Alcohol-free property.',
    host: {
      name: 'Hassan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      joined: '2022'
    }
  },
  {
    id: '5',
    title: 'Luxury Nusa Dua Ocean Villa',
    location: 'Nusa Dua, Bali',
    price: 350,
    image: 'https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    rating: 5.0,
    reviews: 32,
    badges: ['No Alcohol', 'Private Pool', 'Halal Food Nearby', 'Female Only Hours'],
    amenities: ['Ocean View', 'Infinity Pool', 'Butler Service', 'Spa', 'Halal Certified Kitchen'],
    description: 'The ultimate luxury experience in Nusa Dua. Strictly halal, with a private infinity pool and world-class service. Ideal for honeymoons.',
    host: {
      name: 'Rina',
      image: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      joined: '2018'
    }
  }
];
