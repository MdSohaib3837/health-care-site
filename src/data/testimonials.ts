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
      "All Nurses Home Health has been nothing short of outstanding in my husband’s wound care needs. His nurse truly cares about her patients and is very thorough with her experience and explanation of the whole healing process.",
    author: "Sarah M.",
    rating: 5,
    location: "K.S. Bastrop, TX",
  },
  {
    id: "2",
    content:
      "All Nurses Home Health took care of me after a major surgery. I was very impressed with their professionalism & knowledge. My nurse answered all of my questions & if she didn’t know the answer she researched & promptly got back to me with an answer. I am going to have another surgery next year so I plan to request their services again. I can’t recommend them more highly!!",
    author: "Robert K.",
    rating: 5,
    location: "L.K. Austin, TX",
  },
  {
    id: "3",
    content:
      "The Nurse who treated my wounds was outstanding. The way she explained the healing process and preparation to prevent infection was very thorough. Her soft touch was very comforting. She had an answer for every question that was asked. I appreciate her patience and caring touch.",
    author: "Maria L.",
    rating: 5,
    location: "M.M. Austin, TX",
  },
  {
    id: "4",
    content:
      "All Nurses Home Health is amazing! They have extremely skilled nurses and  great communication. They always let me know ahead of time when they would be arriving so I could plan the rest of my day. They care about their patients and take the time to explain everything they will be doing that visit. The nurses are so personable and sweet and I am lucky to have them!",
    author: "Jennifer P.",
    rating: 5,
    location: "C.B. Austin, TX",
  },
  {
    id: "5",
    content:
      "I recently received Home Wound care from All Nurses Home Health. My nurse made me feel at peace with her constant feedback on my healing process. Her knowledge, skill and patience to my wound and my well being gave me confidence in my recovery. She ensured I was well stocked with supplies and each visit was planned ahead with our busy schedules .I highly recommend their services. Thank you again for all that you did me and all your patience. ❤",
    author: "David R.",
    rating: 5,
    location: "S.G. Buda, TX",
  },
  {
    id: "6",
    content:
      "All Nurses Home Health was a tremendous help after my hospital stay. I had multiple wounds that were difficult to treat due to my paralysis. My nurse always evaluated the wounds to determine the best care with tremendous knowledge of wound treatment and a positive attitude. She is one of the best nurses I have ever worked with.",
    author: "Linda S.",
    rating: 5,
    location: "T.H Kyle, TX",
  },
];
