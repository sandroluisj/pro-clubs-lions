const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
let times = []
menu()

    function menu(){
 console.log(`
   1-cadastrar clube
   2- listar clubes
    3- editar clubes
    4- registrar partida
    5- artilheiro do time
    6- tabela `)
    
    rl.question('Escolha uma opção: ', (opcao) => {
        switch(opcao){
            case "1":
            cadastrar()
            break

            case "2": 
            listar()
            break

            case "3":
            editar()
            break

            case "4": 
            registrar()
            break

            case "5": 
            estastistica()
            break
            
            case "6": 
            tabela()
            break
            

            default:
                console.log("Opcão inválida.")
                menu()
                break                
        }
        })
} 
function cadastrar() {
    rl.question("Digite o nome do time:" , (nome) => {
        rl.question("Digite qual é o rank do time na tabela do campeonato:" , (valor) => {
            times.push({nome: nome, valor: parseFloat(valor)})
            console.log("time cadastrado!")
            menu()
        })
    }) 
}

function listar() {
    if (times.length == 0){
    console.log("Ainda não há nenhum clube cadastrado.")
    menu()
    }
    else {
    console.log(times)
    menu()
    }
}
    function editar(){
        if (times.length == 0) {
            console.log("Ainda não há time cadastrados.")
            menu()
        }else {
            console.log('listar dastro ')
            times.forEach((times, index) => {
                console.log(`${index +1}. ${times.nome}`)
            })
            
            rl.question ("Digite o numero do time que deseja editar.", (numero) => {
                if (numero > 0 && numero <= times.length) {
                    rl.question('Digite o nome do clube:' , (nome) => {
                        rl.question('Digite a colocação:', (valor) =>{
                            times[numero - 1] = {
                                nome, 
                                valor
                            }
                            console.log("times editado com sucesso!")
                            menu()
                        })
                    })
                }else {
                    console.log('times inválido, tente novamente.')
                    menu()
                }
        })
    }
    }
    function registrar() {
        if (times.length === 0) {
            console.log("Ainda não há times cadastrados.");
            menu();
        } else {
            console.log('Lista de times cadastrados:');
            times.forEach((time, index) => {
                console.log(`${index + 1}. ${time.nome}`);
            });
    
            rl.question("Digite o número do time que venceu: ", (numeroVencedor) => {
                let vencedorIndex = parseInt(numeroVencedor) - 1;
    
                rl.question("Digite o número do time que perdeu: ", (numeroPerdedor) => {
                    let perdedorIndex = parseInt(numeroPerdedor) - 1;
    
                    if (vencedorIndex < 0 || vencedorIndex >= times.length || perdedorIndex < 0 || perdedorIndex >= times.length) {
                        console.log("Número de time inválido.");
                    } else {
                        let timeVencedor = times[vencedorIndex];
                        let timePerdedor = times[perdedorIndex];
    
                        console.log(`Partida registrada:\n${timeVencedor.nome} venceu ${timePerdedor.nome}`);
                        
                    }
    
                    readline
                    menu();
                });
            });
        }
    }
function artilheiro() {
        rl.question("Digite o artilheiro do campeonato:" , (artilheiro) => {
          
         times.push({artilheiro: artilheiro})
                console.log(times)
                menu()
            })}
    
   
    
   
    
