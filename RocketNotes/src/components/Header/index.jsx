import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile , Logout } from './style'

import { useAuth } from '../../hooks/auth';

import { Link } from "react-router-dom";

export function Header(){

  const  { signOut } = useAuth()
  return (
    <Container>
      <Profile to='/profile'>
        <img 
          src="http://github.com/jmonteiroh.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo,</span>
          <strong>João Paulo Monteiro</strong>
        </div>

      </Profile>

      <Logout onClick={signOut} >
        <RiShutDownLine/>
      </Logout>

    </Container>
  )
}