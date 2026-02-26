import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(228.87deg,#e3eaff_25.93%,#eee2d9_51.91%,#e9d3fd_78.77%)]">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <span className="text-gray-500 text-sm font-medium">Loading...</span>
      </motion.div>
    </div>
  );
};

export default PageLoader;
