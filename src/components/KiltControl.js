import React from 'react';
import NewKiltForm from './NewKiltForm';
import KiltList from './KiltList';

class KiltControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKiltList: []
    }
  }

  handleNewKiltToList = (newKilt) => {
    const newMainKiltList = this.state.mainKiltList.concat(newKilt);
    this.setState({
      mainKiltList: newMainKiltList,
      formVisibleOnPage: false
    });
  }

  handleBuyKilt = (id) => {
    // find index of the the selected kilt
    let selectedKilt = this.state.mainKiltList.find(kilt => kilt.id === id);
    // let index = this.state.mainKiltList.indexOf(this.state.mainKiltList.find(kilt => kilt.id === id));
    // decrement the quantity by 1??????????
    // replace the selected kilt in the mainKiltList with our new version
    console.log(id);
    console.log(selectedKilt);
    console.log(selectedKilt.quantity);
    selectedKilt.quantity -= 1;
    // selectedKilt.indexOf(selected.quantity)
    // if (index !== 0) {
    //   selected[index] -= 1;
    // }
    // 
    const newMainKiltList = this.state.mainKiltList.map((kilt) => { return kilt === this.state.mainKiltList.find(kilt => kilt.id === id) ? kilt : selectedKilt});
    this.setState({
      mainKiltList: newMainKiltList,
      formVisibleOnPage: false
    });
    
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKiltForm onNewKiltCreation={this.handleNewKiltToList} />
      buttonText = "Back to List";
    } else {
      currentlyVisibleState = <KiltList kiltList={this.state.mainKiltList} onBuyKilt={this.handleBuyKilt}/>;
      buttonText = "Add a Kilt";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-dark" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default KiltControl;