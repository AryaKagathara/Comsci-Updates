import { useState, useEffect } from 'react';
import Image from "next/image";
import Head from "next/head";
import Slider from "react-slick";
import metaData from '../../files/meta.json';
import { organizationSchema, websiteSchema, BASE_URL } from '../../lib/commonSchema';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const allImageFiles = [
    'Vedson-7.webp', 'Vedson-6.webp', 'Vedson-5.webp', 'Vedson-4.webp', 'Vedson-3.webp',
    'Vedson-2.webp', 'Vedson-1.webp', 'TopTutors.webp', 'Sports-4.webp', 'Sports-3.webp',
    'Sports-2.webp', 'Sports-1.webp', 'Simply-Bread.webp', 'S1N.webp', 'Relucir.webp',
    'Recowr.webp', 'Prime-Dental-Marketing.webp', 'Only-In-Your-State-3.webp',
    'Only-In-Your-State-2.webp', 'Only-In-Your-State-1.webp', 'One-Stop-Pizza-2.webp',
    'One-Stop-Pizza-1.webp', 'NYS-OASAS-3.webp', 'NYS-OASAS-2.webp', 'NYS-OASAS-1.webp',
    'Mytonx.webp', 'Hyve-2.webp', 'Hyve-1.webp', 'Groke-Pet-3.webp', 'Groke-Pet-2.webp',
    'Groke-Pet-1.webp', 'Genshare.webp', 'Dryki-2.webp', 'Dryki-1.webp', 'Comsci-1.webp',
    'Comsci-0.webp', 'Boon.webp', 'Body-Crush-3.webp', 'Body-Crush-2.webp',
    'Body-Crush-1.webp', 'BLKResume-3.webp', 'BLKResume-2.webp', 'BLKResume-1.webp',
    'BLKResume-4.webp', 'BallsClub-2.webp', 'BallsClub-1.webp', 'AugustaPlasticSurgery-3.webp',
    'AugustaPlasticSurgery-2.webp', 'AugustaPlasticSurgery-1.webp'
];


const SocialMediaSlider = ({ posts, rtl = false, speed = 10000 }) => {
    const settings = {
        dots: false, infinite: true, slidesToShow: 5, slidesToScroll: 1, autoplay: true,
        speed: speed, autoplaySpeed: 0, cssEase: "linear", arrows: false, rtl: rtl,
        draggable: true, swipeToSlide: true, pauseOnHover: true,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2.5 } },
            { breakpoint: 576, settings: { slidesToShow: 1.5 } }
        ]
    };
    return (
        <div className="slider-row">
            <Slider {...settings}>
                {posts.map((post) => (
                    <div key={post.id} className="social-post-slide">
                        <Image
                            src={post.imageUrl} alt={post.alt} width={300} height={300}
                            quality={100} className="social-post-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};


export default function SocialMediaShowcase() {
    const [sliderRows, setSliderRows] = useState([]);

    const pageUrl = `${BASE_URL}/portfolio/social-media-posts`;


    const customMeta = {
        "title": "Social Media Design Portfolio: Engaging Creatives by Comsci Technologies",
        "description": "Explore the vibrant portfolio of social media designs by Comsci Technologies. See our creative posts for brands across industries and discover how we boost engagement.",
        "keywords": [
            "social media design portfolio", "digital marketing portfolio", "creative agency portfolio",
            "social media creative agency India", "engaging social media posts", "Comsci Technologies portfolio",
            "brand visual identity", "social media graphics", "Facebook post design", "Instagram post design"
        ],
        "robots": "index, follow",
        "author": "Comsci Technologies",
        "canonical": pageUrl,
        "og": {
            "title": "Our Creative Work | Social Media Design Portfolio by Comsci",
            "description": "A showcase of our most engaging and visually stunning social media post designs. See how we help brands connect with their audience.",
            "type": "website",
            "url": pageUrl,
            "site_name": metaData?.site_name || "Comsci Technologies",
        },
        "twitter": {
            "card": "summary_large_image",
            "site": metaData?.twitter?.site || "@ComsciTech",
            "title": "Comsci Technologies | Social Media Design Portfolio",
            "description": "Check out our portfolio of high-impact social media creative work. We build brands one post at a time. #SocialMediaMarketing #DesignPortfolio #CreativeAgency",
        },
    };


    const getMetaTags = (baseMeta, pageMeta = {}) => {
        const mergedMeta = { ...baseMeta, ...pageMeta };
        if (pageMeta.og) mergedMeta.og = { ...baseMeta.og, ...pageMeta.og };
        if (pageMeta.twitter) mergedMeta.twitter = { ...baseMeta.twitter, ...pageMeta.twitter };

        const tags = [];
        Object.keys(mergedMeta).forEach(key => {
            const value = mergedMeta[key];
            if (key === "title") tags.push(<title key="title">{value}</title>);
            else if (key === "og" || key === "twitter") {
                if (value && typeof value === 'object') {
                    Object.keys(value).forEach(property => {
                        if (value[property]) tags.push(<meta key={`${key}:${property}`} property={`${key}:${property}`} content={value[property]} />);
                    });
                }
            } else if (key === "keywords" && Array.isArray(value)) {
                if (value.length > 0) tags.push(<meta key={key} name={key} content={value.join(', ')} />);
            } else if (typeof value === 'string') {
                if (key === "canonical") tags.push(<link key="canonical" rel="canonical" href={value} />);
                else if (value.trim() !== '') tags.push(<meta key={key} name={key} content={value} />);
            }
        });
        return tags;
    };


    const imageGallerySchema = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Comsci Technologies Social Media Design Portfolio",
        "url": pageUrl,
        "description": customMeta.description,
        "creator": organizationSchema,
        "hasPart": allImageFiles.map(file => ({
            "@type": "ImageObject",
            "contentUrl": `${BASE_URL}/images/social/${file.replace(/ /g, '%20')}`,
            "name": `${file.split('.')[0]} - Social Media Design`,
            "caption": `A social media creative for ${file.split('.')[0].replace(/-[0-9O]$/, '')} by Comsci Technologies.`,
            "creator": organizationSchema,
            "license": `${BASE_URL}/terms-of-service`
        }))
    };

    const finalSchema = [organizationSchema, websiteSchema, imageGallerySchema];


    useEffect(() => {
        const shuffleArray = (array) => {
            let currentIndex = array.length, randomIndex;
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }
            return array;
        };

        const allPosts = allImageFiles.map((file, index) => ({
            id: index + 1,
            imageUrl: `/images/social/${file.replace(/ /g, '%20')}`,
            alt: `Social media post for ${file.split('.')[0].replace(/-[0-9O]$/, '')}`
        }));

        const shuffledPosts = shuffleArray(allPosts);

        const chunkArray = (array, numChunks) => {
            if (!array || array.length === 0) return [];
            const chunkSize = Math.ceil(array.length / numChunks);
            const result = [];
            for (let i = 0; i < array.length; i += chunkSize) {
                result.push(array.slice(i, i + chunkSize));
            }
            return result;
        };

        setSliderRows(chunkArray(shuffledPosts, 4));

    }, []);

    if (!sliderRows || sliderRows.length === 0) {
        return null;
    }

    return (
        <>
            <Head>
                {getMetaTags(metaData, customMeta)}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema, null, 2) }} key="jsonld-portfolio-schema" />
            </Head>

            <div className="social-posts-showcase">
                <div className="social_heading" data-scroll data-scroll-speed=".2">
                    <h1>
                        Crafting Visuals that Stop the Scroll.
                    </h1>
                    <p>
                        In a world of endless feeds, great design makes the difference. We create compelling visuals and thoughtful campaigns that capture attention, spark conversations, and build lasting connections between brands and their audiences.
                    </p>
                </div>

                <div className="social-sliders-container">
                    <SocialMediaSlider posts={sliderRows[0]} rtl={false} speed={12000} />
                    <SocialMediaSlider posts={sliderRows[1]} rtl={true} speed={15000} />
                    <SocialMediaSlider posts={sliderRows[2]} rtl={false} speed={10000} />
                    {sliderRows[3] && <SocialMediaSlider posts={sliderRows[3]} rtl={true} speed={13000} />}
                </div>
            </div>
        </>
    );
}