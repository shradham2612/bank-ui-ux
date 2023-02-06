import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";


const mystyle = {
  background:
    "linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%)",
  filter: "blur(200px)",
};
const filler={ filter: "blur(900px)",};

const Testimonals = () => {
  return (
    <section
      id="clents"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full " style={mystyle} >
       
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relativ z-[1]">
        <h1 className={styles.heading2}>
          What people are <br className="sm:block hidden" /> saying about us
        </h1>

        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos
            laudantium quos possimus suscipit iste! Error deleniti culpa magni
            numquam, a iusto similique doloremque dicta.
          </p>
        </div>
      </div>

      <div
        className="flex flex-wrap sm:justify-start justify-center w- 
        full feedback-container relative z-[1]"
      >
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonals;
