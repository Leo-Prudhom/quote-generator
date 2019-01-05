import React, { Component } from "react";
import QuoteFrame from "./QuoteFrame";

const citations = [
  {
    author: "Blaise Pascal",
    text:
      "Incompréhensible que Dieu soit, et incompréhensible qu'il ne soit pas"
  },
  {
    author: "Franck Ribery",
    text: "Y'en a qui ont dit que je m'est battu avec Yohann"
  },
  {
    author: "Jean Claude Vandamme",
    text:
      "Selon les statistiques, il y a une personne sur cinq qui est déséquilibrée. S'il y a 4 personnes autour de toi et qu'elles te semblent normales, c'est pas bon."
  },
  {
    author: "Pikachu",
    text: "Pikachu"
  },
  {
    author: "Moi-même",
    text: "Okay, ça à l'air de marcher"
  },
  {
    author: "Zorro",
    text: "Je suis zorro"
  },
  {
    author: "Vegeta",
    text: "Je suis le prince des Saiyans personne ne peut me vaincre!"
  },
  {
    author: "Zidane",
    text: "Je suis zidane!"
  }
];

class App extends Component {
  state = {
    author: "",
    citation: ""
  };

  randomQuoteGenerator = () => {
    let indice = Math.floor(Math.random() * citations.length);
    this.setState({
      author: citations[indice].author,
      citation: citations[indice].text
    });
  };

  componentWillMount() {
    this.randomQuoteGenerator();
  }

  render() {
    return (
      <div>
        <QuoteFrame author={this.state.author} quote={this.state.citation} />
        <button onClick={this.randomQuoteGenerator}>Random Quote</button>
      </div>
    );
  }
}

export default App;
