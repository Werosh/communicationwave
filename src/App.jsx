import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Workshops from "./pages/Workshops";
import CapabilityStatement from "./pages/CapabilityStatement";
import ProfessionalDevelopment from "./pages/services/ProfessionalDevelopment";
import DiversityEquityInclusion from "./pages/services/DiversityEquityInclusion";
import CommunicationServices from "./pages/services/CommunicationServices";
import BusinessConsulting from "./pages/services/BusinessConsulting";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-bg-light">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/capability-statement"
              element={<CapabilityStatement />}
            />
            <Route path="/trainings" element={<Workshops />} />

            {/* Services Routes */}
            <Route
              path="/services/professional-development"
              element={<ProfessionalDevelopment />}
            />
            <Route
              path="/services/diversity-equity-inclusion"
              element={<DiversityEquityInclusion />}
            />
            <Route
              path="/services/communication-services"
              element={<CommunicationServices />}
            />
            <Route
              path="/services/business-consulting"
              element={<BusinessConsulting />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
