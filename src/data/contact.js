import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMail,
    title: "Email",
    value: "vkr70611@gmail.com",
    href: "mailto:vkr70611@gmail.com",
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: "+91 7061411553",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: "Delhi NCR, India",
    href: "#",
  },
];

export const socialLinks = [
  {
    icon: FiGithub,
    name: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    icon: FiLinkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
  },
];

export default contactInfo;