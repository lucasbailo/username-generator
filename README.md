## Welcome again to another React project! 👋

# React + Faker: Random Username generator

## Test the project yourself: [Teste the project here!!!](#)

### Home Page
- Calculate Page.

![](./public/gifs/gif1.gif)

## Some code that I'm proud of
```js
<button 
    className="button is-primary has-background-warning has-text-white" 
    onClick={() =>{ 
        setPessoas(listaAnterior => ([...listaAnterior, {
            nome: faker.internet.userName(),
            id: faker.string.uuid()
        }]))
    }}
>
    Gerar usuário aleatório
</button>
```

## Built with

- REACT;
- [Bulma](https://bulma.io/);
- [Faker.js](https://www.npmjs.com/package/@faker-js/faker?activeTab=readme).

## Author

- Website - [My GitHub](https://github.com/lucasbailo)
- Frontend Mentor - [@lucasbailo](https://www.frontendmentor.io/profile/lucasbailo)
- Instagram - [@lucassbailo](https://www.instagram.com/lucassbailo/)
- LinkedIn - [Lucas Bailo](https://www.linkedin.com/in/lcsbailo)