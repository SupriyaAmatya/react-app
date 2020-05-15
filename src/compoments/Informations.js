import React from 'react';

import './Informations.css';

const Informations = ({ informations, deleteInformation, editInformation }) =>{
  const informationList = informations.length ? (informations.map(information => {
      return(
        <div className="information" key={information.id}>
          <div>Name: { information.name }</div>
          <div>Address: { information.address }</div>
          <div>Age: { information.age }</div>
          <button onClick={ () => { deleteInformation(information.id) } } className="delete-button">Delete</button>
          {/* <button onClick={ () => { editInformation(information.id) } } className="edit-button">Edit</button> */}
        </div>
      )
    })
   ) : (<p className="empty-list-title">No informations left!</p>);

  // const informationList = informations.map(information => {
  //   return information.age >22 ? (
  //     <div className="information" key={information.id}>
  //       <div>Name: { information.name }</div>
  //       <div>Address: { information.address }</div>
  //       <div>Age: { information.age }</div>
  //       <button onClick={deleteInformation}>Delete</button>
  //     </div>
  //   ) : null;
  // })
  return(
    <div className="information-list container">
      { informationList }
    </div>
  )
}

export default Informations;