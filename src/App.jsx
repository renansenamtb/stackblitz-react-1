import { useState } from 'react';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { SignJWT } from 'jose';
import styles from './vigia.module.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const autenticarComFirebase = async (evento) => {
    evento.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);

      const secretKey = new TextEncoder().encode('MinhaChaveSecreta');
      const token = await new SignJWT({ user: 'admin' })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secretKey);

      localStorage.setItem('token', token);
      navigate('/');
      alert('Logado com sucesso!');
    } catch (error) {
      alert('Erro no processo!');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.formSection}>
          <h2>Login</h2>
          <form onSubmit={autenticarComFirebase}>
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Senha:</label>
            <input
              id="password"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button type="submit">Entrar</button>
          </form>
          <div className={styles.link}>
            <Link to="/registrar">Ainda não tem conta? Registre-se</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
