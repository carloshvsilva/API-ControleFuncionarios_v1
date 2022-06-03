# API-ControleFuncionarios_v1
<p align="justify"> Aplicação para administrar funcionários utilizando API Rest .net Core + banco de dados SQL SERVER + front para consumo da API </p>

## Programas e versões utilizados
- Microsoft SQL SERVER 2019
- Visual Studio 2022

## Passos para execução
- O arquivo script.sql contém as extrutura de banco de dados para funcionamento da API. Deve ser executado antes da execução da API.
- O diretório ControleDeFuncionario contém o projeto da API desenvolvida de .NET que executa a comunicação com o banco de dados.
- O diretório font contém um arquivo .js onde é possível edita-lo para executar alguns métodos da API. O arquivo .html mostra o resultado da chamada do método GET da API (para não ocorrer bloqueio pelo mecanismo CORS é necessário executar estes arquivo através de algum servidor web).

## Descrição da API
Os tipo de conteúdo da API é trabalhado em forma de JSON.
- O método GET retornar todos o funcionários cadastrados pela URL https://localhost:7083/api/Funcionarios , com a estrutura abaixo:<br>
```json
[
  {
    "id": 0,                  //Não deve ser informado no .JSON para método POST e PUT. É gerado automaticamente.
    "nome": "string",         //Campo obrigatório
    "sobrenome": "string",    //Campo obrigatório
    "email": "string",        //Campo obrigatório
    "telefone": "string",     //Não é obrigatório
    "lider": "string",        //Obrigatório informar "S" se o funcionário é um lider e "N" se não for um lider.
    "matricula_lider": 0,     //Não é obrigatório
    "nome_lider": "string",   //Não é obrigatório
    "senha": "string"         //Campo obrigatório
  }
]
```

- Também é possível utilizar o médoto GET para retornar um funcionário especifíco utilizando o ID (Matrícula) como parametro de seleção https://localhost:7083/api/Funcionarios/{id}
- Para inserir um funcionário utilize o método POST pela URL https://localhost:7083/api/Funcionarios/ sem a passagem de informação do ID.
- Para alterar informações de um funcionário utilize o método PUT pela URL https://localhost:7083/api/Funcionarios/{id} informando o ID (Matrícula) e passando as alterações necessárias em forma de JSON
- Para deletar um funcionário utilize o método DELETE pela URL https://localhost:7083/api/Funcionarios/{id} informando o ID (Matrícula).
