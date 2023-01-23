import './MyForm.css';
import { useState } from "react"

const MyForm = ({ user }) => {
    
    // Controlled inputs, quando ja temos dados base, usar a condicional para checar se existe aquele dado e designar o value com nome igual a variavel no input desejado
    // Gerenciando os dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '')
    const [sexo, setSexo] = useState(user ? user.sexo: '')

    const handleName = (e) => {
        setName(e.target.value)
    };

    // Envio dos dados, sempre usar o preventDefault para nao haver um reload na pagina
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, sexo)
        // Limpar o form apos enviado, uma vez criado o value no input, basta usar setVariavel como vazio para resetar
        setName('')
        setEmail('')
        setBio('')
        setSexo('')
    };

    console.log(name);
    console.log(email);

    return (
        <div>
            {/* Criacao do form */}
            <form onSubmit={handleSubmit}>
                <div>
                    {/* HtmlFor e name tem que ter o mesmo valor*/}
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Digite seu nome:" 
                    onChange={handleName}
                    value={name}/>
                </div>
                {/* Label sem o htmlfor, envolvendo o input */}
                <label>
                    <span>Email</span>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Digite seu email:" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/>
                </label>
                {/* Textarea */}
                <label>
                    <span>Descrição: </span>
                    <textarea 
                    name="bio" 
                    placeholder='Descrição do user:'
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                    cols="30"
                    ></textarea>
                </label>
                <label>
                    <span>Sexo:</span>
                    <select 
                    name="sexo" 
                    onChange={(e) => setSexo(e.target.value)}
                    value={sexo}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm