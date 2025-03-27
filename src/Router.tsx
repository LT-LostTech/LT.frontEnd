import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Default/layout";
import { Landpage } from "./pages/landpage";
import { BackOfficeLayout } from "./layout/backOffice/layout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Landpage/>}/>
      </Route>
      <Route path="/backoffice" element={<BackOfficeLayout/>}>
        
      </Route>
    </Routes>
  );
}
