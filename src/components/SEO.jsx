import { Helmet } from 'react-helmet-async';
import { portfolioData } from '../data/portfolioData';

export const SEO = ({ 
  title, 
  description = portfolioData.personalInfo.summary, 
  keywords = "Full Stack Developer, AI Engineer, Machine Learning, Web Development, React, Tailwind CSS", 
  type = "website" 
}) => {
  const defaultTitle = `${portfolioData.personalInfo.name} - Full Stack Developer & AI Engineer`;
  const seoTitle = title ? `${title} | ${portfolioData.personalInfo.name}` : defaultTitle;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{seoTitle}</title>
      <meta name='description' content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={window.location.href} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
