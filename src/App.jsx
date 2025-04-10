import { useState } from 'react';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { SignJWT } from 'jose';
import { Link } from 'react-router-dom';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

const navigate = useNavigate();

  const autenticarComFirebase = async (evento) => {
    evento.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      
const secretKey = new TextEnconder().encode('MinhaChaveSecreta');

const token = await new SignJWT({ user: 'admin'})
.setProtectedHeader({ alg: 'HS256'})
.setIssuedAt()
.setExpirationTime('1h')
.sign(secretKey);

localStorage.setItem('token', token);
navigate('/')

      alert('Logado com sucesso!');
    } catch (error) {
      alert('Erro no processo!');
    }
  };

  return (
    <div>
      <main>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/ea/Mike_Ehrmantraut_BCS_S3.png" 
          alt="idoso do breaking bad"
          
        />
        <form onSubmit={autenticarComFirebase}>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={senha}
            onChange={(evento) => setSenha(evento.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
        <Link to="/Registrar">
        <p>fala dai chefe</p>
        </Link>
      </main>
    </div>
  );
}
