programa {

/*Criar um programa que simule o login de um roteador. O nome de usu�rio (username) � "admin" e a senha (password) "123". 
Pedir ao usu�rio para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!",
 caso contr�rio "Login falhou!". (DESAFIO: Mostrar mensagens espec�ficas para erro de username, de password ou de ambos).  */
  funcao inicio() {
   cadeia senha, username

   escreva("Digite o nome de usu�rio: ")
   leia(username)
   escreva("Digite a senha de de login: ")
   leia(senha)

   se(username != "admin"){
    escreva("Nome de usu�rio incorreto!\n")
   }
   se ( senha != "123"){
    escreva("Senha incorrta!\n")
   }
   se(username != "admin" e  senha != "123"){
    escreva("Login falhou!\n")
   }
   se(username == "admin" e  senha == "123"){
    escreva("Login efetuado!")
   }
  }
}

