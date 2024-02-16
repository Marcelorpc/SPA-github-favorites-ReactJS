import styles from './AppHeader.module.css'

import { Star } from 'phosphor-react'

import githubLogo from '../assets/github-icon-1.svg'

export function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <img src={githubLogo} alt="Logotipo do github" />

      <form>
        <div className={styles.inputWrapper}>
          <label htmlFor="userInput">Digite um nome de usuário do github</label>
          <input id='userInput' type="text" placeholder='Digite um nome de usuário do github'/>
        </div>

        <button><Star size={32} weight='bold'/> FAVORITAR</button>
      </form>
    </div>
  )
}