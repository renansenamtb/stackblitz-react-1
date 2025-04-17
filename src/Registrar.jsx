import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from './config/firebaseConfig';
import styles from './vigia.module.css';

export default function Registrar() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      navigate('/login');
    } catch (erro) {
      alert('Erro ao cadastrar');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.formSection}>
          <h2>Registrar</h2>
          <form onSubmit={handleRegister}>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button type="submit">Registrar</button>
          </form>
          <div className={styles.link}>
            <Link to="/login">Faça login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
