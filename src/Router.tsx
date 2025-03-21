import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Default/layout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}
