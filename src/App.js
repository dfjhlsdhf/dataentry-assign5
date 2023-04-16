import './App.css';
import { LoginForm} from './LoginForm';
import { MainPage } from './MainPage';
import { useState } from 'react';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const handleLogin = (username, password) => {
    // TODO: 实现登录验证逻辑
    setLoggedIn(true);
    setUsername(username);
  };

  const handleDataEntry = (file, url) => {
    // TODO: 实现数据录入逻辑
    console.log('Submitting data:', file, url);
  };
  if (!loggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }
  return <MainPage username={username} onDataEntry={handleDataEntry} />;
}

export default App;
