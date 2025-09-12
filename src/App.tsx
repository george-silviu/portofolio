
import { Routes, Route } from "react-router";

import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Blog } from "./pages/Blog";

import Mainlayout from "./layouts/MainLayout";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route element={<Mainlayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  )
}

export default App;
