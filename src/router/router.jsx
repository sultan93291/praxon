import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import LandingPage from "../Pages/LandingPage";
import HealthCarePage from "@/Pages/HealthCarePage";
import AITrainingPage from "@/Pages/AITrainingPage";
import ScheduleCallPage from "@/Pages/ScheduleCallPage";
import AboutUsPage from "@/Pages/AboutUsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/industries/healthcare",
        element: <HealthCarePage />,
      },
      {
        path: "/ai-training",
        element: <AITrainingPage />,
      },
      {
        path: "/schedule-call",
        element: <ScheduleCallPage />
      },
      {
        path: "/about-us",
        element: <AboutUsPage />
      },
      
    ],
  },
]);

export default router;
