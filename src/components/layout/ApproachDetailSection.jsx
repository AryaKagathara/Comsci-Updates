import Image from "next/image";
import quote from "@/../public/images/quote-img.svg";
import approachData from "../../files/approach.json"; // Import local JSON

const ApproachDetailSection = () => {
  return (
    <div className="approach_details">
      <div className="container">
        <div className="approach_heading" data-scroll data-scroll-speed=".2">
          <h1>
            From Brand Identity to Smart Technology. Your Digital Journey Starts Here.
          </h1>
          <p>We believe in a holistic approach. Whether you're launching a brand, building a website, or scaling with AI, every service we offer flows together seamlessly giving your business a solid digital foundation with measurable impact.</p>
        </div>
        <div className="approach_wrap">
          {approachData.map((approach, index) => (
            <div className="test_sec" data-scroll data-scroll-speed={approach.scrollSpeed} key={index}>
              <div className="appro_wrap">
                <div className="image">
                  <Image src={approach.image} alt="quote" quality={100} width={1000} height={1000} />
                </div>
                <div className="contentbox">
                  <h2>{approach.no}. {approach.quote}</h2>
                  <p>{approach.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApproachDetailSection;