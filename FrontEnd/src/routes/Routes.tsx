import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import PrivateRoute from "@/routes/PrivateRoute";

// imports end images
import BGLogin from "@/assets/image/BGfinal.webp";
import background from "@/assets/image/Home.png";

// imports end pages
import Header from "@/components/custom/navbar/Header";
import Home from "@/pages/public/Home";

// imports end layout
import NewPasswordUser from "@/pages/public/NewPasswordUser";
import LayoutLogin from "@/components/layout/LayoutLogin";
import LayoutHome from "@/components/layout/LayoutHome";
import AdminCategory from "@/pages/Private/AdminCategory";
import UserSettings from "@/pages/public/UserSettings";
import AdminAuthor from "@/pages/Private/AdminAuthor";
import BuscarSound from "@/pages/Private/BuscarSound";
import UploadSound from "@/pages/Private/UploadSound";
import LoginUser from "@/pages/public/LoginUser";
import Erro404 from "@/pages/public/erro404";
import Contact from "@/pages/public/Contact";
import About from "@/pages/public/About";
import Sound from "@/pages/public/Sound";
import Admin from "@/pages/Private/Admin";


function WebRoutes() {
    return (
        <BrowserRouter>
            <HeaderWrapper />
            <Routes>
                {/* Rotas públicas */}
                <Route element={<LayoutHome backgroundImage={background}><Outlet /></LayoutHome>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />

                </Route>

                <Route element={<LayoutLogin backgroundImage={BGLogin}><Outlet /></LayoutLogin>}>
                    <Route path="/login" element={<LoginUser />} />
                    <Route path="/newPassword" element={<NewPasswordUser />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/userSettings" element={<UserSettings />} />
                    <Route path="/sound" element={<Sound />} />
                </Route>

                {/* Rotas privadas */}
                <Route element={<PrivateRoute><LayoutHome backgroundImage={background}><Outlet /></LayoutHome></PrivateRoute>}>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/buscarSound" element={<BuscarSound />} />
                    <Route path="/uploadSound" element={<UploadSound />} />
                    <Route path="/adminAuthor" element={<AdminAuthor />} />
                    <Route path="/adminCategory" element={<AdminCategory />} />
                </Route>

                {/* Rota de erro 404 */}
                <Route path="*" element={<Erro404 />} />
            </Routes>
        </BrowserRouter>
    );
}

function HeaderWrapper() {
    const location = useLocation();
    return location.pathname !== "/teste" ? <Header /> : null;
}

export default WebRoutes;