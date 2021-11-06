import { useState } from "react";
import './home.css';
import { cpfMask } from "../components/CPFMask/cpfmask";


export default function Home() {
    const [file, setFile] = useState([]);
    const [cpf, setCpf] = useState();
    const [nameFiles, setNameFiles] = useState([])
    const [seeData, setSeeData] = useState(false)

    function handleCpf(e) {
        setCpf(cpfMask(e.target.value))
    }

    const handleUploadFile = (e) => {
        var reader = new FileReader();
        const files = e.target.files[0];
        reader.readAsText(files)
        reader.onload = function (event) {
            let fileContent = event.target.result;
            const allLines = fileContent.split(/\r \n | \n/);
            setFile(allLines)
            setNameFiles(files)
            console.log(allLines)
        }
    }

    function handleSeeData(e) {
        e.preventDefault();
        setSeeData(true)
    }
    function handleCloseData(e) {
        e.preventDefault();
        setSeeData(false)
    }

    return (
        <div className="containerHome">
            <h1 className="title">Documentação do CNAB</h1>
            <div className="formOrg">
                <form className="form" onSubmit={() => { }}>
                    <label className="labelInput">Tipo de Transação</label>
                    <input type="text" className="input" placeholder="Tipo de Transação" autoFocus />

                    <label className="labelInput">Data da Ocorrencia</label>
                    <input type="date" className="input" placeholder="Tipo de Transação" />

                    <label className="labelInput">Valor da movimentação</label>
                    <input type="number" className="input" placeholder="Tipo de Transação" />

                    <label className="labelInput">CPF do beneficiario</label>
                    <input value={cpf} onChange={handleCpf} className="input" placeholder="Tipo de Transação" maxLength="14" />

                    <label className="labelInput">Cartão utilizado na transação</label>
                    <input type="number" className="input" placeholder="Tipo de Transação" />

                    <label className="labelInput">Hora da ocorrência</label>
                    <input type="time" className="input" placeholder="Tipo de Transação" />

                    <label className="labelInput">Nome do representando da loja</label>
                    <input type="text" className="input" placeholder="Tipo de Transação" />

                    <label className="labelInput">Nome da loja</label>
                    <input type="text" className="input" placeholder="Tipo de Transação" />

                    <div className='uploadContainer'>
                        <label className="upload" for="labelInput">Arquivo CNAB</label>
                        <input onChange={handleUploadFile} id="labelInput" type="file" accept="application/txt" />
                        {nameFiles.name}
                    </div>
                    <div className="btnForm">
                        <button onClick={(e) => e.preventDefault()} className="btnEnviar">Enviar</button>
                        <button onClick={handleSeeData} className="btnSeeFile">Exibir doc</button>
                    </div>
                </form>
            </div>
            {
                seeData === true ?(
                    <button className="btnClose" onClick={handleCloseData}>Fechar</button>
                ) : ''
            }
            {
                seeData === true ? (    
                    file.map((texto, id) => (
                            <div key={id} className="infoFile">
                                <div className="labelFile">
                                    <label>File: {String(texto).substring(0, 34)}</label>
                                    <label>Endereço: {String(texto).substring(38, 48)}</label>
                                    <label>Nome: {String(texto).substring(48, 81)}</label>
                                    <label>Protocolo: {String(texto).substring(81, 115)}</label>
                                    <label>Resto: {String(texto).substring(119, 129)}</label>
                                    <label>Comercio: {String(texto).substring(129, 162)}</label>
                                    <label>Numero: {String(texto).substring(162, 196)}</label>
                                    <label>Numero: {String(texto).substring(200, 210)}</label>
                                    <label>Comercio: {String(texto).substring(210, 243)}</label>
                                    <br />
                                </div>
                            </div>
                    ))
                ) : <> </>
            }

        </div>
    )
}