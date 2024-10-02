import Data from "@data/sections/hero-1.json";

const HeroOne = () => {
  return (
    <>
      {/* banner */}
      <section className="mil-side-banner mil-center">
        <div className="mil-banner-top mil-up"></div>
        <div className="mil-banner-title">
          <div className="mil-upper mil-dark mil-up mil-mb-30">
            {Data.subtitle}
          </div>
          <h1
            className="mil-up mil-mb-30"
            dangerouslySetInnerHTML={{ __html: Data.title }}
          />
          <p className="mil-upper mil-dark mil-up">{Data.description}</p>
        </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default HeroOne;
