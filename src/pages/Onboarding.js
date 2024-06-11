import Nav from '../components/Nav'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const OnBoarding = () => {


    const [cookies,] = useCookies(['user'])
    const [formData, setFormData] = useState({
        user_id: cookies.UserId,
        nome_candidato: '',
        cpf_candidato: '',
        endereco_candidato: '',
        n_candidato: '',
        cidade_candidato: '',
        estado_candidato: '',
        pais_candidato: '',
        dob_day: '',
        dob_month: '',
        dob_year: '',
        gender_identity: '',
        telefone_candidato: '',
        email_candidato: '',
        about_candidato: '',
        linkedin_candidato: '',
        links_candidato: '',
        nivel_escolaridade_candidato: '',
        curso_candidato: '',
        instituicao_candidato: '',
        mes_inicio: '',
        ano_inicio: '',
        mes_termino: '',
        ano_termino: '',
        estado_estudo: '',
        tipo_habilidade: '',
        habilidade_candidato: '',
        int_habilidade_candidato: '',
        mes_inicio_habilidade: '',
        ano_inicio_habilidade: '',
        mes_conclusao_habilidade: '',
        ano_conclusao_habilidade: '',
        estado_habilidade: '',
        email: cookies.Email,
        url: "",
        matches: []

    })
    const [imageSrc, setImageSrc] = useState('https://i.imgur.com/9kugbS1.jpeg');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChangeImg = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);

            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    let navigate = useNavigate


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const reponse = await axios.put('http://localhost:8000/user', { formData })
            const sucess = reponse.status === 200
            if (sucess) navigate('/dashboard')

        } catch (err) {
            console.log(err)
        }

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
            <div className='scrolling-class'>
                <div className="onboarding">
                    <h1>DADOS DA CONTA</h1>
                    <h2>Informações pessoais</h2>
                    <form onSubmit={handleSubmit}>
                        <section>
                            <label htmlFor="nome_candidato">Nome Completo</label>
                            <input
                                id="nome_candidato"
                                type='text'
                                name="nome_candidato"
                                placeholder="João da Silva"
                                required={true}
                                value={formData.nome_candidato}
                                onChange={handleChange}
                            />
                            <label htmlFor="cpf_candidato">CPF</label>
                            <input
                                id="cpf_candidato"
                                type='text'
                                name="cpf_candidato"
                                placeholder="000.000.000-00"
                                required={true}
                                value={formData.cpf_candidato}
                                onChange={handleChange}
                            />
                            <label htmlFor="show-gender">Endereço</label>
                            <div className="multiple-input-container">
                                <input
                                    id="endereco_candidato"
                                    type='text'
                                    name="endereco_candidato"
                                    placeholder="Rua Exemplo"
                                    required={true}
                                    value={formData.endereco_candidato}
                                    onChange={handleChange}
                                />
                                <input
                                    className='div-number'
                                    id="n_candidato"
                                    type='number'
                                    name="n_candidato"
                                    placeholder="Nº"
                                    required={true}
                                    value={formData.n_candidato}
                                    onChange={handleChange}
                                />
                                <input
                                    id="cidade_candidato"
                                    type='text'
                                    name="cidade_candidato"
                                    placeholder="Cidade"
                                    required={true}
                                    value={formData.cidade_candidato}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="multiple-input-container">
                                <input
                                    id="estado_candidato"
                                    type='text'
                                    name="estado_candidato"
                                    placeholder="Estado"
                                    required={true}
                                    value={formData.estado_candidato}
                                    onChange={handleChange}
                                />
                                <input
                                    id="pais_candidato"
                                    type='text'
                                    name="pais_candidato"
                                    placeholder="País"
                                    required={true}
                                    value={formData.pais_candidato}
                                    onChange={handleChange}
                                />
                            </div>

                            <label>Data de Nascimento</label>
                            <div className="multiple-input-container">
                                <input
                                    id="dob_day"
                                    type="number"
                                    name="dob_day"
                                    placeholder="DD"
                                    required={true}
                                    value={formData.dob_day}
                                    onChange={handleChange}
                                />

                                <input
                                    id="dob_month"
                                    type="number"
                                    name="dob_month"
                                    placeholder="MM"
                                    required={true}
                                    value={formData.dob_month}
                                    onChange={handleChange}
                                />

                                <input
                                    id="dob_year"
                                    type="number"
                                    name="dob_year"
                                    placeholder="YYYY"
                                    required={true}
                                    value={formData.dob_year}
                                    onChange={handleChange}
                                />
                            </div>

                            <label>Gênero</label>
                            <div className="multiple-input-container">
                                <input
                                    id="man-gender-identity"
                                    type="radio"
                                    name="gender_identity"
                                    value="man"
                                    onChange={handleChange}
                                    checked={formData.gender_identity === "man"}
                                />
                                <label htmlFor="man-gender-identity">Homem</label>
                                <input
                                    id="woman-gender-identity"
                                    type="radio"
                                    name="gender_identity"
                                    value="woman"
                                    onChange={handleChange}
                                    checked={formData.gender_identity === "woman"}
                                />
                                <label htmlFor="woman-gender-identity">Mulher</label>
                                <input
                                    id="more-gender-identity"
                                    type="radio"
                                    name="gender_identity"
                                    value="more"
                                    onChange={handleChange}
                                    checked={formData.gender_identity === "more"}
                                />
                                <label htmlFor="more-gender-identity">Não Informar</label>
                            </div>

                            <label>Contatos</label>
                            <div className="multiple-input-container">
                                <input
                                    id="telefone_candidato"
                                    type='text'
                                    name="telefone_candidato"
                                    placeholder="Telefone"
                                    required={true}
                                    value={formData.telefone_candidato}
                                    onChange={handleChange}
                                />
                                <input
                                    id="email_candidato"
                                    type='text'
                                    name="email_candidato"
                                    placeholder="E-mail"
                                    required={true}
                                    value={formData.email_candidato}
                                    onChange={handleChange}
                                />
                            </div>

                            <label htmlFor="about">Sobre mim</label>
                            <input
                                id="about_candidato"
                                type="text"
                                name="about_candidato"
                                required={true}
                                placeholder="Caso queira compartilhar outras informações e/ou curiosidades"
                                value={formData.about_candidato}
                                onChange={handleChange}
                            />

                            <label htmlFor="linkedin_candidato">Linkedin</label>
                            <input
                                id="linkedin_candidato"
                                type="text"
                                name="about"
                                required={true}
                                placeholder="Link para o perfil"
                                value={formData.linkedin_candidato}
                                onChange={handleChange}
                            />

                            <label htmlFor="links_candidato">Outros</label>
                            <div className="multiple-input-container">
                                <input
                                    id="links_candidato"
                                    type="text"
                                    name="about"
                                    required={true}
                                    placeholder="Exemplo: GitHub, Behance, etc."
                                    value={formData.links_candidato}
                                    onChange={handleChange}
                                />
                                <button type="button" onclick="alert('Hello World!')">Adicionar</button>
                            </div>
                        </section>
                        <section>
                            <label htmlFor="url">Foto de Perfil</label>
                            <input
                                type="file"
                                accept="image/*"
                                name="image"
                                id="url"
                                onChange={handleChangeImg}
                                required={true}
                            />
                            {imageSrc && (
                                <div>
                                    <p>Imagem selecionada:</p>
                                    <img src={imageSrc} alt="Selected profile" style={{ width: '450px', height: '450px', borderRadius: '10%', marginInline: 'auto', border: 'solid 1px', alignContent: 'center'}} />
                                </div>
                            )}
                        </section>
                    </form>
                    <br></br>
                    <h2>Formação Acadêmica</h2>
                    <form onSubmit={handleSubmit}>
                        <section>
                            <label htmlFor="nivel_escolaridade_candidato">Nível de Escolaridade</label>
                            <select
                                id="nivel_escolaridade_candidato"
                                name="nivel_escolaridade_candidato"
                                value={formData.nivel_escolaridade_candidato}
                                onChange={handleChange}
                                required={true}
                            >
                                <option value="">Selecione</option>
                                <option value="fundamental-incompleto">Ensino Fundamental Incompleto</option>
                                <option value="fundamental-completo">Ensino Fundamental Completo</option>
                                <option value="medio-incompleto">Ensino Médio Incompleto</option>
                                <option value="medio-completo">Ensino Médio Completo</option>
                                <option value="tecnico-incompleto">Curso Técnico Incompleto</option>
                                <option value="tecnico-completo">Curso Técnico Completo</option>
                                <option value="superior-incompleto">Ensino Superior Incompleto</option>
                                <option value="superior-completo">Ensino Superior Completo</option>
                                <option value="pos-graduacao">Pós-Graduação</option>
                                <option value="mestrado">Mestrado</option>
                                <option value="doutorado">Doutorado</option>
                                <option value="pos-doutorado">Pós-Doutorado</option>
                            </select>
                            <label htmlFor="curso_candidato">Curso</label>
                            <input
                                id="curso_candidato"
                                type='text'
                                name="curso_candidato"
                                placeholder="Exemplo: Sistemas de Informação"
                                required={true}
                                value={formData.curso_candidato}
                                onChange={handleChange}
                            />
                            <label htmlFor="instituicao_candidato">Instituição de Ensino</label>
                            <input
                                id="instituicao_candidato"
                                type='text'
                                name="instituicao_candidato"
                                placeholder="Nome da instituição onde estudou"
                                required={true}
                                value={formData.instituicao_candidato}
                                onChange={handleChange}
                            /><div className="multiple-input-container">

                                <p>Data de Início</p>

                                <input
                                    id="mes_inicio"
                                    type="number"
                                    name="mes_inicio"
                                    placeholder="MM"
                                    required={true}
                                    value={formData.mes_inicio}
                                    onChange={handleChange}
                                />

                                <input
                                    id="ano_inicio"
                                    type="number"
                                    name="ano_inicio"
                                    placeholder="YYYY"
                                    required={true}
                                    value={formData.ano_inicio}
                                    onChange={handleChange}
                                />
                                <p>Data de Conclusão</p>
                                <input
                                    id="mes_termino"
                                    type="number"
                                    name="mes_termino"
                                    placeholder="MM"
                                    required={true}
                                    value={formData.mes_termino}
                                    onChange={handleChange}
                                />

                                <input
                                    id="ano_termino"
                                    type="number"
                                    name="ano_termino"
                                    placeholder="YYYY"
                                    required={true}
                                    value={formData.ano_termino}
                                    onChange={handleChange}
                                />
                            </div>
                            <label htmlFor="estado_estudo">Estado</label>
                            <select id="estado_estudo" name="education-level">
                                <option value="academico_cursando">Cursando</option>
                                <option value="academico_incompleto">Completo</option>
                                <option value="academico_completo">Interrompido</option>
                            </select>
                        </section>

                        <section>
                            <label htmlFor="outra_formacao">Outra Formação Acadêmica?</label>
                            <button type="button" onclick="alert('Hello World!')">Adicionar</button>
                        </section>
                    </form>
                    <br></br>
                    <h2>Habilidade</h2>
                    <form onSubmit={handleSubmit}>
                        <section>
                            <label htmlFor="tipo_habilidade">Tipo de Habilidade</label>
                            <select id="education-level" name="education-level">
                                <option value="hab_tec">Habilidades Técnicas</option>
                                <option value="hab_comp">Habilidades Comportamentais</option>
                                <option value="certificacoes">Certificações</option>
                            </select>
                            <label htmlFor="habilidade">Habilidade</label>
                            <input
                                id="habilidade_candidato"
                                type='text'
                                name="habilidade_candidato"
                                placeholder="Exemplo: programação, design, línguas estrangeiras, etc"
                                required={true}
                                value={formData.habilidade_candidato}
                                onChange={handleChange}
                            />
                            <label htmlFor="int_habilidade_candidato">Instituição de Ensino (OPCIONAL)</label>
                            <input
                                id="int_habilidade_candidato"
                                type='text'
                                name="int_habilidade_candidato"
                                placeholder="Nome da instituição onde estudou"
                                required={true}
                                value={formData.first_name}
                                onChange={handleChange}
                            /><div className="multiple-input-container">

                                <p>Data de Início</p>

                                <input
                                    id="mes_inicio_habilidade"
                                    type="number"
                                    name="mes_inicio_habilidade"
                                    placeholder="MM"
                                    required={true}
                                    value={formData.mes_inicio_habilidade}
                                    onChange={handleChange}
                                />

                                <input
                                    id="ano_inicio_habilidade"
                                    type="number"
                                    name="ano_inicio_habilidade"
                                    placeholder="YYYY"
                                    required={true}
                                    value={formData.ano_inicio_habilidade}
                                    onChange={handleChange}
                                />
                                <p>Data de Conclusão</p>
                                <input
                                    id="mes_conclusao_habilidade"
                                    type="number"
                                    name="mes_conclusao_habilidade"
                                    placeholder="MM"
                                    required={true}
                                    value={formData.ano_conclusao_habilidade}
                                    onChange={handleChange}
                                />

                                <input
                                    id="ano_conclusao_habilidade"
                                    type="number"
                                    name="mes_conclusao_habilidade"
                                    placeholder="YYYY"
                                    required={true}
                                    value={formData.mes_conclusao_habilidade}
                                    onChange={handleChange}
                                />
                            </div>
                            <label htmlFor="first_name">Estado</label>
                            <select id="estado_habilidade" name="education-level">
                                <option value="habilidade_cursando">Cursando</option>
                                <option value="habilidade_incompleto">Completo</option>
                                <option value="habilidade_completo">Interrompido</option>
                            </select>
                        </section>

                        <section>
                            <label htmlFor="first_name">Outra Habilidade?</label>
                            <button type="button" onclick="alert('Hello World!')">Adicionar</button>
                        </section>
                    </form>

                    <button className='submit-forms' type="submit">SALVAR</button>

                </div>
            </div>
        </>
    )
}
export default OnBoarding