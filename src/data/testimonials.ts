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
    author: "Katherine",
    rating: 5,
    location: "Bastrop, TX",
  },
  {
    id: "2",
    content:
      "All Nurses Home Health took care of me after a major surgery. I was very impressed with their professionalism & knowledge. My nurse answered all of my questions & if she didn’t know the answer she researched & promptly got back to me with an answer. I am going to have another surgery next year so I plan to request their services again. I can’t recommend them more highly!!",
    author: "Lisa",
    rating: 5,
    location: "Austin, TX",
  },
  {
    id: "3",
    content:
      "This Nurse owned company is the best for Home Health Care! The Nurses are compassionate, caring, and super knowledgeable! I would highly recommend this company for yourself, a loved one or another person who needs an At Home Nursing Service. Thank you so much ladies!",
    author: "Elizabeth",
    rating: 5,
    location: "Cedar Park, TX",
  },
  {
    id: "4",
    content:
      "The nurse that treated my wounds was outstanding. The way she explained the healing process and preparation to help prevent infection was very thorough. Her soft touch when changing my dressing was very comforting. She had an answer for every question that I asked. I appreciate her patience and caring touch.",
    author: "Mike",
    rating: 5,
    location: "Austin, TX",
  },
  {
    id: "5",
    content:
      "I recently received home wound care from All Nurses Home Health. My nurse made me feel at peace with her constant feedback on my healing process. Her knowledge, skill and patience to my wound and my well being gave me confidence in my recovery. She ensured I was well stocked with supplies and each visit was planned ahead with our busy schedules .I highly recommend their services. Thank you again for all that you did me and all your patience. ❤",
    author: "Sylvia",
    rating: 5,
    location: "Buda, TX",
  },
  {
    id: "6",
    content:
      "My nurse is amazing! She is extremely skilled and has great communication. She always lets me know ahead of time when she will be arriving so I can plan the rest of my day. She cares about her patients and takes the time to explain everything that she will be doing that visit. She is so personable and sweet. I am lucky to have her as my nurse!",
    author: "Carley",
    rating: 5,
    location: "Austin, TX",
  },
  {
    id: "7",
    content:
      "I cannot say enough wonderful things about All Nurses Home Health and the incredible care they provided me. After undergoing multiple amputations, I was overwhelmed and unsure of how l would manage the road to recovery. From day one, they brought professionalism, compassion, and a level of care that truly went above and beyond anything I ever expected. My nurse treated me with dignity, respect, and kindness , never rushing, always listening, and always advocating for my comfort and healing. Her skill as a nurse is unmatched . she was thorough, attentive, and made sure every wound was properly cared for, every concern addressed. But more than that, she brought me peace of mind during one of the most difficult times of my life. She gave me hope when I had very little. She is a true angel in scrubs and a credit to the nursing profession. Thanks to All Nurses Home Health, not only did I heal physically, but I felt supported emotionally every step of the way. They truly changed my life. Thank you.",
    author: "Ross",
    rating: 5,
    location: "Kyle, TX",
  },
  {
    id: "8",
    content:
      "All Nurses Home Health was a tremendous help after my hospital stay. I had multiple wounds that were difficult to treat due to my paralysis. My nurse consistently evaluated my wounds to determine the best care. She had tremendous knowledge of wound treatment and always had a positive attitude. She is one of the best nurses I have ever worked with.",
    author: "Terry",
    rating: 5,
    location: "Kyle, TX",
  },
  {
    id: "9",
    content:
      "Rebekah was my wound care nurse for over a year. She has the ability to assess the wound and suggest different teatments, especially when the wound healing process has stalled. My skin disease, Pyoderma Gangrenosum, is rare but Rebekah took her time to research all different types of care. She does an excellent job at time management and is a problem solver. Highly recommended!",
    author: "Pat",
    rating: 5,
    location: "Austin, TX",
  },
  // {
  //   id: "10",
  //   content:
  //     "Rebekah was my wound care nurse for over a year. She has the ability to assess the wound and suggest different teatments, especially when the wound healing process has stalled. My skin disease, Pyoderma Gangrenosum, is rare but Rebekah took her time to research all different types of care. She does an excellent job at time management and is a problem solver. Highly recommended!",
  //   author: "Pat",
  //   rating: 5,
  //   location: "Austin, TX",
  // },
];
