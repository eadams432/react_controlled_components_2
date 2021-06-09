import React from 'react';

class DeleteItem extends React.Component{
  
  noItemsFound = () => {
    return this.props.itemList.length === 0;
  };
  
  delete = () => {
    this.props.deleteAction()
  };
  
  render(){
  	return(
    	<button onClick={this.delete} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>
    )
  
  }

}

export default DeleteItem;