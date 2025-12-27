import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description = "WorldEdge Education - Your Global Education Partner. Expert counseling, university admissions, and visa support for studying abroad.",
    keywords = "study abroad, education consultancy, university admissions, student visa, overseas education, malaysia, australia, uk, usa",
    image = "/worldedgeedu.svg",
    url
}) => {
    const siteTitle = "WorldEdge Education";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const currentUrl = url || window.location.href;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
