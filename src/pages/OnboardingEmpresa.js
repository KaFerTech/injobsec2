import Nav from '../components/Nav'
import { useState } from 'react'

const OnBoardingEmpresa = () => {

    const [formData, setFormData] = useState({

        first_name_empresa: "",
        show_gender: false,
        gender_identity: "man",
        gender_interest: "woman",
        url: "",
        about: "",
        matches: []

    })

    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()


    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            <Nav
                setShowModal={() => {
                }}
                showModal={false}
            />
            <div className="onboarding">
                <h2>CRIE SUA CONTA</h2>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="name_empresa">Nome da Empresa</label>
                        <input
                            id="name_empresa"
                            type='text'
                            name="name_empresa"
                            placeholder="Nome da Empresa"
                            required={true}
                            value={formData.name_empresa}
                            onChange={handleChange}
                        />
                        <label>CNPJ</label>
                        <div className="multiple-input-container">
                            <input
                                id="cnpj"
                                type='text'
                                name="cnpj"
                                placeholder="00.000.000/0000-00"
                                required={true}
                                value={formData.cnpj}
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="show-gender">Endereço</label>
                        <div className="multiple-input-container">
                            <input
                                id="endereco_empresa"
                                type='text'
                                name="endereco_empresa"
                                placeholder="Rua Exemplo"
                                required={true}
                                value={formData.endereco_empresa}
                                onChange={handleChange}
                            />
                            <input
                                className='div-number'
                                id="n_empresa"
                                type='number'
                                name="n_empresa"
                                placeholder="Nº"
                                required={true}
                                value={formData.n_empresa}
                                onChange={handleChange}
                            />
                            <input
                                id="cidade_empresa"
                                type='text'
                                name="cidade_empresa"
                                placeholder="Cidade"
                                required={true}
                                value={formData.cidade_empresa}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="multiple-input-container">
                            <input
                                id="estado_empresa"
                                type='text'
                                name="estado_empresa"
                                placeholder="Estado"
                                required={true}
                                value={formData.estado_empresa}
                                onChange={handleChange}
                            />
                            <input
                                id="pais_empresa"
                                type='text'
                                name="pais_empresa"
                                placeholder="País"
                                required={true}
                                value={formData.pais_empresa}
                                onChange={handleChange}
                            />
                        </div>
                        <label>Contatos</label>
                        <div className="multiple-input-container">
                            <input
                                id="telefone_empresa"
                                type='text'
                                name="telefone_empresa"
                                placeholder="Telefone"
                                required={true}
                                value={formData.telefone_empresa}
                                onChange={handleChange}
                            />
                            <input
                                id="email_empresa"
                                type='text'
                                name="email_empresa"
                                placeholder="E-mail"
                                required={true}
                                value={formData.email_empresa}
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="about_empresa">Sobre a Empresa</label>
                        <input
                            id="about_empresa"
                            type="text"
                            name="about_empresa"
                            required={true}
                            placeholder="Sobre..."
                            value={formData.about_empresa}
                            onChange={handleChange}
                        />
                        <button className='submit-forms' type="submit">SALVAR</button>
                    </section>
                    <section>
                        <label htmlFor="url">Logo da Empresa</label>
                        <input
                            type="image"
                            src="logo192.png"
                            name="image"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            {formData.url && <img src={formData.url} alt="profile pic preview" />}
                        </div>
                    </section>

                </form>


            </div>
        </>
    )
}
export default OnBoardingEmpresa