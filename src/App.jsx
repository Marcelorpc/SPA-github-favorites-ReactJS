import './global.css'

import styles from './App.module.css'
 
import { AppHeader } from './components/AppHeader'
import { AppList } from './components/AppList'

function App() {
  return (
    <main>
      <div className={styles.app}>
        <AppHeader />
        <AppList />
      </div>
    </main>
  )
}

export default App