import React from "react";
import './home.css';

export default function Home() {



    return (
        <div className="containerHome">
            <div className="formOrg">
                <form className="form">
                    <label className="labelInput">Tipo de Transação</label>
                    <input className="input" placeholder="Tipo de Transação" autoFocus />

                    <label className="labelInput">Data da Ocorrencia</label>
                    <input className="input" placeholder="Tipo de Transação" />

                    <label className="labelInput">Valor da movimentação</label>
                    <input className="input" placeholder="Tipo de Transação" />

                    <label className="labelInput">CPF do beneficiario</label>
                    <input className="input" placeholder="Tipo de Transação" />

                    <label className="labelInput">Cartão utilizado na transação</label>
                    <input className="input" placeholder="Tipo de Transação" />

                    <label className="labelInput">Hora da ocorrência</label>
                    <input className="input" placeholder="Tipo de Transação" />

                    <label className="labelInput">Nome do representando da loja</label>
                    <input className="input" placeholder="Tipo de Transação" />

                    <label className="labelInput">Nome da loja</label>
                    <input className="input" placeholder="Tipo de Transação" />

                    <div className="upload">
                        <label for="labelInput">arquivo CNAB</label>
                        <input id="labelInput" type="file" accept="application/pdf" />
                    </div>

                </form>
            </div>
        </div>
    )
}