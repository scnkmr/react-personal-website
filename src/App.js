import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Work from './pages/work/Work';
import Blog from './pages/Blog';
import BlogPage from './pages/blog/Blog';

import {One, Two, Three, Four, Five} from './pages/components/Faq';

function App() {
  return (
  <BrowserRouter>
	<Routes>
		<Route path="/" element={<Layout/>}>
			<Route index element={<Home/>}/>
			<Route path="/contact" element={<Contact />}/>
			<Route path="/work" element={<Work/>}/>
			<Route path="/blog" element={<Blog/>}/>
			<Route path="/blog/:slug" element={<BlogPage/>} />
			<Route path="/website-development-cost-in-2021" element={<One/>} />
			<Route path="/how-long-does-it-take-to-build-a-website" element={<Two/>} />
			<Route path="/ecommerce-website-development-cost" element={<Three/>} />
			<Route path="/how-much-does-it-cost-to-make-an-app" element={<Four/>} />
			<Route path="/how-to-choose-world-class-design-for-your-website" element={<Five/>} />
		</Route>
	</Routes>
  </BrowserRouter>
  );
}

export default App;
