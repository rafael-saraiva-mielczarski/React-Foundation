const Challenge = () => {
    const n1 = 2;
    const n2 = 2;

    const handleSum = () => {
        console.log(n1+n2)
    };

    return (
        <div>
            <h1> Os valores que iremos somar são: {n1} e {n2} </h1>
            <button onClick={handleSum}> Clique aqui para somar os valores </button>
        </div>
    );
};

export default Challenge
