// src/components/common/SEO.jsx

export default function MetaTags({
  title = "SizaCrafts",
  description = "Handmade African crafts, jewelry, and home décor.",
  image = "https://sizacrafts.com/images/og-image.jpg",
  url = "https://sizacrafts.com",
}) {
  const fullTitle = `${title} | SizaCrafts`;

  return (
    <>
      
    <head>
      
      {/* Title */}
      <title>{fullTitle}</title>

      {/* SEO */}
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
 
    </head>
    </> );
}
