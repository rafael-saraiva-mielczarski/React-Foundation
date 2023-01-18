const TemplateExpressions = () => {
    const name = 'Rafael'
    const data = {
        "nome": "Rafael",
        "profissiao": "Desenvolvedor"
    }

    return (
        <div>
            <h1> Olá { name }, legal né? </h1>
            <p> Quer dizer então que você é um { data.profissiao }, interessante! </p>
            <p> Da para somar assim também: 4 + 4 = {4 + 4} </p>
        </div>
    )
};

export default TemplateExpressions
