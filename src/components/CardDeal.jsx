import styles,{layout} from "../style"
import { card } from "../assets"
import Button from './Button'
const CardDeal =()=> (
  <section className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      find a batter card deal <br className='sm:block hidden'/> in few easy staps.
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maxime vitae enim ipsam nulla eos commodi accusantium. Excepturi, enim? Sunt in tempora reprehenderit aspernatur, odio porro aliquid. Facere, natus nulla.
    </p> 
    <Button styles='mt-10'/>
  </div>
  <div className={layout.sectionImgReverse}>
    <img src={card} alt="card" className='w-[100%] h-[100%] relative z-10'/>
    <div className='absolute z-[3] -right-1/4 top-0 w-[50%] h-[50%] rounded-full white__gradient opacity-40'></div>
    <div className='absolute z-[0] -right-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient opacity-60'></div>
  </div>
</section>
)

export default CardDeal