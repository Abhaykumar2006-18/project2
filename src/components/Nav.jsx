import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500  ${
        scrolled
          ? "py-3 bg-black/90 backdrop-blur-2xl border-b border-cyan-500/10 shadow-[0_8px_40px_rgba(0,255,255,0.08)]"
          : "py-5 bg-black/90 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
          <div className="absolute -inset-4 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

            <h1 className="relative cursor-pointer flex flex-col leading-none">
                   <span className="font-Cinzel text-2xl md:text-3xl font-black tracking-wider bg-gradient-to-r from-cyan-300 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                       Rich Men
                    </span>

                    <span className="text-[12px] tracking-[6px] text-gray-400 uppercase font-bold mx-1">
                         Guru
                    </span>
            </h1>
          </motion.div>

          {/* Desktop Nav */}
          <motion.nav
  variants={container}
  initial="hidden"
  animate="show"
  className="hidden md:flex items-center gap-10"
>
  {navLinks.map((link) => (
    <Link key={link.name} to={link.path}>
      <motion.button
        variants={item}
        onClick={() => setActive(link.name)}
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group font-Cinzel relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
      >
        {link.name}

        <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 shadow-[0_0_15px_#22d3ee] transition-all duration-300 group-hover:w-full" />

        {active === link.name && (
          <motion.div
            layoutId="activeNav"
            className="absolute left-0 -bottom-2 h-[2px] w-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]"
          />
        )}
      </motion.button>
    </Link>
  ))}
</motion.nav>

          {/* CTA */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(34,211,238,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="font-Cinzel px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold border border-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.35)]"
            >
              Consult
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden  text-cyan-400"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.35 }}
              className="md:hidden mt-5 overflow-hidden rounded-3xl border border-cyan-500/20 bg-black/70 backdrop-blur-2xl"
            >
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col p-6"
              >
                {navLinks.map((link) => (
  <Link
    key={link.name}
    to={link.path}
    onClick={() => {
      setActive(link.name);
      setIsOpen(false);
    }}
  >
    <motion.div
      variants={item}
      whileHover={{ x: 10 }}
      className={`py-4 text-lg transition-all font-Cinzel ${
        active === link.name
          ? "text-cyan-400"
          : "text-gray-300 hover:text-cyan-400"
      }`}
    >
      {link.name}
    </motion.div>
  </Link>
))}

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 25px rgba(34,211,238,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 font-Cinzel py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
                >
                  Consult
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}