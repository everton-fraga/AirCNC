import React,{useState} from 'react';//useState retorna um vetor com 2 vlrs
import api from '../../services/api';

export default function Login({history}){
  const [email, setEmail] = useState('');
  //<variavel>,<função>
  async function handleSubmit(event){
  event.preventDefault();

  const response = await api.post('/sessions', {email});
    //chama o servidor
    //não precisa coloca a url inteira pq já tá configurado a base_url pro axios, arquivo api.js
    //no envio do parametro o correto é <chave> : <valor> (email:email), 
    //  mas como a chave e o vlr é o mesmo, pode suprimir
    // o retorno vai ficar na variavel response

    //console.log(response);
    const {_id} = response.data;
    console.log(_id);

    //Guarda id do usuario no banco de dados do navegador
    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }
  return (
    //crio uma tag fazia (no React é chamado de fragment) para unir os componentes
    // da tela, não podem ficar "soltos, sempre unidos por um"
    <>
      <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>      talentos    </strong> para sua empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input 
          type="email" 
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event=>setEmail(event.target.value)}
        />

        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}