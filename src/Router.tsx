import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Default/layout";
import { Landpage } from "./pages/landpage";
import { BackOfficeLayout } from "./layout/backOffice/layout";
import { BackOfficeLogin } from "./pages/backOffice/login";
import { ForgotPassword } from "./pages/backOffice/forgotPassword";
import { Dashboard } from "./pages/backOffice/dashboard";
import { CreateFormRoadmap } from "./pages/backOffice/dashboard/roadmap/create";
import { CreateFormChallenges } from "./pages/backOffice/dashboard/challenges/create";
import { EditFormRoadmap } from "./pages/backOffice/dashboard/roadmap/edit";
import { EditFormChallenges } from "./pages/backOffice/dashboard/challenges/edit";
import { Steps } from "./pages/backOffice/dashboard/steps";
import { NotFound } from "./pages/notFound";

export function Router() {
  return (
    <Routes>
      <Route path="/landpage" element={<Layout />}>
        <Route index element={<Landpage />} />
      </Route>
      <Route path="/backoffice" element={<BackOfficeLayout />}>
        <Route path="/backoffice" element={<BackOfficeLogin />} />
        <Route
          path="/backoffice/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/backoffice/dashboard/roadmaps"
          element={
            <Dashboard
              title="Roadmaps"
              tableHeaders={[
                "Nome do roadmap",
                "Categoria",
                "Linguagem de programação",
                "Ações",
              ]}
              ComponentFormCreate={CreateFormRoadmap}
              ComponentFormEdit={EditFormRoadmap}
            />
          }
        >
          <Route
            path="/backoffice/dashboard/roadmaps/steps"
            element={<Steps />}
          />
        </Route>
        <Route
          path="/backoffice/dashboard/challenges"
          element={
            <Dashboard
              title="Challenges"
              tableHeaders={[
                "Nome do desafio",
                "Categoria",
                "Linguagem de programação",
                "Ações",
              ]}
              ComponentFormCreate={CreateFormChallenges}
              ComponentFormEdit={EditFormChallenges}
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
