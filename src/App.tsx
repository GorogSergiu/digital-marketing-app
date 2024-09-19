import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/homePage";
import DocsPage from "@/pages/docs";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import Pricings from "./pages/pricing-plans";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<Pricings />} path="/pricings" />
    </Routes>
  );
}

export default App;
