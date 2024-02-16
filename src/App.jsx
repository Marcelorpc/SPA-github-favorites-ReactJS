import './global.css'

import styles from './App.module.css'
 
import { AppHeader } from './components/AppHeader'

function App() {
  return (
    <main>
      <div className={styles.app}>
        <AppHeader />
      </div>
    </main>
  )
}

export default App