let ingressoValor = 0;
let pipocaValor = 0;
let comboValor = 0;
let preçoFinal = 0;
let escolhaIngresso = "";
let confirmacaoPipoca = "";
//Criar um repositório no GitHub e Git

alert("Olá, seja bem vindo ao site ofical do CINEMA SCORCESE!");
alert("Qual serviço o senhor(a) deseja utilizar?");

//Definir o preço dos ingressos no Word. (Feito)
//Definir o preço a partir do dia no Word e código.
function compraIngresso() {
    alert("Você escolheu comprar ingresso.");
    let confirm = prompt("Por favor, escolha o filme e a sessão. Caso não sabia a programação, digite 'programação'.");
        if (confirm === "programação") {
            alert("Os filmes disponiveis no momento são:");
            alert("1. Inception\n2. Rua do Medo\n3. Mickey 9\n4. Lucy\n5. Top Gun");
                somaIngresso();
                confirmacaoPipoca = prompt("O senhor(a) deseja comprar algo para comer ao assistir o filme");
                if (confirmacaoPipoca.trim().toLowerCase() === "sim"){
                    infoCombos();
                    compraCombo();
                    preçoFinal = ingressoValor + comboValor;
                    alert(`O preço final ficara por: R$${preçoFinal}`);
                    alert(`Obrigado por utilizar nosso serviço`);
                }else {
                    alert(`O preço final ficara por: R$${preçoFinal}`);
                    alert(`Obrigado por utilizar nosso serviço`);     
                }
                }else {
                        somaIngresso()
                                confirmacaoPipoca = prompt("O senhor(a) deseja comprar algo para comer ao assistir o filme");
                                if(confirmacaoPipoca == "Sim");
                                infoCombos();
                                compraCombo();
                                preçoFinal = comboValor + ingressoValor;
                                alert(`O preço final fica R$${preçoFinal}`);
                                alert(`Obrigado por utilizar nosso serviço`);   
                        }

                }

//Crianda função para ver as informações dos combos. (FEITO)
//Pode ser um loop (while).
//Definir o preço dos combos no Word. (FEITO)
//Ajustar preço dos combos no Word e código.
/*function alimentos(){
    alert("Possuimos uma variedade de alimentos.\n Alimentos Separados\n Combos");
     let escolhaAlimentos = prompt("Qual é a escolha do senhor(a)?");
        if (escolhaAlimentos == "Combo"){
            infoCombos();
            let escolhaCombo = prompt("Qual combo o senhor deseja escolher?");
                if (escolhaCombo == "Combo padrão"){
                    alert("Otima escolha!O combo padrão sairá por 40");                    
                }
        }
         
}*/

function infoCombos(){
    alert("Os combos disponiveis com seus preços são:")
    alert("Combo padrão ~ R$50\n Combo dupla ~ R$60\n Combo dupla premium ~ R$70\n Combo Inception ~ R$65\n Combo Casal ~R$65");
    alert("Combo padrão (uma pipoca média e um refrigerante médio + uma guloseima)\n Combo dupla (duas pipocas médias e dois refrigerantes médios + uma guloseima)\n Combo dupla premium (dois baldes grandes e dois refrigerantes grandes + duas guloseimas)\n Combo Inception (um balde temático grande e dois refrigerantes grandes + duas guloseimas) \n Combo Casal (um balde grande e dois refrigerantes grandes + duas guloseimas)");
}

function confirmacaoBeneficio(){     
        ingressoValor = ingressoValor / 2;
        alert(`Otimo! O ingresso para o filme ${escolhaIngresso} sairá por R$${ingressoValor} Apenas pedimos para comprovar o beneficio ao entrar no cinema`);
}


//Operário ternário?
function somaIngresso(){
    escolhaIngresso = prompt ("Qual filme o senhor(a) deseja assistir?");
        if (escolhaIngresso === "Inception"){
            ingressoValor = 60;
        }else if (escolhaIngresso === "Rua do Medo"){
            ingressoValor = 35;
        }else if (escolhaIngresso === "Mickey 9"){
            ingressoValor = 50;
        }else if (escolhaIngresso === "Lucy"){
            ingressoValor = 40;       
        }else  {
            ingressoValor = 45;
}        
        let beneficio = prompt("Você possui algum dos beneficios abaixo?\n1.Meia-entrada\n2. Empresarial\n");
            if (beneficio.trim().toLowerCase() === "sim"){
                confirmacaoBeneficio();
        }

}
function compraCombo(){
    let escolhaCombo = prompt("Qual combo o senhor(a) deseja comprar?");
        if(escolhaCombo === "Combo padrão"){
            comboValor = 50;
            ("Otima escolha! O combo padrão sairá por R$50");
        }else if (escolhaCombo === "Combo dupla"){
            comboValor = 60;
            ("Otima escolha! O combo dupla sairá por R$60");
        }else if (escolhaCombo === "Combo dupla premium"){
            comboValor = 70;
            ("Otima escolha! O combo dupla premium sairá por R$70");          
        }else if (escolhaCombo === "Combo Inception"){
            comboValor = 65;
            ("Otima escolha! O combo Inception sairá por R$65");
        }else if(escolhaCombo === "Combo casal"){
            comboValor = 65;
            ("Otima escolha! O combo casal sairá por R$65");
            }else {
                comboValor = 0;
                alert("Combo não encontrado.");
            }
            
        }

//Usar While
function compraAlimentos(){
   alert("Boas-vindas ao serviço da compra dos alimentos do Cinema SCORCESE!");
   alert("ATENÇÃO! PARA A RETIRADA DOS ALIMENTOS É NECESSARIO O COMPROVANTE DA COMPRA, E APRESENTA-LA NO BALCÃO");
    let decisão = prompt("Qual alimento o seu deseja compra-lo? Caso queira saber todas as opçoes digite 'saber'");
        if (decisão.trim().toLowerCase() === "saber"){
            infoAlimentos();         
        }else {

        }
    
}

//Criar variveis para cada combo?
function programacaoFilmes(){
    alert("1. Inception\n2. Rua do Medo\n3. Mickey 9\n4. Lucy\n5. Top Gun");
}

function infoAlimentos(){
            alert("Pipocas");
            alert("Pipoca pequena (base) – R$40\n Pipoca média (base) - R$55\n Pipoca grande (base) - R$ 70\n Balde médio (base) – R$60\n Balde grande (base) – R$80");
            alert("Sabores");
            alert("Amanteigada\n Doce\n Chocolate");
            alert("Refrigerantes");
            alert("Refrigerante pequeno (qualquer sabor) – R$15\n Refrigerante médio (qualquer sabor) - R$20n\ Refrigerante Grande (qualquer sabor) - R$25");
            alert("Guloseimas");
            alert("Balas Fini’s (pequena) - R$3\n Balas Fini’s (grande) - R$6\n Chocolate (pequeno) - R$2,50\n Chocolate (grande) - R$4\n Amendoim – R$ 3");
            infoCombos();
}


//Criar outro while para caso o cliente não queira sabores da pipoca.
//Colocar a escolha de ser uma ou mais pipocas, refrigerantes, guloseimas.
function somaAlimentos(){
    let decisaoAlimento = prompt("Qual alimento o senhor deseja comprar?");
        while(decisaoAlimento != "nao"){
            let adicaoAlimento = prompt("Qual alimento deseja adicionar?");
                if(adicaoAlimento.trim().toLowerCase() === "Pipoca pequena"){
                    alert("Ótimo, a pipoca pequena sairá por R$40");
                    pipocaValor = 40;
                    let decisaoSaborPipoca = prompt("Deseja adicionar algum sabor na pipoca?");
                        while (decisaoSaborPipoca.trim().toLowerCase() === "Sim"){
                            let saborPipoca = prompt("Qual saber o senhor(a) vai querer? Amanteigada, Doce ou Chocolate");
                                pipocaValor = pipocaValor + 1;
                                alert(`Certo então será uma Pipoca pequena com sabor ${saborPipoca}`);
                        }

                } 
        }
}