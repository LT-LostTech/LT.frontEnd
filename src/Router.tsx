import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Default/layout";
import { Landpage } from "./pages/landpage";
import { BackOfficeLayout } from "./layout/backOffice/layout";
import { BackOfficeLogin } from "./pages/backOffice/login";
import { ForgotPassword } from "./pages/backOffice/forgotPassword";
import { Dashboard } from "./pages/backOffice/dashboard";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Landpage/>}/>
      </Route>
      <Route path="/backoffice" element={<BackOfficeLayout/>}>
        <Route path="/backoffice" element={<BackOfficeLogin/>}/>
        <Route path="/backoffice/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/backoffice/dashboard/roadmaps" element={<Dashboard title="Roadmaps" tableHeaders={["Nome do roadmap", "Categoria", "Linguagem de programação", "Ações"]}/>}/>
      </Route>
    </Routes>
  );
}
