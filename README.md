<h1>Auth app Backend</h1>

<h3>Apresentação do projeto</h3>

<p>O Auth App é uma pequena aplicação para simular o fluxo de autenticação usando <strong>JWT</strong> (Json Web Token).</p>
<p>Autenticação é um fluxo usado para identificar um usuário em uma aplicação, oferecendo a possibilidade de gerenciar as permisões de cada usuário autenticado.</p>

#
<h3>Repositórios 📁</h3>

<blockquote>
  Os links para acessar os repositórios são:
  <div><a href="https://github.com/GustavoRodrigue-s/Auth-app-frontend">Auth App Frontend</a></div>
  <div><a href="https://github.com/GustavoRodrigue-s/Auth-app-backend">Auth App Backend</a></div>
</blockquote>

#

<h3>Sobre o projeto (Backend) </h3>

<div>
  <img src="http://img.shields.io/static/v1?label=Status&message=Finished&color=green&style=flat" />
</div>

#

<h3>Tecnologias e Ferramentas utilizadas 🛠️</h3>

<ul>
  <li>
    Express
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="20" />
  </li>
  <li>
    Typescript
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="20" /> 
   </li>
   <li>
    Prisma (ORM)
   </li>
   <li>
    jsonwebtoken
   </li>
</ul>

#

<h3>Arquitetura 🏗️</h3>

<p>
  Eu utilizei o padrão <strong>MVC</strong> (Model, View, Controller) para a arquitetura do backend. 
</p>

<p>
  Essa decisão foi tomada por conta de ser um projeto
  simples e pequeno, mesmo assim eu senti diversas necessidades de utilizar outra arquitetura por conta do excesso de responsabilidades do model, uma delas
  é o acesso da fonte de dados estar muito acoplada com as regras de negócio, isso me incomodou mas para esse projeto está bom.
</p>

#
<h3>Como rodar o projeto</h3>

<p>Passo 1 - Clone o projeto em sua máquina usando o git com o seguinte comando:</p>

```
  git clone https://github.com/GustavoRodrigue-s/Auth-app-backend.git
```

<p>Passo 2 - Inicie o projeto com o comando:</p>

```
  yarn dev
```

<h4>Envs</h4>

```
  PORT=3000
  SECURITY_TOKEN_KEY=niawhd90w2i89duz20-=di289j2398dhx28dx289dhj23h
  DATABASE_URL="file:../src/database/db.sqlite"
```

Pronto! O projeto estará roadando em sua máquina. Lembrando que você precisa rodar o frontend também para a aplicação funcionar corretamente.

<h2>Obrigado por Ler!</h2>

<p>Muito obrigado por ler até aqui! Eu espero que isso ajude muitas pessoas, talvez com inspiração, aprendizado ou qualquer coisa. See you later. 👋</p>
