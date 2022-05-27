<h1 align="center">🌱 Plant Manager 🌵</h1>

<h4 align="center"> 
	  Status: Concluido 🚀 
</h4>
<br>
<p align="center">Foi desenvolvido um aplicativo para lhe ajudar a lembrar de cuidar de suas plantas de forma fácil de acordo com cada tipo de plantinha.</p>

<br>

## Funcionalidades

-  Salva a identificação do usuário no próprio dispositivo o usuário;
- Consome de API os dados e características de cada planta;
- Salva localmente a planta que o usuário possui;
- Lembra o usuário quando regar e cuidar da plantinha de acordo com a frequência ideial das plantas que o usuário possui;

<br>

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<br>

##  Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

<p align="center">
  <img  src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
  <img  src="https://img.shields.io/badge/-TypeScript-3178C6?&style=for-the-badge&logoColor=fff&logo=TypeScript&logoWidth=25"/>
  <img  src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor="/>
  <img  src="https://img.shields.io/badge/axios-7D4698?style=for-the-badge&logo=axios-Browser&logoColor=white"/>
  <img  src="https://img.shields.io/badge/lottie-3ECF8E?style=for-the-badge&logo=lottie&logoColor=white"/>
  <img  src="https://img.shields.io/badge/JSON%20SERVER-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
</p>

<br>

## Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/IhQRtrOZdu3TrvkPYREzOy/PlantManager/duplicate). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.

<br>

## Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as depedências do projeto.
Em seguida, inicie o projeto e a API fake com o Json Server.

```cl
expo start
json-server ./src/services/server.json --host 192.168.1.4 --port 3333 --delay 700
```

 Substitua o host pelo seu endereço IP local. Faça o mesmo no arquivo API dentro de services.
 
 
 ```ts
 import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.4:3333',
});

export default api;
```


---

<div align="center">
  <br>
  <a href="https://github.com/daygorgonha">
    <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/97552170?v=4" width="100px;" alt=""/>
    <br />
    <small>Feito com ❤️ by <a href="https://www.linkedin.com/in/dayanegorgonha/">Dayane Gorgonha</a></small>
</div>
