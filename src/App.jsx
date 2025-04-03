import { useState } from 'react';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from './styles/vigia.module.css'; 

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const autenticarComFirebase = async (evento) => {
    evento.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      alert('Logado com sucesso!');
    } catch (error) {
      alert('Erro no processo!');
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/ea/Mike_Ehrmantraut_BCS_S3.png" 
          alt="idoso do breaking bad"
          className={styles.imagem}
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
      </main>
    </div>
  );
}
