
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

function Login({ usuario }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para verificar se o usuário e senha estão corretos
    if (usuario && usuario.username === username && usuario.password === password) {
      setError('');
      // Aqui você pode redirecionar o usuário para a página principal
      setRedirect(true);
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  if (redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <Input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Entrar</Button>
    </Container>
  );
}

export default Login;