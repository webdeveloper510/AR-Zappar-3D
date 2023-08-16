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
import MainTab from '../components/Projects/mainTab';
import FirstTab from '../components/Projects/firsttTab';
import ImageArTracker from '../components/ImageTrackingAR/ImageTracker';
import VerifyEmail from '../components/welcome/EmailVerifyWelcome';
import ForgotEmail from '../components/ForgotPassword/EnterForgotEmail';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
function Routing(){
    const token = localStorage.getItem('token');
    // if 
    return(
        <div className="routes">
        <Routes>
                {/* <>
                {token ? ( */}
                    <>
                <Route path="/register" element={<RegisterPage/>} />             
                <Route path="/home" element={<MainPage/>} />
                <Route path="/team" element={<TeamPage/>} />
                <Route path="/lib" element={<Library/>} />
                <Route path="/emailconfirm" element={<EmailConfirm/>} />
                <Route path="/design" element={<DesignOpen/>} />
                <Route path="/projectList" element={<ProjectList/>} />
                <Route path="/project/" element={<Project/>} />
                <Route path="/project/:id" element={<Project/>} />
                <Route path="/target/:id" element={<Target/>} />
                <Route path="/user" element={<UserProfile/>} />
                <Route path='/MainTab' element={<MainTab />} />
                <Route path='/FirstTab' element={<FirstTab />} />
                <Route path='/ar-web-view/:id/:v/' element={<ImageArTracker />} />
                <Route path="/" element={<LoginPage/>} />
                <Route path="/verify-email/:id" element={<VerifyEmail />} />
                <Route path="/enter-forgot-email/" element={<ForgotEmail />} />
                <Route path="/forgot-password/:id" element={<ForgotPassword />} />
                
                
                </>
            
            
        </Routes>
        </div>
    );
}

export default Routing;