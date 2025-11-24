"use client";
import { FaChartLine, FaUserTie, FaHeadset, FaLock, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServicesList() {
  const services = [
    { text: "Comprehensive Market Analysis", icon: FaChartLine },
    { text: "Personalized Investment Strategies", icon: FaUserTie },
    { text: "24/7 Customer Support", icon: FaHeadset },
    { text: "Secure and Transparent Transactions", icon: FaLock },
    { text: "Real-time Portfolio Tracking", icon: FaEye },
  ];

  return (
    <div className="space-y-4">
      {services.map((service, i) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="
              flex items-center gap-4
              p-4 rounded-4xl
              bg-foreground text-white
              hover:bg-accent
              transition-all duration-300
              shadow-lg hover:shadow-xl
              cursor-pointer
            "
          >
            <Icon className="text-2xl text-blue-200" />
            <p className="text-lg font-medium">{service.text}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
