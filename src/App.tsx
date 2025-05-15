
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import ZoneIntervention from "./pages/ZoneIntervention";
import CityPage from "./pages/CityPage";
import ReparationToiture from "./pages/services/ReparationToiture";
import Demoussage from "./pages/services/Demoussage";
import Gouttieres from "./pages/services/Gouttieres";
import Ramonage from "./pages/services/Ramonage";
import Isolation from "./pages/services/Isolation";
import Nettoyage from "./pages/services/Nettoyage";
import TravauxExterieur from "./pages/services/TravauxExterieur";
import Peinture from "./pages/services/Peinture";
import ReparationsExterieur from "./pages/services/ReparationsExterieur";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CallButton from "./components/CallButton";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/zone-intervention" element={<ZoneIntervention />} />
              <Route path="/zone-intervention/:citySlug" element={<CityPage />} />
              <Route path="/services/reparation-toiture" element={<ReparationToiture />} />
              <Route path="/services/demoussage" element={<Demoussage />} />
              <Route path="/services/gouttieres" element={<Gouttieres />} />
              <Route path="/services/ramonage" element={<Ramonage />} />
              <Route path="/services/isolation" element={<Isolation />} />
              <Route path="/services/nettoyage" element={<Nettoyage />} />
              <Route path="/services/travaux-exterieur" element={<TravauxExterieur />} />
              <Route path="/services/peinture" element={<Peinture />} />
              <Route path="/services/reparations-exterieur" element={<ReparationsExterieur />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CallButton />
          <CookieBanner />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
