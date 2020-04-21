import React from "react";

function FunctionalComponent() {
  return <div>hello word</div>;
}

export default class App extends React.Component {
  state = {
    Name: "Joao Victor",
  };

  ChangeName = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };

  CreateComboBox = () => {
    let opcoes = ["Fulano", "Ciclano"];
    let comboBoxOptions = opcoes.map((opcao) => <option>{opcao}</option>);

    return <select>{comboBoxOptions}</select>;
  };

  componentDidMount(){
    console.log("Componente DidMount")
  }

  render() {
    console.log("Executou o render")
    return (
      <React.Fragment>
        <input type="text" value={this.state.Name} onChange={this.ChangeName} />
        <h1>Hello {this.state.Name}</h1>
        <h4>Other component</h4>
        {this.CreateComboBox()}
      </React.Fragment>
    );
  }
}
