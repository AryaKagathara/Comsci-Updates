import Image from "next/image";
import Business from "@/../public/images/business-img.webp";

const ModernBusiness = () => {
	return (
		<>
			<div className="business">
				<div>
					<div className="business_section">
						<Image src={Business} alt="Modern business digital transformation visual — Comsci Technologies" quality={100}/>
					</div>
				</div>
			</div>
		</>
	)
}

export default ModernBusiness;