import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { AppLayout } from "./layout/app-layout";
import { LogUp } from "./pages/logup";
import { Profile } from "./pages/profile";
import { TablesCreate } from "./pages/tables-create";
import { Projects } from "./pages/projects";
import { BillingCreate } from "./pages/billing-create";
import { Tables } from "./pages/tables";
import { Billing } from "./pages/billing";
import { TablesEdit } from "./pages/tables-edit";
import { ProjectEdit } from "./pages/project-edit";
import { ProjectsGroup } from "./pages/projects-group";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logup" element={<LogUp />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="tables" element={<Tables />} />
          <Route path="tables/create" element={<TablesCreate />} />
          <Route path="tables/projects" element={<Projects />} />
          <Route path="tables/group/:id" element={<ProjectsGroup />} />
          <Route path="tables/edit/:id" element={<TablesEdit />} />
          <Route path="tables/proedit/:id" element={<ProjectEdit />} />
          <Route path="billing" element={<Billing />} />
          <Route path="billing/create" element={<BillingCreate />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
