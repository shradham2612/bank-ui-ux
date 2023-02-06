import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const grawh = {
  background: " rgba(255, 255, 255, 0.6)",
  filter: "blur(750px)",
};
const grapi = {
  background: "linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%)",
  filter: "blur(900px)",
};

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div
        className="absolute z-[3] -left-1/2  w-[50%] h-[50%] rounded-full "
        style={grawh}
      ></div>
      <div
        className="absolute z-[0] -left-1/2  w-[50%] h-[50%] rounded-full "
        style={grapi}
      ></div>

      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          srcset=""
          className="w-[100%] h-[100%] relative z-[5] "
        />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing and
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          earum, quod ut quibusdam dicta deserunt autem vel tenetur quisquam,
          placeat asperiores eaque beatae iure ab, adipisci animi.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 border-indigo-500/100">
          <img
            src={google}
            alt="google store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer "
          />
          <img
            src={apple}
            alt=" apple store "
            className="w-[128px] h-[42px] object-contain  cursor-pointer "
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
