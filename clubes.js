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
    5- estasticas dos jogadores
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
