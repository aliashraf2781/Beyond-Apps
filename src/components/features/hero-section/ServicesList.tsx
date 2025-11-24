"use client";
import { FaChartLine, FaHeadset, FaLock, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ServicesList() {
  const services = [
    { text: "SEARCH", icon: FaChartLine },
    { text: "LISTEN", icon: FaHeadset },
    { text: "APPLY", icon: FaLock },
    { text: "TRACK", icon: FaEye },
  ];

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1224);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="space-y-4 grid grid-cols-2 md:grid-cols-1 gap-4 w-fit mx-auto">
      {services.map((service, i) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start justify-start gap-4 transition-all duration-300"
          >
            {isDesktop && (
              <Icon className="text-2xl md:text-3xl text-foreground" />
            )}
            {!isDesktop && (
              <Icon className="text-2xl md:text-3xl text-foreground" />
            )}

            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground uppercase">
              {service.text}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
