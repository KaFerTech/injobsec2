import { useState } from "react"
import axios from  'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const AuthModal = ({ setShowModal, isSignUp }) => {

    const [nome, setNome] = useState(null)
    const [endereço, setEndereço] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    let naviagate = useNavigate()

    console.log(nome, endereço, telefone, email, password, confirmPassword)




    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError('As senhas precisam corresponder!')
                return
            }
            console.log('posting', email, password)

            const response = await axios.post(`http://localhost:8000/${isSignUp ? 'signup' : 'login'}`, { email, password })

          
            setCookie('AuthToken', response.data.token)
            setCookie('UserId', response.data.userId)

            const sucess = response.status == 201

            if(sucess && isSignUp) naviagate('/onboarding')
            if(sucess && !isSignUp) naviagate('/dashboard')    

            window.location.reload()    
            

        } catch (error) {
            console.log(error)
        }

    }                                                                                                       




    return (
        <div className="auth-modal-cand">
            <div className="close-icon" onClick={handleClick}>ⓧ</div>

            <h2 className="h2-auth-modal">{isSignUp ? 'CONTA PERFIL CANDIDATO' : 'LOGIN CANDIDATO'}</h2>
            <br></br>
            <p> Ao clicar em Login, você concorda com nossos termos. Saiba como processamos os seus dados na nossa Política de Privacidade e Política de Cookies.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="Confirme a senha"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className="secondary-button" type="submit" />
                <p>{error}</p>
            </form>

            <hr />
        </div>
    )
}

export default AuthModal