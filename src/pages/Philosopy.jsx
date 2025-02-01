import { motion } from 'framer-motion';

const Philosopy = () => {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-blue-50 to-white">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Human-centred innovation
      </h2>

      <div className="relative max-w-5xl mx-auto p-10 bg-white shadow-lg rounded-3xl flex flex-col sm:flex-row items-center gap-8">
        {/* Left Section */}
        <motion.div 
          className="bg-blue-100 p-6 rounded-xl shadow-md w-80 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-blue-600 text-sm font-semibold">CORE TECH</p>
          <h3 className="text-2xl font-bold text-blue-900">Artificial Intelligence</h3>
          <p className="text-gray-600 text-sm mt-2">Using AI/ML to upgrade legacy processes, reduce cost, and improve efficiency.</p>
        </motion.div>

        {/* Center Section */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-md w-64 text-center border border-gray-200"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-orange-500 text-sm font-semibold">MECHANISM</p>
          <h3 className="text-2xl font-bold text-gray-900">Blockchain</h3>
          <p className="text-gray-600 text-sm mt-2">Enhanced security by eliminating intermediaries.</p>
        </motion.div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          <motion.div 
            className="bg-blue-100 p-6 rounded-xl shadow-md w-80 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-teal-500 text-sm font-semibold">INFRASTRUCTURE</p>
            <h3 className="text-2xl font-bold text-blue-900">Cloud</h3>
            <p className="text-gray-600 text-sm mt-2">Scale resources easily on-demand.</p>
          </motion.div>
          
          <motion.div 
            className="bg-yellow-100 p-6 rounded-xl shadow-md w-80 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-yellow-500 text-sm font-semibold">RESOURCE</p>
            <h3 className="text-2xl font-bold text-yellow-900">Data</h3>
            <p className="text-gray-600 text-sm mt-2">Valuable, actionable insights from massive data sources.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosopy;