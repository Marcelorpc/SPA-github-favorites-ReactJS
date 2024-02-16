import styles from './AppList.module.css'

export function AppList() {
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
        <div className={styles.userSection}>
          <div className={styles.userProfile}>
            <img src="https://github.com/Marcelorpc.png" alt="Foto de perfil do usuario" />

            <div className={styles.userProfileText}>
              <strong>Marcelo Paiva</strong>
              <span>marcelorpc</span>
            </div>
          </div>

          <div className={styles.profileDetails}>
            <p>25</p>
            <p>84</p>
            <button>Remover</button>
          </div>
        </div>
      </div>
    </div>
  )
}