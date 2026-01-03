import { Mail, MapPin, Phone } from "lucide-react";

const contacts = [
  {
    url: "https://www.google.com/maps/search/?api=1&query=118/32/11A+Thạnh+Xuân+38,+Thới+An,+Hồ+Chí+Minh",
    name: "118/32/11A – Thạnh Xuân 38, P. Thới An, TP. Hồ Chí Minh",
    icon: MapPin,
  },
  {
    url: "tel:+84915571980",
    name: "+ 84 91 557 1980",
    icon: Phone,
  },
  {
    url: "tel:+84913024168",
    name: "+84 91 302 4168",
    icon: Phone,
  },
  {
    url: "mailto:ceo@anhuygloballink.com",
    name: "ceo@anhuygloballink.com",
    icon: Mail,
  },
];

const services = {
  heading: "Dịch vụ",
  content: [
    {
      id: "1",
      name: "Vận chuyển hàng hoá nhanh",
    },
    {
      id: "2",
      name: "Du lịch chuyên chuyến Trung Quốc",
    },
    {
      id: "3",
      name: "Tư vấn thương mại quốc tế",
    },
  ],
};

const abouts = {
  heading: "Về An Huy Global Link",
  content: [
    {
      id: "1",
      name: "Về chúng tôi",
    },
    {
      id: "2",
      name: "Tại sao chọn chúng tôi",
    },
  ],
};

export { contacts, services, abouts };
