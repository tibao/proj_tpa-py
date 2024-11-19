import Pessoa
res = 0
def pergunta():
    res = int(input("Deseja cadastrar uma nova pessoa? 1 - SIM ou 0 - NÃO: "))
    return res

cadastro = []

res = pergunta()
while(res == 1):
    nome = str(input("Digite o nome da pessoa: "))
    idade = int(input("Digite a idade da pessoa: "))
    cargo = str(input("Digite o cargo da pessoa: "))
    salario = float(input("Digite o salário da pessoa: "))

    cadastro.append(Pessoa.Pessoa(nome,idade,cargo,salario))
    res = pergunta()

def mostrar():
    print("{<4}{<10}{<7}{<10}{<7}"
          .format("N°","Nome","Idade","Cargo","Salário"))
    for x in cadastro:
        print("{<4}{<10}{<7}{<10}{<7}".
              format(x,x.nome,x.idade,x.cargo,x.salario))