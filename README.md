<h1 align="center">       
  <br>🚀 OmniStack 9.0 <br>
</h1>

  <h4 align="center">
    <a href="#introdução">Introdução</a> |
    <a href="#back-end">Back-End</a> |
    <a href="#front-end">Front-End</a> |
    <a href="#mobile">Mobile</a> |
    <a href="#comandos-básicos">Comandos</a> |
    <a href="#erros-com-ubuntu">Erros com Ubuntu</a>
  </h4>

![omnistack-wallpaper-1920x1080](https://user-images.githubusercontent.com/51726945/66866288-5e0f9a80-ef6f-11e9-965c-a84004951792.png)

  ## Introdução
  
  - Este repositório tem o objetivo de criar uma aplicação Web e Mobal com criação de Spots, tendo resposta em Tempo Real. A resposta em Tempo Real, irá funcionar para reserver um Spot pelo App e Aceitar/Recusar pelo Web, entre outras coisas. 
  
  - No projeto será utilizado a stack de Node.js, ReactJS e React Native com o uso do MongoDB para banco de dados e também, Insomnia para realizar testes de API.
  
  
  ## Back-End
  
  - Após a configuração do Ambiente, com a instalação do Node.JS (10.16.3), Instalação do Yarn (1.19.1) e Instalação da IDE (Visual Studio Code), é preciso instalar as dependências necessárias para o projeto. Para isso, basta abrir o terminal do VSCode e executar os comandos abaixo.
  
  - **_Primeiramente, é necessário iniciar o yarn com o seguinte comando:_** ``` yarn init -y```
  
  - Após isso, aidiconar as dependências:
  
  1. A primeira dependência é a "Express", que irá fazer as definicões de rotas. 
  ```
  yarn add express  
  ```
  2. A segunda dependência é a "Nodemon", o qual é um utilitário que irá monitorar todas as alterações nos arquivos da aplicação e reiniciar automaticamente o servidor quando for necessário. 
  ```
  yarn add nodemon -D (É passado o -D para que seja feito somente em desenvolvimento)
  ```
  - Após adicionar o nodemon, foi criado em "package.json", um script da seguinte forma: 
  ```
  "scripts": {
    "dev": "nodemon src/server.js"
  },
  ```
  3. A teceira dependência a ser adicionada, é a "Mongoose". O Mongoose é uma biblioteca do Nodejs que proporciona uma solução baseada em esquemas para modelar os dados da sua aplicação. Ele possui sistema de conversão de tipos, validação, criação de consultas e hooks para lógica de negócios. Também, o Mongoose fornece um mapeamento de objetos do MongoDB similar ao ORM (Object Relational Mapping), ou ODM (Object Data Mapping) no caso do Mongoose. Isso significa que o Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação.
  ```
  yarn add mongoose
  ```
  4. A quarta dependência é a "Multer". O Multer é uma biblioteca para que o express entenda os diferentes tipos de dados, como por exemplo Imagens(PNG, JPG, etc), por padrão do projeto está pegando o JSON.
  ```
  yarn add multer
  ```
  5. Após criar o frontend, adicioar a quinta dependência "Cors". Com a implementação do CORS um domínio permite comunicação com outro de forma livre, independente do método da chamada (GET, POST, PUT ou DELETE) contanto que o domínio de destino tenha especificado esse tipo de comunicação.
  ```
  yarn add cors   
  ```
  
  6. Por fim, adicionar o socket.io.
  ```
  yarn add socket.io
  ```
  
  
  ## Front-End
  
  - Realizar o comando a seguir, na pasta da aplicação "aula" ```yarn create react-app frontend```
  - Depois de criar é necessário iniciar o backend, desenvolvido anteriormente com o comando: ```yarn dev``` e deixa-lo    aberto.
  - Após isso, basta abrir o projeto e iniciar o Yarn, com este comando: ```yarn start```   
  
  1. A primeira dependência é a "Axios". Axios é um cliente HTTP, que funciona tanto no browser quanto em Node.js. A biblioteca é basicamente uma API que sabe interagir tanto com XMLHttpRequest quanto com a interface http do node. Isso significa que o mesmo código utilizado para fazer requisições ajax no browser também funciona no servidor. Além disso, as requisições feitas através da biblioteca retornam uma promise, compatível com a nova versão do JavaScript - ES6.
  ```
  yarn add axios
  ```
  2. A sedunda dependência do Front-End, é o React-Router-Dom, para a definição de rotas dentro do Front.
  ```
  yarn add react-router-dom
  ```
  3. Por fim, adicionar o socket.io client.
  ```
  yarn add socket.io-client
  ```  
  
  
  ## Mobile
  
  - O primeiro passo, é para a instalação do Expo, utilizando o comando:```npm install -g expo-cli```
  - O segundo passo, é abrir a pasta que deseja criar o projeto mobile e excutar este comando:```expo init mobile``` (o mobile é o nome da pasta a ser criada, pode ter qualquer nome).
  - Por fim, deixar rodando com o comando: ````yarn start``` 
    
  1. A primeira dependência a ser adicionada é a "React-Navigation", para navegações dentro do React Native (mais utilizada no momento).
  ```
  yarn add react-navigation
  ```
  2. A segunda dependência é a "React-Native-Gesture-Handler", para as animações dentro do React Native.
  ```
  expo install react-native-gesture-handler react-native-reanimated
  ```
  3. A terceira depedência para a aplicação mobile é a "Axios", a mesma dependência já adicionada/configurada no projeto Back-End, anteriormente.
  ```
  yarn add axios
  ```
  4. Por fim, adicionar o socket.io client.
  ```
  yarn add socket.io-client
  ```
  
  
  ## Comandos Básicos
  
  1. O comando "code ." serve para iniciar o Visual Studio Code dentro de qualquer pasta que você desejar.
  
  2. Dentro do terminal do VSCode, é possível realizar os seguintes comandos.  
     - Executar o servidor node: ```node src/server.js```
     - Parar a execução do servidor Node: ```CTRL+C```
     - iniciar o servidor após criar o script em "pakage.json": ```yarn dev```
  
  
  ## Erros com Ubuntu:
  
  1. Geralmente, acontece muito problema de permissão negada (pelo menos no meu computador) então, é sempre necessário adicionar o comando ```sudo``` para executar os comandos como super usuário.
  2. Também, tive alguns problemas ao iniciar as aplicações, dando o seguinte erro:  "React Native Error: ENOSPC: System limit for number of file watchers reached". Para resolver, executei os seguintes comandos: 
  ```
  echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
  ```
  ```
  cat /proc/sys/fs/inotify/max_user_watches
  ```
  ```
  fs.inotify.max_user_watches=524288
  ```
  
  
  
  
