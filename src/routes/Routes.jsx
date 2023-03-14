import { Routes, Route } from 'react-router-dom';
import LoginPage from "../components/loginPage/LoginPage";
import RegisterPage from "../components/Register/Register";
import MainPage from '../components/MainPage/MainPage';
import TeamPage from '../components/TeamPage/TeamPage';
import Library from '../components/mediaLibrary/mediaLibrary';
import EmailConfirm from '../components/ConfirmEmail/confirmEmail';
import DesignOpen from '../components/OpenDesign/openDesign';
import ProjectList from '../components/ProjectList/ProjectList';
import Project from '../components/Projects/project';
import Target from '../components/Target/target';
import UserProfile from '../components/UserProfileEdit/profileEdit';
function Routing(){
    return(
        <div className="routes">
        <Routes>
            <Route path="/" element={<RegisterPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/home" element={<MainPage/>} />
            <Route path="/team" element={<TeamPage/>} />
            <Route path="/lib" element={<Library/>} />
            <Route path="/emailconfirm" element={<EmailConfirm/>} />
            <Route path="/design" element={<DesignOpen/>} />
            <Route path="/projectList" element={<ProjectList/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/target" element={<Target/>} />
            <Route path="/user" element={<UserProfile/>} />
        </Routes>
        </div>
    );
}

export default Routing;