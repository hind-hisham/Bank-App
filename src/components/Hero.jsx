import styles from "../style";
import {discount ,robot} from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For {' '} <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[72px]">
            The Next <br className="sm:block hidden"/> {' '} <span className="text-gradient">Generation</span>{' '}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Payment Method.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium architecto consequatur repellendus! Repudiandae reprehenderit laborum ipsa molestias beatae eligendi laudantium, nesciunt quis ducimus ad neque!</p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} relative md:my-0 my-10`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] z-10 relative" />
        <div className="absolute top-0 z-[1] w-[40%] h-[35%] pink__gradient opacity-70"></div>
        <div className="absolute    bottom-0 z-[0] w-[80%] h-[80%] white__gradient rounded-full opacity-50"></div>
        <div className="absolute z-[1] w-[50%] h-[50%] right-20 blue__gradient top-2"></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )


export default Hero