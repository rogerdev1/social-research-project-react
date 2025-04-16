import { useState, useRef, useEffect} from 'react'
import styles from '../../styles/Home.module.css'

export const useEsconderIntro = () => {
    const buttonHiddenTextIntro = useRef(null)
    const containerTextIntro = useRef(null)
    const esconderIntro = () => {
        if (buttonHiddenTextIntro.current) {
            containerTextIntro.current.style.transition = '1s ease-in-out'
            containerTextIntro.current.style.display = 'none'
            document.querySelector('form').style.display = 'flex'
        }
    }

    return {buttonHiddenTextIntro, containerTextIntro, esconderIntro}
}

export const cidadesRS = [
    { nome: 'Porto Alegre', sigla: 'POA' },
    { nome: 'Canoas', sigla: 'CAN' },
    { nome: 'Novo Hamburgo', sigla: 'NH' },
    { nome: 'São Leopoldo', sigla: 'SL' },
    { nome: 'Cachoeirinha', sigla: 'CACH' },
    { nome: 'Gravataí', sigla: 'GRA' },
    { nome: 'Viamão', sigla: 'VIA' },
    { nome: 'Esteio', sigla: 'EST' },
    { nome: 'Sapucaia do Sul', sigla: 'SAP' },
    { nome: 'Alvorada', sigla: 'ALV' }
]

export const useEndereco = () => {
    const ruaInput = useRef(null);
    const bairroInput = useRef(null);
    const cepInput = useRef({ value: ''});
    const spanCidade = useRef(null);
    
    const consultaCEP = () => {
        let urlCEP = `http://viacep.com.br/ws/${cepInput.current.value}/json/`
        fetch(urlCEP)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        ruaInput.current.value = data.logradouro;
        ruaInput.current.disabled = true;
        bairroInput.current.value = data.bairro;
        bairroInput.current.disabled = true;
        spanCidade.current.removeChild(spanCidade.current.querySelector(`select`));
        // Criando um novo elemento input para a cidade
        const inputText = document.createElement('input');
        inputText.type = 'text';
        inputText.classList.add('form-control');
        inputText.disabled = true;
        inputText.name = 'cidade';
        inputText.id = styles.cidade;
        inputText.value = data.localidade;

        // Adicionando o novo elemento input à spanCidade
        spanCidade.current.appendChild(inputText);
        })
        .catch(error => {
            console.error('Erro ao consultar CEP:', error);
        });
    }

    useEffect(() => {
        consultaCEP()
    }, [])

    return {ruaInput, bairroInput, cepInput, spanCidade, consultaCEP}
}

export const useAguaChecked = () => {
    const [aguaChecked, setAguaChecked] = useState(false);
    const handleCheckAguaChange = (event) => { setAguaChecked(event.target.checked) }

    return { aguaChecked, handleCheckAguaChange }
}

export const useLuzChecked = () => {
    const [luzChecked, setLuzChecked] = useState(false);
    const handleCheckLuzChange = (event) => { setLuzChecked(event.target.checked) }

    return{ luzChecked, handleCheckLuzChange}
}

export const useMostrarSegundaParte = () => {
    const [mostarSegundaParte, setMostarSegundaParte] = useState(false);
    const handlerMostarSegundaParte = (event) => {
        event.preventDefault()
        setMostarSegundaParte(true)
    }

    return { mostarSegundaParte, handlerMostarSegundaParte}
}

export const useConcordoChecked = () => {
    const [concordoCheck, setConcordoCheck] = useState(false)
    const handleCheckConcordoChange = (event) => {
        setConcordoCheck(event.target.checked)
    }
    return { concordoCheck, handleCheckConcordoChange }
}

export const useSelectQualAgua = () => {
    const selectQualAgua = useRef(null);
    const [aguaLabel, setAguaLabel] = useState('Número do ramal')
    const handleQualAguaChange = () => {
        const qualAguaOption = selectQualAgua.current.value;

        if (qualAguaOption === 'corsan') {
            setAguaLabel("Código do imóvel")
        } else {
            setAguaLabel("Número do ramal")
        }
    }

    return { selectQualAgua, aguaLabel, handleQualAguaChange }
}

export const useExibirPopupAgua = () => {
    const [exibirPopupAgua, setExibirPopupAgua] = useState(false);

    const tooltipAguaHover = () => {
        setExibirPopupAgua(true);
    };

    const fecharPopupAgua = () => {
        setExibirPopupAgua(false);
    };
      
    return { exibirPopupAgua, tooltipAguaHover, fecharPopupAgua }
}

export const useExibirPopupLuz = () => {
    const [exibirPopupLuz, setExibirPopupLuz] = useState(false);
    const tootipLuzHover = () => {
        setExibirPopupLuz(true);
    };
    
    const fecharPopupLuz = () => {
        setExibirPopupLuz(false);
    };

    return { exibirPopupLuz, tootipLuzHover, fecharPopupLuz }
}

export const useMostrarQualMaterialDanificadoAgua = () => {  
    const materialDanificadoAgua = useRef(null);
    const qualMaterialDanificadoAgua = useRef(null);
    const [mostrarQualMaterialDanificadoAgua, setMostrarQualMaterialDanificadoAgua] = useState(false);
    const handleMostrarQualMaterialDanificadoAgua = () => {
        const materialDanificadoAguaOption = materialDanificadoAgua.current.value;
    
        materialDanificadoAguaOption === 'simDano' ? setMostrarQualMaterialDanificadoAgua(true) : setMostrarQualMaterialDanificadoAgua(false)
    
    }
    return { materialDanificadoAgua, qualMaterialDanificadoAgua, mostrarQualMaterialDanificadoAgua, handleMostrarQualMaterialDanificadoAgua }
}

export const useMostrarQualMaterialDanificadoLuz = () => {
    const materialDanificadoLuz = useRef(null);
    const [mostrarQualMaterialDanificadoLuz, setMostrarQualMaterialDanificadoLuz] = useState(false);
    const handleMostrarQualMaterialDanificadoLuz = () => {
        const materialDanificadoLuzOption = materialDanificadoLuz.current.value;
    
        materialDanificadoLuzOption === 'simDano' ? setMostrarQualMaterialDanificadoLuz(true) : setMostrarQualMaterialDanificadoLuz(false)
    }
    return { materialDanificadoLuz, mostrarQualMaterialDanificadoLuz, handleMostrarQualMaterialDanificadoLuz }
}

export const useDadosFormulario = () => {
    const [dadosFormulario, setDadosFormulario] = useState({
        nome: '',
        telefone: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        problemaAgua: false,
        qualAgua: '',
        problemaLuz: false
    })

    const handleDadosFormulario = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setDadosFormulario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return {dadosFormulario, handleDadosFormulario}
}