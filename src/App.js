import { Home } from "./Pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page404 } from "./Pages/404/Page404";
import Projects from "./Components/projects/projetcs";
import { PageProjects } from "./Pages/pageProjects/PageProjetcts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/projects" element={<PageProjects></PageProjects>} />
          {/* <Route path="/dashboard" element={<Dashboard></Dashboard>} /> */}
          <Route path="*" element={<Page404></Page404>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
