import Image from "next/image";
import Banner from "@/../public/images/banner-bg.webp";
import mobileBanner from "@/../public/images/banner-bg-mobile.webp";
import starBadge from "@/../public/images/vector_star.svg";
import Link from "next/link";

const HomeBanner = () => {
	return (
		<>
			<div className="banner">
				<div className="banner_bg_img">
					<Image src={Banner} alt="Innovative web and mobile app interfaces - Comsci Design & Development Agency" quality={100} />
				</div>
				<div className="mobile_banner_img">
					<Image src={mobileBanner} alt="Innovative web and mobile app interfaces - Comsci Design & Development Agency" quality={100} />
				</div>
				<div className="container">
					<div className="banner_textbox" data-scroll data-scroll-speed=".2">
						<div className="banner_badges fadeInUp">
							<div className="star-badge">
								<div className="stars">
									<Image src={starBadge} alt="Star" />
									<Image src={starBadge} alt="Star" />
									<Image src={starBadge} alt="Star" />
									<Image src={starBadge} alt="Star" />
									<Image src={starBadge} alt="Star" />
								</div>
								<span>TRUSTED 5 STAR</span>
							</div>
						</div>
						<h1 className="fadeInUp">Digital Design & Engineering Partner for High-Growth Global Startups</h1>
						<h2 class="fadeInUp banner_sub_text">We bridge the gap between Indian engineering efficiency and Western design sensibilities. Our studio specializes in building investor-ready products for founders in the USA, UK, Australia, and Europe, delivering Silicon-Valley-grade UI/UX, SaaS, and AI software that scales.</h2>
						<div className='fadeInUp learn_btn_2'>
							<Link href="/services">Explore Our Services</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeBanner;