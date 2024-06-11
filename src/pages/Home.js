import Nav from "../components/Nav"
import AuthModal from "../components/AuthModal"
import AuthModalEmpresa from "../components/AuthModalEmpresa"
import { useState } from 'react'
import { useCookies } from "react-cookie"

const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [cookies, removeCookie] = useCookies(['user'])

    const [showModal2, setShowModal2] = useState(false)
    const [isSignUp2, setIsSignUp2] = useState(true)

    const authToken = cookies.AuthToken

    const handleClick = () => {
        if (authToken) {
            removeCookie('UserId', cookies.UserId)
            removeCookie('Authtoken', cookies.AuthToken)
            window.location.reload()
            return
        }
        setShowModal(true)
        setIsSignUp(true)
    }

    const handleClick2 = () => {

        setShowModal2(true)
        setIsSignUp2(true)
    }

    return (
        <div className="overlay">
            <Nav setShowModal={setShowModal}
                showModal={showModal}
                setIsSignUp={setIsSignUp}

                setShowModal2={setShowModal2}
                showModal2={showModal2}
                setIsSignUp2={setIsSignUp2}
            />
            <h1 className="primary-title">Bem-Vindo</h1>
            <img src="logo192.png" />
            <div className="home">  
                <h3>Primeira vez por aqui? Crie seu acesso</h3>     
                <button className="primary-button" onClick={handleClick}>
                    Conta Candidato
                </button>
                <button className="primary-button2" onClick={handleClick2}>
                    Conta Empresa
                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
                )}

                {showModal2 && (
                    <AuthModalEmpresa setShowModal2={setShowModal2} isSignUp2={isSignUp2} />
                )}

            </div>

        </div>
    )
}

export default Home