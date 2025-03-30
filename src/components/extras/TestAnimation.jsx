import { motion } from "framer-motion";

const TestAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: "20px", background: "#f0f0f0", marginTop: "20px" }}
    >
      This should animate!
    </motion.div>
  );
};

export default TestAnimation;
