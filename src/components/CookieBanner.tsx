
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { Cookie } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CookieBanner = () => {
  const [open, setOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setAccepted(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setAccepted(true);
    setOpen(false);
    toast({
      title: "Cookies acceptés",
      description: "Merci d'avoir accepté nos cookies",
    });
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setAccepted(true);
    setOpen(false);
    toast({
      title: "Cookies refusés",
      description: "Vous avez refusé les cookies non essentiels",
    });
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-2 bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-800 shadow-md">
      <div className="container mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-2">
          <Cookie size={18} className="text-nico-green" />
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            Ce site utilise des cookies pour améliorer votre expérience.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="link" size="sm" className="text-xs p-0 h-auto">En savoir plus</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Politique de cookies</AlertDialogTitle>
                <AlertDialogDescription>
                  Notre site utilise des cookies pour vous offrir une meilleure expérience de navigation. 
                  Les cookies nous permettent de personnaliser le contenu et les annonces, d'offrir des fonctionnalités 
                  relatives aux médias sociaux et d'analyser notre trafic. Nous partageons également des informations 
                  sur l'utilisation de notre site avec nos partenaires de médias sociaux, de publicité et d'analyse, 
                  qui peuvent les combiner avec d'autres informations que vous leur avez fournies ou qu'ils ont 
                  collectées lors de votre utilisation de leurs services.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={handleReject}>Refuser</AlertDialogCancel>
                <AlertDialogAction onClick={handleAccept}>Accepter</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button variant="outline" size="sm" className="h-7 px-2 text-xs" onClick={handleReject}>Refuser</Button>
          <Button variant="default" size="sm" className="h-7 px-2 text-xs" onClick={handleAccept}>Accepter</Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
