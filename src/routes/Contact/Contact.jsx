import React from 'react'
import styles from '../../styles/Contact.module.css'
import imgContact from '../../assets/foto_perfil.jpg'

export default function Contact() {
  return (
    <div class="d-flex align-items-center justify-content-center p-3">
      <figure id={styles.contatoImg} class="w-50 d-flex justify-content-center" style={{marginRight: '100px'}}>
          <img src={imgContact} alt="" width="" style={{borderRadius: '50%'}} />
      </figure>
      <div id={styles.contatoConteudo} class='w-50' style={{position: 'relative'}}>
          <a href="https://www.linkedin.com/in/roger-vasconcelos-santana-135442165/" target="_blank" rel="noopener noreferrer" id={styles.imgLinkedin} style={{top: '-200px'}}>
              <span style={{backgroundColor:'#0e76a8'}}><i class="bi bi-linkedin fs-1"></i></span>
              <p>Roger Vasconcelos Santana</p>
          </a>
          <a href="https://www.instagram.com/rogerdev_/" target="_blank" rel="noopener noreferrer" id={styles.imgInstagram}  style={{top: "-100px"}}>
              <span><i class="bi bi-instagram fs-1"></i></span>
              <p>@rogerdev_</p>
          </a>
          <a href="https://github.com/rogerdev1" target="_blank" rel="noopener noreferrer" id={styles.imgGitHub}  style={{top: '0px'}}>
              <span style={{backgroundColor: 'black'}}><i class="bi bi-github fs-1"></i></span>
              <p>@rogerdev1</p>
          </a>
          <a href="rogerdev.contato@gmail.com" target="_blank" rel="noopener noreferrer" id={styles.imgEmail}  style={{top: '100px'}}>
              <span style={{backgroundColor: 'gray'}}><i class="bi bi-envelope-at fs-1"></i></span>
              <p>rogerdev.contato@gmail.com</p>
          </a>
      </div>
  </div>

  )
}
