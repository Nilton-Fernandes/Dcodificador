
const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

document.querySelector(".btn-copiar").hidden = true;
document.querySelector("boneco").hidden = true;


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    document.querySelector(".btn-copiar").hidden = false;  
}

    function encriptar(stringEncriptada){
        let matrizCodigo = [["a","ala"],["e","enter"],["i", "imes"],["o","ober"],["u","ufat"]];
      stringEncriptada = stringEncriptada.toLowerCase();
        for (let i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
        return stringEncriptada;
        
    }
    function btnDesencriptar(){
        const textoEncriptado = desencriptar(textArea.value);
        mensagem.value = textoEncriptado;
        textArea.value = "";
    }
    
        function desencriptar(stringDesencriptada){
            let matrizCodigo = [["a","ala"],["e","enter"],["i", "imes"],["o","ober"],["u","ufat"]];
          stringDesencriptada = stringDesencriptada.toLowerCase();
    
            for (let i = 0; i < matrizCodigo.length; i++){
                if(stringDesencriptada.includes(matrizCodigo[i][1])){
                    stringDesencriptada = stringDesencriptada.replace(matrizCodigo[i][1], matrizCodigo[i][0]);
                }
            }
            return stringDesencriptada;
            
        }
        function copiarTexto() {
            const elementoTextarea = document.getElementById("textoParaCopiar");
            const textoParaCopiar = elementoTextarea.value;
        
            if (textoParaCopiar) {
                navigator.clipboard.writeText(textoParaCopiar)
                alert("texto copiado");           
        }else{
            alert("erro!!! não há texto para copiar");
        }
        document.querySelector(".btn-copiar"). hidden = true;
        mensagem.value = "";
        textArea.value = "";
    }