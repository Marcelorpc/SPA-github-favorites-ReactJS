import { useState } from 'react'
import styles from './AppList.module.css'
import { UserProfile } from './UserProfile'

export function AppList() {
  const [users, setUsers] = useState([
    {
      id: 1,
      avatar_ulr: 'https://avatars.githubusercontent.com/u/105247533?v=4',
      name: 'Marcelo Paiva Chaves',
      login: 'Marcelorpc',
      public_repos: 20,
      followers: 18,
    },
    {
      id: 2,
      avatar_ulr: 'https://avatars.githubusercontent.com/u/105247533?v=4',
      name: 'Marcelo Paiva Chaves2',
      login: 'Marcelorpc2',
      public_repos: 202,
      followers: 182,
    },
  ])

  function testeTeste(){
    console.log('oi')
  }

  return (
    <div className={styles.appList}>
      <div className={styles.listHeader}>
        <div className={styles.user}>
          <p>Usuário</p>
        </div>

        <div className={styles.details}>
          <p>Repositórios</p>
          <p>Seguidores</p>
          <p>Remover</p>
        </div>
      </div>

      <div className={styles.usersList}>
        {
          users.map(user => {
            return (
              <UserProfile 
              id={user.id}
              avatar_url={user.avatar_ulr}
              name={user.name}
              login={user.login}
              public_repos={user.public_repos}
              followers={user.followers}
              />
            )
          })
        }
      </div>
    </div>
  )
}