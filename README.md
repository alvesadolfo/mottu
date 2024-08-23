# Desafio Mottu - Frontend

## 📌 Info

Candidato: **Adolfo Alves**

Projeto gerado com Angular na versão **17.3.7**.

## 🚀 Live Demo

Publicado na Vercel, acesse [clicando aqui](https://mottu-adolfo.vercel.app/).

## 💻 Para executar em localhost {modo dev}

- Faça um clone deste repositório;
- Acesse a pasta clonada `mottu`;
- Usando NPM, execute `npm install`;
- Agora execute o comando `npm start`;
- Pronto! Navegue até `http://localhost:4200/`.

```
#certifique-se de estar na pasta mottu
npm install
npm start
```

## 🧪 Test

Comando para executar testes

```
npm test
```

## 📍 Rotas da aplicação

| Parâmetro    | Tipo                                         |
| :----------- | :------------------------------------------- |
| `/`          | Redirecionamento para `/home`                |
| `/home`      | Página com listagem dos personagens.         |
| `/favorites` | Página com listagem dos favoritos.           |
| `/not-found` | Para qualquer página que não esteja listada. |

# API utilizadas

### Retornar os personagens

```http
  GET https://rickandmortyapi.com/api/character/?page=1
```

| Parâmetro | Tipo     | Descrição                                       |
| :-------- | :------- | :---------------------------------------------- |
| `page`    | `number` | **Opcional**. Número da página, por default `1` |
