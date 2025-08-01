// data/services.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "skilled-nursing",
    title: "Skilled Nursing Services",
    description:
      "Comprehensive nursing care delivered by experienced registered nurses in the comfort of your home.",
    icon: "Stethoscope",
    category: "Primary Care",
    features: [
      "Coordination of Care / Care Plan Management",
      "Comprehensive Physical Assessment / Health Screening",
      "Home Safety Evaluation / Fall Prevention and Emergency Preparedness",
      "Pain Management",
      "Medication Administration, Education, and Management",
      "Diabetic Education and Management",
      "Chronic Disease Education and Management",
    ],
  },
  {
    id: "wound-care",
    title: "Advanced Wound Care",
    description:
      "Specialized wound management and healing protocols using the latest evidence-based practices.",
    icon: "Bandage",
    category: "Specialized Care",
    features: [
      "Managing Complex Wounds",
      "Compression Therapy",
      "Selective Sharp Debridement",
      "Wound V.A.C. Management",
      "Post-Surgical Recovery / Dressing Changes and Instruction",
      "Complication / Infection Prevention Instruction",
    ],
  },
  {
    id: "iv-therapy",
    title: "IV Therapy & Infusion",
    description:
      "Professional intravenous treatments and antibiotic administration in your home.",
    icon: "Syringe",
    category: "Specialized Care",
    features: [
      "IV Antibiotic Administration and Education",
      "Venipuncture/Lab Draws",
      "Instruction and Assistance with Injections",
      "IV line maintenance and care",
      "Infusion therapy monitoring",
    ],
  },
  {
    id: "specialized-care",
    title: "Specialized Care Services",
    description:
      "Comprehensive care for complex medical conditions and specialized equipment.",
    icon: "Heart",
    category: "Specialized Care",
    features: [
      "Ostomy Care and Instruction",
      "Gastrostomy Care and Instruction",
      "Catheter Care and Maintenance",
      "Tracheostomy care",
      "Ventilator management",
    ],
  },
];

export const serviceAreas = [
  "Travis County",
  "Bastrop County",
  "Caldwell County",
  "Williamson County",
  "Hays County",
  "Burnet County",
  "Blanco County",
];
