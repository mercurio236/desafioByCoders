import { useState } from "react";
import './home.css';
import { cpfMask } from "../components/CPFMask/cpfmask";


export default function Home() {
    const [file, setFile] = useState([]);
    const [cpf, setCpf] = useState();

    function handleCpf(e) {
        setCpf(cpfMask(e.target.value))
    }

    const handleUploadFile = (e) => {
        //setFile(files);
        var reader = new FileReader();
        const files = e.target.files[0];
        reader.readAsText(files)
        reader.onload = function (event) {
            let fileContent = event.target.result;
            const allLines = fileContent.split(/\r \n | \n/);
            //setFile(allLines)
            console.log(files)

            allLines.forEach((line, indx) => {
                console.log(`current-line ${line} line-index ${indx}`)
                setFile({
                    texto: line,
                    index: indx,
                    info: files.name
                })
            })
        }

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
                    <input name="cpf" value={cpf} onChange={handleCpf} className="input" placeholder="Tipo de Transação" maxLength="14" />

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
                        {file.info}
                    </div>
                    <button type='submit' className="btnEnviar">Enviar</button>
                </form>
            </div>
        </div>
    )
}