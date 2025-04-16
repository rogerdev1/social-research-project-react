import React, {useEffect, useRef} from 'react'
import styles from '../../styles/Home.module.css'
import imgTooltipAgua1 from '../../assets/imgRamal.png'
import imgTooltipAgua2 from '../../assets/imgCodImovel.jpg'
import imgTooltipLuz from '../../assets/imgUC.png'
import {
    cidadesRS, useAguaChecked, useLuzChecked, useEsconderIntro, useMostrarSegundaParte,
    useEndereco, useConcordoChecked, useSelectQualAgua, useExibirPopupAgua, useExibirPopupLuz,
    useMostrarQualMaterialDanificadoAgua, useMostrarQualMaterialDanificadoLuz, useDadosFormulario
} from './service-home'

export default function Home() {
        
    const spanInfoAgua = useRef(null);
    const spanInfoLuz = useRef(null);
    const labelAgua = useRef(null);
    const checkboxAgua = useRef(null);
    const checkboxLuz = useRef(null);
    const btnProximo = useRef(null)
    const formFirstPart = useRef(null)
    const concordo = useRef(null)
    const btnEnviar = useRef(null)    
    const qualMaterialDanificadoLuz = useRef(null);
    const selectCidade = useRef(null);

        
    const { aguaChecked, handleCheckAguaChange } = useAguaChecked();
    const { luzChecked, handleCheckLuzChange } = useLuzChecked();
    const { buttonHiddenTextIntro, containerTextIntro, esconderIntro } = useEsconderIntro();
    const { ruaInput, bairroInput, cepInput, spanCidade, consultaCEP } = useEndereco();
    const { mostarSegundaParte, handlerMostarSegundaParte } = useMostrarSegundaParte();
    const { concordoCheck, handleCheckConcordoChange } = useConcordoChecked();
    const { selectQualAgua, aguaLabel, handleQualAguaChange } = useSelectQualAgua();
    const { exibirPopupAgua, tooltipAguaHover, fecharPopupAgua } = useExibirPopupAgua();
    const { exibirPopupLuz, tootipLuzHover, fecharPopupLuz } = useExibirPopupLuz();
    const { materialDanificadoAgua, qualMaterialDanificadoAgua, mostrarQualMaterialDanificadoAgua, handleMostrarQualMaterialDanificadoAgua } = useMostrarQualMaterialDanificadoAgua();
    const { materialDanificadoLuz, mostrarQualMaterialDanificadoLuz, handleMostrarQualMaterialDanificadoLuz } = useMostrarQualMaterialDanificadoLuz();
    const { dadosFormulario, handleDadosFormulario } = useDadosFormulario();

    useEffect(() => {
        cidadesRS.forEach(cidade => {
            const optionCidade = document.createElement('option')
            optionCidade.value = cidade.sigla
            optionCidade.innerHTML = cidade.nome
            selectCidade.current.appendChild(optionCidade)
        })
    }, [])

    

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/respostas', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ formulario: [dadosFormulario]})
        })
        .then(response => {
            console.log(response)
            if (response.ok) {
                console.log('Dados enviados')
            } else {
                console.error('erro');
                console.log(dadosFormulario.bairro, dadosFormulario.nome, dadosFormulario.cep, dadosFormulario.numero)
            }
        })
        .catch(error => {
            console.error('erroooooooo', error);
        })
    }

    return (
    <>
        <div ref={containerTextIntro} id={styles.containerTextIntro} className=" p-3 flex-column justify-content-evenly align-items-center">
            <div className="d-flex flex-column justify-content-evenly align-items-center mb-3">
                <h1 className="display-1">PESQUISA DE QUALIDADE</h1>
                <h1 className="display-6">ABASTECIMENTO DE ÁGUA E LUZ</h1>
                <h1 className="display-6 mb-3">NA SUA REGIÃO</h1>
                <p className="text-center" style={{margin: '0 auto', width: '80%', fontsize: '85%'}}>
                    Projeto academica para coleta de dados sobre a frequência, duração 
                    e localização das interrupções no fornecimento desses serviços básicos
                </p>
            </div>
            <button ref={buttonHiddenTextIntro} className={styles.buttonHiddenTextIntro} onClick={esconderIntro}>PREENCHA AQUI</button>
        </div>
        <form className="border mt-5 mb-5" onSubmit={handleSubmit}>
            <div id={styles.formFirstPart} ref={formFirstPart} style={{display: mostarSegundaParte ? 'none' : 'block'}}>
                <div className="d-flex" style={{gap: '8px'}}>
                    <span className="w-50">
                        <label htmlFor="nome" className="form-label">Nome:</label>
                        <input type="text" id={styles.nome} name="nome" className="form-control" value={dadosFormulario.nome} onChange={handleDadosFormulario} />
                        <div className={styles.helpText}></div>
                    </span>
                    <span className="w-50">
                        <label htmlFor="telefone" className="form-label">Telefone:</label>
                        <input type="tel" id={styles.telefone} name="telefone" className="form-control" value={dadosFormulario.telefone} onChange={handleDadosFormulario} />
                        <div className={styles.helpText}></div>
                    </span>
                </div>
                <div className="d-flex" style={{gap: '8px'}}>
                    <span style={{width: '20%'}}>
                        <label htmlFor="cep" className="form-label">Cep:</label>
                        <input type="text" ref={cepInput} id={styles.cep} name="cep" className="form-control" value={dadosFormulario.cep} onChange={handleDadosFormulario} onBlur={consultaCEP} />
                        <div className={styles.helpText}></div>
                    </span>
                    <span style={{width: '60%'}}>
                        <label htmlFor="rua" className="form-label">Rua:</label>
                        <input type="text" ref={ruaInput} id={styles.rua} name="rua" className="form-control" value={dadosFormulario.rua} onChange={handleDadosFormulario} />
                        <div className={styles.helpText}></div>
                    </span>
                    <span style={{width: '20%'}}>
                        <label htmlFor="numero" className="form-label">Numero:</label>
                        <input type="number" id={styles.numero} name="numero" className="form-control" value={dadosFormulario.numero} onChange={(e) => e.target.value} />
                        <div className={styles.helpText}></div>
                    </span> 
                </div>
                <div className="d-flex" style={{gap: '8px'}}>
                    <span style={{width: "33%"}}>
                        <label htmlFor="bairro" className="form-label">Bairro:</label>
                        <input type="text" ref={bairroInput} id={styles.bairro} name="bairro" className="form-control" value={dadosFormulario.bairro} onChange={handleDadosFormulario} />
                        <div className={styles.helpText}></div>
                    </span>
                    <span style={{width: "33%"}} ref={spanCidade} id={styles.spanCidade}>
                        <label htmlFor={styles.cidade} className="form-label">Cidade:</label>
                        <select name="selectCidade" ref={selectCidade} id={styles.selectCidade} className="form-control" value={dadosFormulario.cidade} onChange={handleDadosFormulario}>
                            <option value=""></option>                        
                        </select>
                        <div className={styles.helpText}></div>
                    </span>
                    <span style={{width: "33%"}}>
                        <label htmlFor="estado" className="form-label">Estado:</label>
                        <input type="text" id={styles.estado} name="estado" className="form-control" value="Rio Grande do Sul" disabled />
                        <div className={styles.helpText}></div>
                    </span>
                </div>
                <div className="mt-3">
                    <p>Onde você enfrenta problemas de abastecimento?</p>
                    <div className="d-flex justify-content-around">
                        <span className="d-flex flex-column">
                            <span>
                                <input 
                                    type="checkbox" 
                                    name="checkboxAgua" 
                                    ref={checkboxAgua} 
                                    id={styles.checkboxAgua} 
                                    className="form-check-input"
                                    checked={aguaChecked}
                                    onChange={handleCheckAguaChange}
                                />
                                <label htmlFor="checkboxAgua" className="form-check-label px-2">Água</label>    
                            </span>
                            <select 
                                name="qualAgua" 
                                ref={selectQualAgua} 
                                id={styles.qualAgua} 
                                className="form-select" 
                                style={{display: aguaChecked ? 'flex' : 'none'}}
                                onChange={handleQualAguaChange}
                                required
                            >
                                <option value="dmae">DMAE</option>
                                <option value="corsan">CORSAN</option>
                            </select>
                        </span>
                        <span className="">
                            <input 
                                type="checkbox" 
                                name="checkboxLuz" 
                                ref={checkboxLuz} 
                                id={styles.checkboxLuz} 
                                className="form-check-input"
                                checked={luzChecked}
                                onChange={handleCheckLuzChange}
                            />
                            <label htmlFor="checkboxLuz" className="form-check-label px-2">Luz</label>
                        </span>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button id={styles.btnProximo} ref={btnProximo} className="btn btn-primary" onClick={handlerMostarSegundaParte}>Proximo</button>
                </div>
            </div>

            <div id={styles.formSecondPart} style={{display: aguaChecked && luzChecked ? 'flex' : 'block'}}>

                <div id={styles.sobreAgua} className="p-2 border" style={{display: mostarSegundaParte && aguaChecked ? 'block' : 'none', width: aguaChecked && luzChecked ? '50%' : '100%'}}>
                    <h5 className="text-center text-white">Sobre água</h5>
                    <div className={styles.formDiv}>
                        <span ref={spanInfoAgua} className={styles.spanInfoAgua} onMouseOver={tooltipAguaHover} onMouseOut={fecharPopupAgua}> {/* d-flex justify-content-between px-2 */}
                            <label ref={labelAgua} htmlFor="labelAgua" id={styles.labelAgua}>{aguaLabel}</label>
                            <i className="bi bi-info-circle-fill"></i>
                        </span>
                        <input type="text" name="uc" id={styles.uc} className="form-control" />
                        {exibirPopupAgua && (
                            <>
                            {aguaLabel === 'Número do ramal' ? (
                                <img src={imgTooltipAgua1} className={styles.popupAgua} alt="Imagem Ramal" style={{ width: '350px', height: '106px' }} />
                            ) : (
                                <img src={imgTooltipAgua2} className={styles.popupAgua} alt="Imagem Código do Imóvel" style={{ width: '350px', height: '150px' }} />
                            )}
                            </>
                        )}
                    </div>
                    <div className={styles.formDiv}>
                        <p>Com que frequência você enfrenta problemas de abastecimento?</p>
                        <div className="" style={{gap: "8px"}}>
                            <select name="frequenciaAgua" id={styles.frequenciaAgua} className="form-select">
                                <option value="1x">1 vez no mês.</option>
                                <option value="3x">2 ou 3 vezes no mês.</option>
                                <option value="+3x">Mais de 3 vezes no mês.</option>
                            </select>
                            <div className={styles.helpText}></div>
                        </div>
                    </div>
                    <div className={styles.formDiv} style={{gap: '8px'}}>
                        <label htmlFor="tempoAgua" className="form-label">Há quanto tempo você enfrenta esses problemas?</label>
                        <select name="tempoAgua" id={styles.tempoAgua} className="form-select">
                            <option value="nao">Não tenho certeza.</option>
                            <option value="ate1">Menos de um ano.</option>
                            <option value="1-2">Entre 1 e 2 anos.</option>
                            <option value="+2">Mais de 2 anos</option>
                        </select>
                        <div className={styles.helpText}></div>
                    </div>
                    <div>
                        <label htmlFor="materialDanificadoAgua" style={{textAlign: 'justify'}}>Devido a falta de água, você teve algum material danificado?</label>
                        <select name="materialDanificadoAgua" ref={materialDanificadoAgua} id={styles.materialDanificadoAgua} className="form-select" onChange={handleMostrarQualMaterialDanificadoAgua}>
                            <option value="none"></option>
                            <option value="naoDano">Não</option>
                            <option value="simDano">Sim</option>
                        </select>
                    </div>
                    <div id={styles.divQualMaterialDanificadoAgua} style={{display: mostrarQualMaterialDanificadoAgua ? 'block' : 'none'}}>
                        <label htmlFor={styles.qualMaterialDanificadoAgua}>Quais materiais foram danificados?</label>
                        <textarea 
                            name="qualMaterialDanificadoAgua"
                            ref={qualMaterialDanificadoAgua} 
                            id={styles.qualMaterialDanificadoAgua} 
                            cols="" rows="" 
                            className="form-control"
                            ></textarea>
                    </div>

                </div>


                <div id={styles.sobreLuz} className="p-2 border" style={{display: mostarSegundaParte && luzChecked ? 'block' : 'none', width: aguaChecked && luzChecked ? '50%' : '100%'}}>
                    <h5 className="text-center text-white">Sobre Luz</h5>
                    <div className={styles.formDiv}>
                        <span ref={spanInfoLuz} className={styles.spanInfoLuz} onMouseOver={tootipLuzHover} onMouseOut={fecharPopupLuz}>
                            <label htmlFor="uc">Nº Unidade Consumidora (UC)</label>
                            <i className="bi bi-info-circle-fill"></i>
                        </span>
                        <input type="text" name="uc" id={styles.uc} className="form-control" />
                        {exibirPopupLuz && (
                            <div>
                                <img src={imgTooltipLuz} alt="" className={styles.popupLuz} />
                            </div>
                        )}
                    </div>
                    <div className={styles.formDiv}>
                        <p>Com que frequência você enfrenta problemas de abastecimento?</p>
                        <div className="" style={{gap: '8px'}}>
                            <select name="frequencia-agua" id={styles.frequenciaAgua} className="form-select">
                                <option value="1x">1 vez no mês.</option>
                                <option value="3x">2 ou 3 vezes no mês.</option>
                                <option value="+3x">Mais de 3 vezes no mês.</option>
                            </select>
                            <div className={styles.helpText}></div>
                        </div>
                    </div>
                    <div className={styles.formDiv} style={{gap: '8px'}}>
                        <label htmlFor="tempoLuz" className="form-label">Há quanto tempo você enfrenta esses problemas?</label>
                        <select name="tempoLuz" id={styles.tempoLuz} className="form-select">
                            <option value="nao">Não tenho certeza.</option>
                            <option value="ate1">Menos de um ano.</option>
                            <option value="1-2">Entre 1 e 2 anos.</option>
                            <option value="+2">Mais de 2 anos</option>
                        </select>
                        <div className={styles.helpText}></div>
                    </div>
                    <div>
                        <label htmlFor="materialDanificadoLuz" style={{textAlign: 'justify'}}>Devido a quedas de energia, você teve algum material elétrico danificado?</label>
                        <select name="materialDanificadoLuz" ref={materialDanificadoLuz} id={styles.materialDanificadoLuz} className="form-select" onChange={handleMostrarQualMaterialDanificadoLuz}>
                            <option value="none"></option>
                            <option value="naoDano">Não</option>
                            <option value="simDano">Sim</option>
                        </select>
                    </div>
                    <div id={styles.divQualMaterialDanificadoLuz} style={{display: mostrarQualMaterialDanificadoLuz ? 'block' : 'none'}}>
                        <label htmlFor={styles.qualMaterialDanificadoLuz}>Quais materiais foram danificados?</label>
                        <textarea 
                            name="qualMaterialDanificadoLuz"
                            ref={qualMaterialDanificadoLuz} 
                            id={styles.qualMaterialDanificadoLuz} 
                            cols="" rows="" 
                            className="form-control"
                            ></textarea>
                    </div>
                </div>
            </div>

            <div id={styles.formThirdPart} style={{display: mostarSegundaParte ? 'flex' : 'none', flexDirection: 'column'}} >
                <span>
                    <input 
                        type="checkbox" 
                        name="concordo"
                        ref={concordo} 
                        id={styles.concordo} 
                        className='form-check-input' 
                        checked={concordoCheck} 
                        onChange={handleCheckConcordoChange} 
                    />
                    <label htmlFor={styles.concordo} className='px-2 fs-6 mb-3'>Concordo com o uso destes dados fornecidos para fins acadêmicos.</label>
                </span>
                <span className="d-flex justify-content-center">
                    <button 
                        className="" 
                        id={styles.btnEnviar} 
                        ref={btnEnviar} 
                        style={{backgroundColor: concordoCheck ? '#ff505f' : 'gray'}}
                        disabled={concordoCheck ? false : true}
                        type='submit'
                    >
                        Enviar
                    </button>
                </span>
            </div>
        </form>
    </>
  )
}
