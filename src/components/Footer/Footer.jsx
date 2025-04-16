import React from 'react'
import imgFooter from '../../assets/imgAutor.jpeg'
import styles from '../../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className="px-5">
        <div id={styles.footerLinha}></div>
        <h6 style={{paddingleft: '15%', fontSize:'small' }}className="mt-3 mb-0">Criado por:</h6>
        <div className={styles.footerDiv}>
            <div id={styles.footerDireito}>
                <figure id={styles.imgAutor}><img src={imgFooter} alt="imagem footer" /></figure>
                <div id={styles.sobreAutor}>
                    <h5 style={{fontSize:'medium'}}>Roger Vasconcelos Santana</h5>
                    <p className=" pt-1 pb-1 m-0" style={{fontSize: '11px'}}>📚 Graduando em Análise e Desenvolvimento de Sistemas</p>
                    <p style={{fontSize: '11.3px'}}>💼 Desenvolvedor Salesforce e Frontend</p>
                </div>
            </div>
            <div id={styles.footerEsquerdo} className="">
                <p style={{fontSize: 'small'}}>Uso exclusivo para fins acadêmicos.</p>
            </div>
        </div>
    </footer>
  )
}
