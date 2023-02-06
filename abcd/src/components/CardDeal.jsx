import React from 'react'
import { card } from '../assets'
import styles ,{layout} from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          dolores voluptates, corporis nam voluptate laborum nobis ipsum cum
          tempore beatae, esse dolore minus eveniet et.
        </p>

        <Button styles="mt-13" />
      </div>

      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="card"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%] rounded-full white-gradient" />
        <div className="absolute z-[0] -right-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink-gradient" />
      </div>
    </section>
  );
}

export default CardDeal