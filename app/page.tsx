import FaqView from "@/components/views/FaqView";
import LandingViews from "@/components/views/LandingView";
import TutorialView from "@/components/views/TutorialView";
import TermsView from "@/components/views/TermsView";

import LoginView from "@/components/views/LoginView";
import RegisterView from "@/components/views/RegisterView";
import SuccessSignupView from "@/components/views/SuccessSignupView";
import DashboardView from "@/components/views/DashboardView";

import SupportView from "@/components/views/SupportView";

export default function Landing() {
  return (
    <div className="h-full min-h-[100vh] bg-[#D9D9D9] pb-40">
      <SupportView />
    </div>
  );
}

//
const List = [];
