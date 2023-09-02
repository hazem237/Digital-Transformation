import React from "react";
import { FaArrowDown } from "react-icons/fa";

const HomePage = () => {
  const backgroundImageUrl =
    "https://hbr.org/resources/images/article_assets/2019/02/Mar19_11_825412904.jpg";

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={backgroundStyle}
    >
      <h1 className="text-4xl font-bold text-white mb-4 mt-10 ">
        {" "}
        <span className="text-blue-200">Digital</span> Transformation
      </h1>
      <p className="text-lg text-white text-center mb-8">
        اكتشف عالمًا جديدًا من الممكنيات الرقمية معنا.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        من نحن
      </button>
      <div className="mt-4 animate-bounce">
        <FaArrowDown className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default HomePage;
