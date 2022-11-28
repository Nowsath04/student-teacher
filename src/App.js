import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Createstudent from "./Createstudent";
import Createteacher from "./Createteacher";
import "./css/styles.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Navbar from "./Navbar";
import Portal_Layout from "./Portal_Layout";
import Sidebar from "./Sidebar";
import Students from "./Students";
import Student_Edit from "./Student_Edit";
import Student_profile from "./Student_profile";
import Teacher from "./Teacher";
import Teacher_edit from "./Teacher_edit";
import Teacher_profile from "./Teacher_profile";
import Welcome_Portal from "./Welcome_Portal";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/portal" element={<Portal_Layout />}>
          <Route path="welcome" element={<Welcome_Portal />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students_data" element={<Students />} />
          <Route path="students_create" element={<Createstudent />} />
          <Route path="students_profile/:id" element={<Student_profile />} />
          <Route path="students_edit/:id" element={<Student_Edit />} />
          <Route path="teachers_data" element={<Teacher />} />
          <Route path="teachers_create" element={<Createteacher />} />
          <Route path="teachers_profile/:id" element={<Teacher_profile />} />
          <Route path="teachers_edit/:id" element={<Teacher_edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
