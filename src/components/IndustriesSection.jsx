// components/IndustriesSection.js
import Link from "next/link";
import Image from "next/image";
import PrimaryBtn from '@/components/layout/PrimaryBtn';
import industriesData from '../files/industries.json';

const IndustriesSection = () => {
    // SEO: render synchronously so industries are crawlable at first paint, not after hydration.
    const industries = industriesData.slice(0, 3);

    if (!industries || industries.length === 0) {
        return null;
    }


	const handleMouseEnter = (event) => {
        event.currentTarget.querySelector('.textbox').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		event.currentTarget.querySelector('.img_box').style.filter = 'brightness(0.7)';

    };

    const handleMouseLeave = (event) => {
        event.currentTarget.querySelector('.textbox').style.backgroundColor = 'transparent';
		event.currentTarget.querySelector('.img_box').style.filter = 'brightness(1)';

    };



    return (
        <div className="industries">
            <div className="indus_wrap">
                <div className="title">Industries We Serve</div>
                <div className="indus_section">
                    {industries.map((industry) => (
                        <Link key={industry.id} href={`/industries/${industry.link}`} className="industries_imgtext">
                            <div className="img_box"> {/*This div is crucial for the sliding animation*/}
                                <Image
                                    src={industry.image}
                                    alt={industry.title}
                                    quality={100}
									width={1920} //Adjust width if needed
									height={590} //Adjust height if needed
                                    layout="responsive"
                                />
                            </div>
                            <div className="textbox">
                                <div className="img_text">
                                    <h5>{industry.title}</h5>
                                    <p><span>{industry.description}</span></p>
                                    <div className="btn_box">
                                        <strong>Learn more about {industry.title} Solutions</strong>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                    <div className="btn_wrap_block">
                        <PrimaryBtn name="View All Industries" arrow="no" link="/industries" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustriesSection;