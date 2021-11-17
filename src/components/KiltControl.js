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
      currentlyVisibleState = <KiltList kiltList={this.state.mainKiltList} />;
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