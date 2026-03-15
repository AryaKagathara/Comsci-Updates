import PrimaryBtn from '@/components/layout/PrimaryBtn';
import ContentBox from "@/components/layout/ContentBox";

const HomeProjectBox = () => {

	return (
		<>
			<div className="project_text fadeInUp">
				<ContentBox title="Empowering Founders Across the Global Startup Map" />
				<PrimaryBtn name="View All Projects" arrow="no" link="/projects" />
			</div>
		</>
	)
}

export default HomeProjectBox;