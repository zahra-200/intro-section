import imageMobileContent from "./../../images/image-hero-mobile.png";
import imageDesktopContent from "./../../images/image-hero-desktop.png";
import icon1 from "./../../images/client-databiz.svg";
import icon2 from "./../../images/client-audiophile.svg";
import icon3 from "./../../images/client-meet.svg";
import icon4 from "./../../images/client-maker.svg";
function Content() {
  return (
    <div className="flex flex-col justify-center  h-screen w-full text-center mt-6 sm:flex-row-reverse sm:text-left  sm:justify-around lg:justify-center ">
      <picture className="sm:w-[40%] lg:w-[30%] lg:ml-10">
        <source media="(min-width: 640px)" srcSet={imageDesktopContent} />
        <img src={imageMobileContent} alt="image-hero" />
      </picture>
      <div className="flex flex-col  items-center sm:w-[50%] sm:items-start lg:w-[40%] lg:mr-10">
        <div>
          <h1 className="text-3xl font-bold text-[var(--Almost-Black)] mt-8 sm:text-6xl sm:mt-0 sm:w-[370px] lg:text-7xl lg:w-[440px]">
            Make remote work
          </h1>
          <p className="tracking-wide text-sm font-medium text-[var(--Medium-Gray)] w-[270px] mt-4 sm:w-[300px] sm:mt-10 ">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </div>
        <div className="w-full mt-6 sm:mt-10 ">
          <button
            type="button"
            className="bg-[var(--Almost-Black)] text-[var(--Almost-White)] rounded-xl w-[112px] pb-3 pt-2 text-center text-sm font-bold  border border-[var(--Almost-black)] hover:bg-[var(--Almost-white)] hover:text-[var(--Almost-black)] transition-all duration-200 "
          >
            Learn more
          </button>
        </div>
        {/* footer */}
        <div className="flex justify-around items-center pt-8 px-2 w-full sm:justify-between sm:p-0 sm:m-0 sm:mt-20 sm:w-[90%] lg:w-[65%] ">
          <img src={icon1} alt="databiz" className="w-[17%]" />
          <img src={icon2} alt="audiophile" className="w-[17%]" />
          <img src={icon3} alt="meet" className="w-[17%]" />
          <img src={icon4} alt="maker" className="w-[17%]" />
        </div>
      </div>
    </div>
  );
}

export default Content;
