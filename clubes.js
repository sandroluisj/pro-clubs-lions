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
