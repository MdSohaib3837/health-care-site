// data/testimonials.ts
export interface Testimonial {
  id: string;
  content: string;
  author: string;
  rating: number;
  location?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    content:
      "I'm very happy with the care and patience that we've experienced with All Nurses Home Health. They are very knowledgeable and helpful with explaining the healing course and what to watch out for. We are grateful to have them guide us through this rehabilitating process.",
    author: "Sarah M.",
    rating: 5,
    location: "Austin, TX",
  },
  {
    id: "2",
    content:
      "All Nurses Home Health took care of me after a major surgery. I was very impressed with their professionalism & knowledge. My nurse answered all my questions. If she didn't know the answer, she researched & promptly got back to me with an answer. I can't recommend them more highly!!",
    author: "Robert K.",
    rating: 5,
    location: "Round Rock, TX",
  },
  {
    id: "3",
    content:
      "I cannot say enough wonderful things about All Nurses Home Health and the incredible care they provided me. After undergoing multiple amputations, I was overwhelmed and unsure of how l would manage the road to recovery. From day one, they brought professionalism, compassion, and a level of care that truly went above and beyond anything I ever expected.",
    author: "Maria L.",
    rating: 5,
    location: "Cedar Park, TX",
  },
  {
    id: "4",
    content:
      "This Nurse owned company is the best for Home Health Care! The Nurses are compassionate, caring, and super knowledgeable! I would highly recommend this company for yourself, a loved one or another person who needs an At Home Nursing Service.",
    author: "Jennifer P.",
    rating: 5,
    location: "Georgetown, TX",
  },
  {
    id: "5",
    content:
      "The nurse that treated my wounds was outstanding. The way she explained the healing process and preparation to help prevent infection was very thorough. Her soft touch when changing my dressing was very comforting. She had an answer for every question that was asked.",
    author: "David R.",
    rating: 5,
    location: "Pflugerville, TX",
  },
  {
    id: "6",
    content:
      "My nurse is amazing! She is extremely skilled and has great communication. She always lets me know ahead of time when she will be arriving so I can plan the rest of my day. She cares about her patients and takes the time to explain everything she will be doing that visit.",
    author: "Linda S.",
    rating: 5,
    location: "Leander, TX",
  },
];
