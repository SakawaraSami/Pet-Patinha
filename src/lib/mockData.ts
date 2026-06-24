export interface Provider {
  id: string;
  name: string;
  initials: string;
  rating: number;
  reviews: number;
  specialty: string;
  price: number;
  distance: number;
  responseTime: string;
  location: string;
  badges: string[];
  services: { name: string; description: string; price: number; unit: string }[];
  bio: string;
  homeDescription: string;
  repeatClients: number;
  totalBookings: number;
  responseRate: number;
  memberSince: string;
  petSizes: string[];
  features: string[];
  reviewsList: {
    author: string;
    initials: string;
    rating: number;
    text: string;
    petInfo: string;
    date: string;
  }[];
  availability: { [day: number]: "available" | "booked" | "blocked" };
}

export const providers: Provider[] = [
  {
    id: "emily-chen",
    name: "Emily Chen",
    initials: "EC",
    rating: 4.97,
    reviews: 312,
    specialty: "Experienced with large breeds",
    price: 45,
    distance: 1.2,
    responseTime: "< 1 hour",
    location: "Brooklyn, NY",
    badges: ["Verified", "Top Rated", "Super Sitter"],
    services: [
      { name: "Overnight Boarding", description: "Your pet stays overnight in my home with 24/7 care and attention.", price: 45, unit: "night" },
      { name: "Dog Walking", description: "30-minute neighborhood walk with playtime included.", price: 20, unit: "walk" },
      { name: "Doggy Day Care", description: "Full day of socialization, play, and rest in a home environment.", price: 35, unit: "day" },
      { name: "Drop-In Visits", description: "30-minute visit to your home for feeding, walks, and cuddles.", price: 18, unit: "visit" },
    ],
    bio: "Hi! I'm Emily, a lifelong animal lover and certified pet first aid provider. I've been caring for pets professionally for over 5 years and treat every animal like family. My home has a fully fenced backyard, and I limit the number of guests to ensure personalized attention.",
    homeDescription: "Spacious 3-bedroom home with a large fenced backyard. Hardwood floors throughout. Located in a quiet residential neighborhood with nearby parks and walking trails.",
    repeatClients: 85,
    totalBookings: 1247,
    responseRate: 99,
    memberSince: "2019",
    petSizes: ["Small", "Medium", "Large"],
    features: ["Fenced yard", "No other pets", "Accepts cats", "Medication admin"],
    reviewsList: [
      { author: "Jessica M.", initials: "JM", rating: 5, text: "Emily is absolutely amazing! Our golden retriever Max had the best time. She sent us daily photos and updates. Will definitely book again!", petInfo: "Golden Retriever, 3 years", date: "2 weeks ago" },
      { author: "Michael R.", initials: "MR", rating: 5, text: "We were nervous leaving our senior dog for the first time, but Emily made the whole process so easy. She followed all of his medication schedules perfectly.", petInfo: "Labrador, 11 years", date: "1 month ago" },
      { author: "Amanda K.", initials: "AK", rating: 5, text: "Our cat Whiskers is very anxious around new people, but Emily was so patient and gentle. Came home to a happy, relaxed kitty!", petInfo: "Domestic Shorthair, 5 years", date: "1 month ago" },
      { author: "David L.", initials: "DL", rating: 4, text: "Great experience overall. Emily's home is very clean and pet-friendly. Only wish the backyard was a bit larger for our energetic puppy.", petInfo: "Border Collie, 1 year", date: "2 months ago" },
    ],
    availability: { 1: "available", 2: "available", 3: "booked", 4: "booked", 5: "available", 6: "available", 7: "available", 8: "blocked", 9: "blocked", 10: "available", 11: "available", 12: "available", 13: "available", 14: "booked", 15: "available", 16: "available", 17: "available", 18: "available", 19: "available", 20: "booked", 21: "booked", 22: "available", 23: "available", 24: "available", 25: "available", 26: "available", 27: "blocked", 28: "available", 29: "available", 30: "available" },
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    initials: "MJ",
    rating: 4.91,
    reviews: 189,
    specialty: "Dog training specialist",
    price: 38,
    distance: 2.8,
    responseTime: "< 2 hours",
    location: "Manhattan, NY",
    badges: ["Verified", "Top Rated"],
    services: [
      { name: "Overnight Boarding", description: "Comfortable overnight stays with structured routines.", price: 38, unit: "night" },
      { name: "Dog Walking", description: "45-minute structured walk with basic training reinforcement.", price: 25, unit: "walk" },
      { name: "Doggy Day Care", description: "Engaging day care with socialization and training activities.", price: 30, unit: "day" },
    ],
    bio: "Professional dog trainer turned pet sitter! I bring 8 years of training experience to every stay. Your pup will come home not only happy but better behaved.",
    homeDescription: "Modern apartment with dedicated pet space. Access to a private dog run in the building.",
    repeatClients: 72,
    totalBookings: 834,
    responseRate: 97,
    memberSince: "2020",
    petSizes: ["Small", "Medium", "Large"],
    features: ["Training included", "Structured routine", "Multiple daily walks"],
    reviewsList: [
      { author: "Sarah T.", initials: "ST", rating: 5, text: "Marcus is incredible. Our dog came back knowing new commands! Best pet sitter ever.", petInfo: "German Shepherd, 2 years", date: "1 week ago" },
      { author: "Chris P.", initials: "CP", rating: 5, text: "Super professional and communicative. Highly recommend!", petInfo: "Beagle, 4 years", date: "3 weeks ago" },
    ],
    availability: { 1: "available", 2: "booked", 3: "available", 4: "available", 5: "available", 6: "booked", 7: "booked", 8: "available", 9: "available", 10: "available", 11: "available", 12: "available", 13: "booked", 14: "available", 15: "available", 16: "available", 17: "available", 18: "booked", 19: "available", 20: "available", 21: "available", 22: "available", 23: "available", 24: "available", 25: "booked", 26: "available", 27: "available", 28: "available", 29: "available", 30: "available" },
  },
  {
    id: "sophie-martinez",
    name: "Sophie Martinez",
    initials: "SM",
    rating: 4.94,
    reviews: 276,
    specialty: "Cat & exotic pet specialist",
    price: 42,
    distance: 3.5,
    responseTime: "< 30 min",
    location: "Queens, NY",
    badges: ["Verified", "Super Sitter"],
    services: [
      { name: "House Sitting", description: "I'll stay at your home to care for your pets in their familiar environment.", price: 55, unit: "night" },
      { name: "Drop-In Visits", description: "Tailored visits for cats and exotic pets with specialized care.", price: 22, unit: "visit" },
      { name: "Overnight Boarding", description: "Quiet, calm environment perfect for anxious pets.", price: 42, unit: "night" },
    ],
    bio: "Specialist in cats, rabbits, birds, and reptiles. Vet tech background with 6 years of experience. Your exotic baby is in expert hands!",
    homeDescription: "Quiet garden apartment with separate rooms for different pet types. Temperature-controlled environment for exotic pets.",
    repeatClients: 91,
    totalBookings: 1089,
    responseRate: 100,
    memberSince: "2018",
    petSizes: ["Small", "Medium"],
    features: ["Accepts cats", "Exotic pets", "Medication admin", "Vet tech background"],
    reviewsList: [
      { author: "Lisa W.", initials: "LW", rating: 5, text: "Sophie is the only person I trust with my parrot. She knows exactly how to handle birds!", petInfo: "African Grey Parrot, 8 years", date: "2 weeks ago" },
      { author: "Tom B.", initials: "TB", rating: 5, text: "Amazing with our two cats. She sent adorable photos every day.", petInfo: "2 Persian Cats, 3 & 5 years", date: "1 month ago" },
    ],
    availability: { 1: "available", 2: "available", 3: "available", 4: "available", 5: "booked", 6: "booked", 7: "available", 8: "available", 9: "available", 10: "booked", 11: "available", 12: "available", 13: "available", 14: "available", 15: "booked", 16: "available", 17: "available", 18: "available", 19: "available", 20: "available", 21: "available", 22: "booked", 23: "available", 24: "available", 25: "available", 26: "available", 27: "available", 28: "available", 29: "booked", 30: "available" },
  },
  {
    id: "alex-patel",
    name: "Alex Patel",
    initials: "AP",
    rating: 4.88,
    reviews: 143,
    specialty: "Puppy & senior dog expert",
    price: 40,
    distance: 4.1,
    responseTime: "< 1 hour",
    location: "Hoboken, NJ",
    badges: ["Verified"],
    services: [
      { name: "Overnight Boarding", description: "Specialized care for puppies and senior dogs with tailored routines.", price: 40, unit: "night" },
      { name: "Dog Walking", description: "Gentle walks adapted to your dog's pace and needs.", price: 18, unit: "walk" },
      { name: "Doggy Day Care", description: "Supervised play and rest cycles perfect for young and old pups.", price: 32, unit: "day" },
    ],
    bio: "Former veterinary assistant with a passion for puppies and senior dogs. I understand the unique needs of both life stages and provide customized care plans.",
    homeDescription: "Ground-floor condo with easy access for senior dogs. Baby-gated rooms for puppy safety.",
    repeatClients: 68,
    totalBookings: 567,
    responseRate: 95,
    memberSince: "2021",
    petSizes: ["Small", "Medium", "Large"],
    features: ["Puppy specialist", "Senior dog care", "Medication admin", "Ground floor access"],
    reviewsList: [
      { author: "Karen H.", initials: "KH", rating: 5, text: "Alex was wonderful with our 14-year-old lab. So patient and caring!", petInfo: "Labrador, 14 years", date: "3 weeks ago" },
    ],
    availability: { 1: "booked", 2: "booked", 3: "available", 4: "available", 5: "available", 6: "available", 7: "available", 8: "available", 9: "available", 10: "available", 11: "booked", 12: "available", 13: "available", 14: "available", 15: "available", 16: "available", 17: "booked", 18: "available", 19: "available", 20: "available", 21: "available", 22: "available", 23: "available", 24: "booked", 25: "available", 26: "available", 27: "available", 28: "available", 29: "available", 30: "available" },
  },
  {
    id: "rachel-foster",
    name: "Rachel Foster",
    initials: "RF",
    rating: 4.96,
    reviews: 401,
    specialty: "Multi-pet household expert",
    price: 50,
    distance: 1.9,
    responseTime: "< 30 min",
    location: "Park Slope, Brooklyn",
    badges: ["Verified", "Top Rated", "Super Sitter"],
    services: [
      { name: "Overnight Boarding", description: "Welcome up to 3 pets from the same family at a discount.", price: 50, unit: "night" },
      { name: "House Sitting", description: "Full-time care in your home with daily updates and photos.", price: 60, unit: "night" },
      { name: "Dog Walking", description: "Group-friendly walks for multi-dog households.", price: 22, unit: "walk" },
      { name: "Drop-In Visits", description: "Perfect for multi-pet homes needing check-ins.", price: 20, unit: "visit" },
    ],
    bio: "I grew up on a farm with dogs, cats, horses, and chickens! I'm completely comfortable managing multi-pet households and ensuring every animal gets individual attention.",
    homeDescription: "Large brownstone with private garden. Two resident dogs who love making friends. Separate quiet space available for shy pets.",
    repeatClients: 88,
    totalBookings: 1823,
    responseRate: 100,
    memberSince: "2017",
    petSizes: ["Small", "Medium", "Large"],
    features: ["Fenced yard", "Multi-pet discount", "Accepts cats", "Has resident dogs"],
    reviewsList: [
      { author: "Nina S.", initials: "NS", rating: 5, text: "Rachel took care of our 2 dogs and cat simultaneously. All three came home happy and healthy!", petInfo: "2 Labs + 1 Cat", date: "1 week ago" },
      { author: "James F.", initials: "JF", rating: 5, text: "The garden is amazing for dogs. Rachel is like a pet whisperer!", petInfo: "French Bulldog, 2 years", date: "2 weeks ago" },
      { author: "Olivia D.", initials: "OD", rating: 5, text: "Best pet sitter in Brooklyn, hands down. We've been using Rachel for 3 years.", petInfo: "Dachshund, 6 years", date: "1 month ago" },
    ],
    availability: { 1: "available", 2: "available", 3: "available", 4: "booked", 5: "booked", 6: "booked", 7: "available", 8: "available", 9: "available", 10: "available", 11: "available", 12: "available", 13: "available", 14: "available", 15: "available", 16: "booked", 17: "available", 18: "available", 19: "available", 20: "available", 21: "available", 22: "available", 23: "available", 24: "available", 25: "available", 26: "booked", 27: "booked", 28: "available", 29: "available", 30: "available" },
  },
];
