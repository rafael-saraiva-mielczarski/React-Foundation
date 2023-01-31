import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Produtos.css';
import { useFetch } from '../hooks/useFetch';

const baseURL = 'http://localhost:3000/products'

const Produtos = () => {
    const [produtos, setProdutos] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    //resgatando os dados
    //o useEffect é um hook que permite que certo código rode apenas uma vez
    // useEffect(() => {
    //     axios.get(baseURL)
    //     .then((res) => setProdutos(res.data))
    //     .catch((err) => console.log(err))
    // }, []);

    //O custom hook deixa o codigo mais limpo, pois manda para um outro arquivo toda a parte de requisicao httop
    //Renomear a data por items e depois mudar no map somente, fazer uma validacao para que o map n esteja percorrendo um null
    const { data: items, loading } = useFetch(baseURL)

    //criando produtos por forms
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(baseURL, {
            name,
            price
        }).then(
            (res) => setProdutos(prevItems => [...prevItems, res.data])
            ).catch(
                (err) => console.log(err))

        setName("");
        setPrice("");
    };

    const handleDelete = (e) => {
        e.preventDefault()

        axios.delete(`${baseURL}/-1`)
        .then(
            (res) => setProdutos(prevItems => [...prevItems, res.data]),
            alert('Produto Deletado')
            )
    }

    return (
        <div>
            {loading && <p>Carregando Dados...</p>}
            {items && items.map((produto) => (
                <ul key={produto.id}>
                    <li>Nome: {produto.name} - Preço: {produto.price}</li>
                </ul>
            ))}
            <div className='add-product'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input type="text" 
                        placeholder="Casaco" 
                        value={name}
                        name="name" 
                        onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label>
                        Preço:
                        <input 
                        type="text" 
                        placeholder="20.0" 
                        value={price}
                        name="price" 
                        onChange={(e) => setPrice(e.target.value)}/>
                    </label>
                    <input type="submit" value="Criar Produto" />
                </form>
            </div>
            <button onClick={handleDelete}>Deletar Produto</button>
        </div>
    )
}

export default Produtos