import UcData from '../../assets/UsecasesData/UcData';
import ActionButton from '../ActionButton';

function TextSection() {
  return (
    <div className="relative flex flex-col w-full gap-2 xsm:gap-3.5 xsm:text-start text-center">
      <h5 className="text-base xsm:text-[19px] text-orange font-elzaMedium">
        Use Cases
      </h5>
      <h3 className="font-elzaSemibold text-[25px] xsm:text-[32px] sm:text-[40px] xl:text-[53px] leading-7 xsm:leading-[36px] sm:leading-[46px] xl:leading-[60px] lg:text-start mb-8 text-BoldBlack">
        What can GenPPT <br /> generate<span className='font-bold font-manrope'>?</span>
      </h3>
      <div className="flex flex-wrap gap-y-10 gap-x-4 xl:gap-x-[30px] md:max-w-[430px] lg:max-w-[654px] mb-[31px] xl:mb-[69px]">
        {UcData.map((item) => (
          <div
            key={item.id}
            className="max-w-[320px] sm:max-w-[300px] md:max-w-[200px] lg:max-w-[270px] xl:max-w-[300px] flex flex-col text-start gap-1 xsm:gap-2.5"
          >
            <img src={item.icon} alt={item.title} width={35} />
            <h5 className="font-elzaMedium text-[18px] lg:text-[23px] text-BoldBlack">
              {item.title}
            </h5>
            <p className="text-base md:text-sm lg:text-base text-textBlackColor font-elzaNormal">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full md:justify-start">
        <ActionButton
          desktopLabel="Start generating"
          mobileLabel="Get started"
          color="secondary"
          size="xxl"
        />
      </div>
    </div>
  );
}

export default TextSection;
