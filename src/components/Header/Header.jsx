import React from 'react'
import styles from '../../styles/Header.module.css'
import imgHeader from '../../assets/estacio-vector-logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="d-flex align-items-center justify-content-evenly p-3">
      <div className="area-Logo d-flex align-items" style={{position: 'relative'}}>
          <span className="d-flex flex-column justify-content-center" style={{zIndex: '100', fontSize: 'large'}}>
              <span className="fw-bold text-white" style={{fontSize: 'large'}}>Projeto</span>
              <span className="fw-bold text-white" >Acadêmico</span> 
          </span>
          <div className="">
            <img src={imgHeader} style={{position: 'absolute', right: '-40px', top: '-15px', opacity: '0.3'}} alt="imagem logo cabeçalho" width="90%" />
          </div>         
      </div>
      <div className={styles.areaMenu}>
          <ul className="d-flex gap-4">
              <li>
                  <Link to="/">Início</Link>
              </li>
              <li>
                  <Link to="/About">Sobre</Link>
              </li>
              <li>
                  <Link to="/Contact">Contato</Link>
              </li>
          </ul>
      </div>
  </header>

  )
}
