import FaqView from "@/components/views/FaqView";
import LandingViews from "@/components/views/LandingView";
import TutorialView from "@/components/views/TutorialView";
import TermsView from "@/components/views/TermsView";
import LoginView from "@/components/views/LoginView";
import RegisterView from "@/components/views/RegisterView";

export default function Landing() {
  return (
    <div className="h-full min-h-[100vh] bg-[#D9D9D9] pb-40">
      <RegisterView />
    </div>
  );
}

//
const List = [];
