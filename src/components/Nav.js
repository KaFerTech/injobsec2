import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";

const Nav = ({ setShowModal, showModal, setIsSignUp, setShowModal2, showModal2, setIsSignUp2 }) => {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);

    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false);
    };

    const handleClick2 = () => {
        setShowModal2(true);
        setIsSignUp2(false);
    };

    const authToken = false;

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);

    return (
        <nav>
            {currentPath === '/' && !authToken && (
                <>
                    <button className="primary-button-login-cand"
                        onClick={handleClick}
                        disabled={showModal}
                    >Login Candidato</button>
                    <button className="primary-button-login-emp"
                        onClick={handleClick2}
                        disabled={showModal2}
                    >Login Empresa</button>
                </>
            )}

            {(currentPath === '/dashboard' || currentPath === '/onBoarding' || currentPath === '/onBoardingEmpresa' || currentPath === '/onCadasterJob') && (
                <>
                    <div className="logo-container">
                        <span role="img" aria-label="home" className="home-icon"><FaHouse /></span>
                        <input
                            type="text"
                            placeholder="Search keywords..."
                            className="search-bar"
                        />
                    </div>
                    <button className="primary-button-edit-profile">
                        Editar Perfil
                    </button>
                </>
            )}

            {(currentPath === '/dashboard' || currentPath === '/onBoardingEmpresa' || currentPath === '/onCadasterJob') && !authToken && (
                <button className="primary-button-criar-vaga"
                    onClick={handleClick2}
                    disabled={showModal2}
                >Publicar Vaga</button>
            )}
        </nav>
    );
};

export default Nav;
