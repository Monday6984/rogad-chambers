import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import PracticeAreas from "@/pages/PracticeAreas";
import PracticeArea from "@/pages/PracticeArea";
import People from "@/pages/People";
import LawyerProfile from "@/pages/LawyerProfile";
import Insights from "@/pages/Insights";
import InsightArticle from "@/pages/InsightArticle";
import Contact from "@/pages/Contact";
import PageNotFound from "@/pages/PageNotFound";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/practice-areas/:slug" element={<PracticeArea />} />
        <Route path="/people" element={<People />} />
        <Route path="/our-people" element={<Navigate to="/people" replace />} />
        <Route path="/our-people/:slug" element={<LawyerProfile />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
