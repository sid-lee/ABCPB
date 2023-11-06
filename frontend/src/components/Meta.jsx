import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, author, keywords, ogTitle, ogDescription, ogImage }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="title" content={title} />
        <meta name="author" content={author} />
        <meta name="keywords" content={keywords} />

        {/* Open Graph tags for social media */}
      <meta property='og:title' content={ogTitle || title} />
      <meta property='og:description' content={ogDescription || description} />
      <meta property='og:image' content={ogImage || 'default_image_url'} />
    </Helmet>
  );
};

Meta.defaultProps = {
    title: "Welcome to ABC Publishers Bookstore",
    description: "Explore a wide selection of books at ABC Publishers Bookstore. Find the latest releases, bestsellers, and more.",
    author: "ABC Publishers",
    keywords: "ABC Publishers, Bookstore, Books, Literature, Reading, Bestsellers, New Releases",
    ogTitle: '', // Add default Open Graph title if needed
    ogDescription: '', // Add default Open Graph description if needed
    ogImage: '', // Add default Open Graph image URL if needed
};

export default Meta;