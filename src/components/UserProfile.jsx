import styles from './UserProfile.module.css'

export function UserProfile({avatar_url, name, login, public_repos, followers}) {
  return (
    <div className={styles.userSection}>
      <div className={styles.userProfile}>
        <img src={avatar_url} alt="Foto de perfil do usuario" />

        <div className={styles.userProfileText}>
          <strong>{name}</strong>
          <span>{login}</span>
        </div>
      </div>

      <div className={styles.profileDetails}>
        <p>{public_repos}</p>
        <p>{followers}</p>
        <button>Remover</button>
      </div>
    </div>
  )
}