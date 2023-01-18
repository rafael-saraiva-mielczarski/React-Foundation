const Events = () => {
    const handleClick = (e) => {
        console.log(e)
        alert('Evento ativado');
    };

    const renderAlgo = (x) => {
        if(x) {
            return <p> Renderizando um If true </p>;
        } else {
            return <p> Renderizando um If false </p>;
        }
    };

    return(
        <div>
            <div>
                <button onClick={handleClick}> Clique para um evento </button>
            </div>
            <div>
                {/* Func inline, utilizar quando é algo simples */}
                <button onClick={() => {alert('Evento Inline')}}> Clique para outro evento </button>
            </div>
            <hr />
            {renderAlgo(true)}
            {renderAlgo(false)}
        </div>
    );
};

export default Events