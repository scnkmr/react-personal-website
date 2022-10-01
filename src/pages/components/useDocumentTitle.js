import { useRef, useEffect } from 'react'

function useDocumentTitle(title, thumb="", desc=`Sachin Arayans is India's No 1 Web Development Company 100% Trusted Web Company. We Provide Unique and Best quality Websites at a Very Affordable Price. Starting From Rs 4499. 100+ Happy Clients. Custom & Dynamic Website. Free Website Support. Free Consultation`, mt="2022-09-20T08:45:45+00:00", prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
	  title+=" | Freelancer Web Developer Gurgaon";
  document.title = title;
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [title]);
  
  useEffect(() => {
  document.head.innerHTML+=`
	<!-- SEO -->
	<meta
      name="description"
      content="${desc}"
    />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="${title}" />
	<meta property="og:description" content="${desc}" />
	<meta property="og:url" content="${window.location.href}" />
	<meta property="og:site_name" content="${title}" />
	<meta property="article:publisher" content="https://www.facebook.com/arayans.sachin" />
	<meta property="article:modified_time" content="${mt}" />
	<meta property="og:image" content="${thumb}" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="10 minutes" />
  `
}, []);

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
    }
  }, [])
}

export default useDocumentTitle