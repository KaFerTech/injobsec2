import { useState } from "react"

const AuthModalEmpresa = ({ setShowModal2, isSignUp2 }) => {


    const [cnpj, setCnpj] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)

    console.log(cnpj,  password, confirmPassword)




    const handleClick2 = () => {
        setShowModal2(false)
    }

    const handleSubmit2 = async (e) => {
        e.preventDefault()
        try {
            if (isSignUp2 && (password !== confirmPassword)) {
                setError('As senhas precisam corresponder!')
            }
            console.log('faça uma solicitação de postagem em nosso banco de dados')

        } catch (error) {
            console.log(error)
        }

    }




    return (
        <div className="auth-modal-emp">
            <div className="close-icon" onClick={handleClick2}>ⓧ</div>

            <h2 className="h2-auth-modal">{isSignUp2 ? 'CONTA PERFIL EMPRESA' : 'LOGIN EMPRESA'}</h2>
            <br></br>
            <p> Ao clicar em Login, você concorda com nossos termos. Saiba como processamos os seus dados na nossa Política de Privacidade e Política de Cookies.</p>
            <form onSubmit={handleSubmit2}>
                <input
                    type="cnpj"
                    id="cnpj"
                    name="cnpj"
                    placeholder="CNPJ"
                    required={true}
                    onChange={(e) => setCnpj(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp2 && <input
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

export default AuthModalEmpresa