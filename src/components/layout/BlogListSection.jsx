import Link from "next/link";
import Image from "next/image";
import blogsData from "../../files/blogs.json";

// SSR: render blog list at build time so crawlers + LCP both win.
// Removed the inner <a target="_blank"> (was nested inside <Link> = invalid HTML and
// produced 5 identical "Read now" links flagged in Lighthouse a11y).
const BlogListSection = () => {
	return (
		<>
			{blogsData.map((blog) => (
				<div className="listing_secting" key={blog.link}>
					<Link
						href={`/blog/${blog.link}`}
						className="list_wrap"
						aria-label={`Read article: ${blog.title}`}
					>
						<div className="blog_img">
							<Image
								src={blog.image}
								alt={blog.imageAlt || `${blog.title} — Comsci blog cover`}
								quality={75}
								width={1000}
								height={1000}
								sizes="(max-width: 767px) 90vw, 480px"
							/>
						</div>
						<div className="blog_content">
							<div className="text">
								<span className="category">{blog.author}</span>
								<div className="first_dot"></div>
								<p className="date">{blog.date}</p>
								<div className="second_dot"></div>
								<div className="time_section">
									<p className="read">Reading Time: approx.</p>
									<p className="time">{blog.readingTime}</p>
								</div>
							</div>
							<h2 className="blog_title">{blog.title}</h2>
							<div className="read_btn">
								<span aria-hidden="true">Read now</span>
							</div>
						</div>
					</Link>
				</div>
			))}
		</>
	);
};

export default BlogListSection;
