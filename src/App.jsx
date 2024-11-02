import { Header } from "./components/Header"

import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <span>post post 1</span>
          <span>post post 2</span>
        </main>
      </div>
    </>
  )
}

export default App
