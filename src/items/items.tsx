interface TestimonialItem {
  avatar: string;
  name: string;
  rating: number;
  message: string;
}

export const Testimonials: TestimonialItem[] = [
  {
    avatar: "/lebron_avatar.png",
    name: "Great Dane",
    rating: 4,
    message:
      "Working with GGROWW has been a game-changer for our business. Their team helped us increase our online visibility, and within just a few months, we saw a 40% boost in website traffic and a significant increase in lead generation. Their SEO and social media strategies are spot-on, and the communication is always clear and timely. Highly recommend!",
  },
  {
    avatar: "/penguin_avatar.png",
    name: "Golden Joe",
    rating: 5,
    message:
      "The team at GGROWW truly understands digital marketing. They took the time to understand our goals and crafted a custom strategy that worked wonders. Not only did we see a boost in our online presence, but they were also always available for questions, offering clear explanations and expert advice. Great experience overall!",
  },
  {
    avatar: "/pirate_avatar.png",
    name: "German John",
    rating: 5,
    message:
      "Overall, GGROWW delivered decent results, and we did see improvements in our social media engagement. However, the project took a bit longer than expected, and we had to follow up a few times for updates. That said, their team is knowledgeable, and I believe with better communication, they can achieve great results for other businesses.",
  },
];

interface BrandListItem {
  title: string;
  img: string;
}

export const ListOfBrands: BrandListItem[] = [
  {
    title: "Nike",
    img: "/nike.png",
  },
  {
    title: "Novoma",
    img: "/novoma.png",
  },
  {
    title: "Apple",
    img: "/apple.png",
  },
  {
    title: "Burger King",
    img: "/burgerking.png",
  },
  {
    title: "Chipotle",
    img: "/chipotle.png",
  },
  {
    title: "Coka Cola",
    img: "/cokacola.png",
  },
  {
    title: "The North Face",
    img: "/thenorthface.png",
  },
  {
    title: "Nestle",
    img: "/nestle.png",
  },
];
