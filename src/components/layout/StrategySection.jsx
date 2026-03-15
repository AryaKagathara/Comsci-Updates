import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import StrategyImg1 from '@/../public/images/strategy-img1.svg';
import StrategyImg2 from '@/../public/images/strategy-img2.svg';
import StrategyImg3 from '@/../public/images/strategy-img3.svg';
import StrategyImg4 from '@/../public/images/strategy-img4.svg';
import StrategyImg5 from '@/../public/images/strategy-img5.svg';
import ContentBox from "./ContentBox";

gsap.registerPlugin(ScrollTrigger);

const StrategySection = () => {

	useEffect(() => {
		const sections = gsap.utils.toArray(".content_box");

		sections.forEach(elem => {
			var tl = gsap.timeline({
				scrollTrigger: {
					trigger: elem,
					scrub: true,
					start: "top center",
					end: 'bottom top',
					toggleClass: 'highlight',
				},
			});
		});
		gsap.to(".timeline-line .line-fill", {
			height: '100%',
			ease: 'linear',
			scrollTrigger: {
				trigger: ".strategy_section",
				scrub: true,
				start: "top center",
				end: 'bottom center',
			}
		});
	}, []);

	return (
		<>
			<div className="strategy">
				<div className="container">
					<div className="strategy_section">
						<div className="row">
							<div className="col-lg-5">
								<div className="text_section fadeInUp">
									<h2>Our Strategic 'Follow-the-Sun' Workflow</h2>
								</div>
							</div>
							<div className="col-lg-6 offset-lg-1">
								<div className="strategy_step">
									<div className="step_box">
										<div className="image_content">
											<div className="img_box">
												<Image src={StrategyImg1} alt="Comsci digital strategy planning icon" quality={100} />
											</div>
											<div className="content_box">
												<span>Discovery</span>
												<p>Region-specific market and competitor audit.</p>
											</div>
										</div>
										<div className="image_content">
											<div className="img_box">
												<Image src={StrategyImg2} alt="Comsci creative UX/UI design icon" quality={100} />
											</div>
											<div className="content_box">
												<span>Creative Design</span>
												<p>Senior Figma prototyping for Tier-1 aesthetics.</p>
											</div>
										</div>
										<div className="image_content">
											<div className="img_box">
												<Image src={StrategyImg3} alt="Comsci agile development process icon" quality={100} />
											</div>
											<div className="content_box">
												<span>Engineering</span>
												<p>Full-stack development with zero technical debt.</p>
											</div>
										</div>
										<div className="image_content">
											<div className="img_box">
												<Image src={StrategyImg4} alt="Comsci QA testing symbol" quality={100} />
											</div>
											<div className="content_box">
												<span>Quality & Compliance</span>
												<p>Stress testing for GDPR/PIPEDA and cross-browser audits.</p>
											</div>
										</div>
										<div className="image_content">
											<div className="img_box">
												<Image src={StrategyImg5} alt="Comsci project delivery checklist icon" quality={100} />
											</div>
											<div className="content_box">
												<span>Launch & Delivery</span>
												<p>Ongoing optimization for sustained results.</p>
											</div>
											<div className="timeline-line">
												<div className="line-default"></div>
												<div className="line-fill"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default StrategySection;