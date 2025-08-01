// data/faq.ts
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What is home health care?",
    answer:
      "Home health care provides skilled medical services in the comfort and privacy of your home.",
    category: "General",
  },
  {
    id: "2",
    question: "Who qualifies for home health services?",
    answer:
      "Patients typically qualify if they need skilled nursing or therapy services, have difficulty leaving the home and are under a doctor's care.",
    category: "Eligibility",
  },
  {
    id: "3",
    question: "Do I need a referral from my doctor?",
    answer:
      "Yes. Home health requires a referral from your physician. However, we can help coordinate this for you. Contact our office, and we'll guide you through the process from start to finish.",
    category: "Getting Started",
  },
  {
    id: "4",
    question: "Do you provide non-medical or personal care?",
    answer:
      "No, we focus exclusively on skilled medical services. If you need help with bathing, dressing, or housekeeping, we're happy to refer you to trusted local caregiving partners.",
    category: "Services",
  },
  {
    id: "5",
    question: "How do I start home health services?",
    answer:
      "You or your doctor can contact us directly. Once we receive your referral, we can usually verify eligibility on the same business day. Some insurance plans require authorization, which may take 24-48 hours. Once verified, we'll schedule your first visit. Contact us at (800) 553-2892 or referrals@allnurseshomehealth.com to begin.",
    category: "Getting Started",
  },
  {
    id: "6",
    question: "Can I choose my home health agency?",
    answer:
      "Yes. Patients always have the right to choose their home health provider. Let your doctor or discharge planner know you would like All Nurses Home health, and we'll take care of the rest.",
    category: "General",
  },
  {
    id: "7",
    question: "How often will the nurse visit me?",
    answer:
      "Visit frequency depends on your specific needs and the physician's orders.",
    category: "Services",
  },
  {
    id: "8",
    question: "Who pays for home health services?",
    answer:
      "We accept most commercial insurance plans and private pay. Coverage varies by plan. We will verify your benefits before service begins. Please contact us to discuss private pay rates and options.",
    category: "Payment",
  },
  {
    id: "9",
    question: "Do you accept Medicare or Medicaid?",
    answer:
      "At this time, we do not accept Medicare or Medicaid. We work with a variety of private insurance plans and also offer private pay options for those without coverage.",
    category: "Payment",
  },
  {
    id: "10",
    question: "What makes your agency different?",
    answer:
      "We are nurse-owned, locally based, and patient-driven. Our nurses are wound care certified. We deliver highly personalized care with a strong focus on safety, comfort, and healing. Our culture is built on integrity, compassion, and clinical excellence.",
    category: "About Us",
  },
  {
    id: "11",
    question: "What areas do you serve?",
    answer:
      "Our service area includes Travis County and the surrounding counties of Bastrop, Caldwell, Williamson, Hays, Burnet, and Blanco. If you're unsure whether you're in our service area, give us a call—we're happy to help.",
    category: "Service Area",
  },
  {
    id: "12",
    question:
      "Do you offer Home Health Aides, Physical Therapy, Occupational Therapy, or Speech Therapy?",
    answer:
      "Currently, we do not offer home health aide services, physical therapy, occupational therapy, or speech therapy. However, we are actively working to expand our services and plan to offer these in the near future. Stay connected with us for updates, or contact us at (800) 553-2892 if you'd like to be notified when these services become available.",
    category: "Services",
  },
];
