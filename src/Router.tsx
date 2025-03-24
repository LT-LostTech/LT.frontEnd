import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Default/layout";
import { Landpage } from "./pages/landpage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Landpage/>}/>
      </Route>
    </Routes>
  );
}
