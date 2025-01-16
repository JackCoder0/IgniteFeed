import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import { Post } from './Post.jsx'
import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Teste"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus iste illo! Odio officia perferendis numquam beatae facere quisquam, reprehenderit non, repellendus quaerat, adipisci accusamus harum earum dolorem esse ad?"
          />
        </main>
      </div>
    </div>
  )
}