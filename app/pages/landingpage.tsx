'use client';

import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome to our Restaurant!</h1>
      <div>Hello</div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Animated content
      </motion.div>
    </div>
  );
}