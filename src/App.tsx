import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./assets/pages/page-components";
import LayoutMain from "./assets/pages/layout-main";
import PageHome from "./assets/pages/page-home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/components" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}