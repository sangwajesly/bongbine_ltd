import {
  BarChart3,
  Building2,
  Factory,
  Home,
  Package,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export const services = [
  {
    title: "Real Estate & Development",
    description:
      "Strategic real estate development, property sales and joint-venture advisory across Cameroon.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Construction & Project Delivery",
    description:
      "Design-to-delivery construction services for residential, commercial and infrastructure projects.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Land & House Sales",
    description:
      "Trusted brokerage and development of land parcels and finished homes in Douala, Yaoundé and coastal regions.",
    icon: Package,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Building Materials Supply",
    description:
      "Competitive sourcing and reliable delivery of high-quality construction materials — logistics support available.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c2d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Logistics (Materials Supply)",
    description:
      "Support services for transporting and handling construction materials within Cameroon and neighboring markets.",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1517048676731-6f8f2b2288b0?auto=format&fit=crop&w=1200&q=80",
  },
];

export const projects = [
  {
    title: "Kribi Logistics & Materials Yard",
    location: "Kribi, Littoral",
    category: "Materials & Logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    description:
      "A strategic materials hub supporting coastal projects with bonded storage and direct port access.",
  },
  {
    title: "Bonapriso Residence",
    location: "Douala, Littoral",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    description:
      "A premium residential development offering modern apartments and secure living across Douala.",
  },
  {
    title: "Messa Commercial Hub",
    location: "Yaoundé, Centre",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description:
      "Purpose-built commercial facility for SMEs, logistics and regional offices in the capital.",
  },
  {
    title: "Buea Industrial Park Phase I",
    location: "Buea, South-West",
    category: "Construction",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    description:
      "An industrial precinct designed to support manufacturing, storage and distribution for regional markets.",
  },
];

export const galleryItems = [
  {
    title: "Site execution — Douala",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Residential development — Bonapriso",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Materials yard — Kribi",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Corporate office — Yaoundé",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
];

export const features = [
  {
    title: "Experience",
    description:
      "Decades of delivery across Cameroon’s major urban and coastal projects.",
    icon: BarChart3,
  },
  {
    title: "Professionalism",
    description:
      "Disciplined teams, transparent communication and accountable leadership at every stage.",
    icon: ShieldCheck,
  },
  {
    title: "Quality",
    description:
      "Premium standards shaped by strong supplier relationships and technical oversight.",
    icon: Sparkles,
  },
  {
    title: "Reliable Delivery",
    description:
      "Projects move forward with focus, resilience and a strong delivery culture.",
    icon: Users,
  },
];

export const testimonials = [
  {
    quote:
      "Bongbine delivered with clarity, pace and integrity. Their team understands how to turn ambition into outcomes.",
    name: "Amina Ngassa",
    role: "Operations Director, Meridian Cameroon",
  },
  {
    quote:
      "Their professionalism and commitment to quality were evident from day one. The project exceeded expectations.",
    name: "Jean-Pierre Nde",
    role: "Managing Partner, Douala Holdings",
  },
];

export const faqs = [
  {
    question: "Which regions does Bongbine serve?",
    answer:
      "We operate across Cameroon with a focus on Douala, Yaoundé, Kribi and the South-West coastal corridor.",
  },
  {
    question: "Can Bongbine support both large-scale and bespoke projects?",
    answer:
      "Yes. We tailor our approach to each engagement, whether it is a residential community, commercial hub or industrial facility.",
  },
  {
    question: "Do you provide materials supply and logistics?",
    answer:
      "Yes. We source construction materials and can arrange local logistics to support site delivery and storage.",
  },
];

export const stats = [
  { value: "18+", label: "Years of regional delivery" },
  { value: "90+", label: "Completed ventures" },
  { value: "4", label: "Major cities served" },
  { value: "97%", label: "Client retention" },
];
