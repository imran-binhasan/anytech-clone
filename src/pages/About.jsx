const About = () => {
  return (
    <div className="h-[600px] max-w-6xl mx-auto border px-2 flex justify-between items-center">
      <div className="pb-10 flex flex-col items-start justify-start space-y-6">
        <h4 className="text-blue-400 font-bold text-lg">POWERING THE FUTURE OF FINANCE</h4>
        <h3 className="text-5xl font-semibold mx-left">Uncovering new ways to delight customers</h3>
        <p className="font-semibold">
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-gray-700">
        Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
        </p>
      </div>
      <div>
        <img src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format" alt="" />
      </div>
    </div>
  );
};

export default About;
