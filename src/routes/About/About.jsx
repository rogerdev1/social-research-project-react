import React from 'react'
import imgAbout from '../../assets/imgAutor.jpeg'
import styles from '../../styles/About.module.css'


export default function About(){

    return (
        <>
            <div className="d-flex align-items-center p-3">
                <figure id={styles.sobreImg} className="w-50">
                    <img src={imgAbout} alt="" width="80%"/>
                </figure>
                <div id={styles.sobreConteudo} className='w-50'>
                    <h3 className="display-6">Olá sou</h3>
                    <h1 className="display-4">ROGER VASCONCELOS SANTANA</h1>
                    <div >
                        <p className=" pt-1 pb-1 m-0" >
                            Sou Graduando em Análise e Desenvolvimento de Sistemas.
                        </p>
                        <p>
                            Atualmente trabalho como Desenvolvedor Salesforce.
                        </p>
                        <p style={{textAlign: 'justify'}} >
                            Criei esta página para coletar dados e elaborar relatórios como parte de um 
                            projeto acadêmico para a disciplina de Banco de Dados na Faculdade 
                            Estácio da Sá. 
                        </p>
                        <p className="fw-bold">
                            Não se preocupe, seus dados estarão totalmente protegidos e não serão compartilhado.
                        </p>
                        <p>
                            Agradeço muito seu apoio. 😁
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}