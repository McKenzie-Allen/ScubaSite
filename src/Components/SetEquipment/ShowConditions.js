import React from 'react'
import '../../App.css';

const ShowConditions = ({item, setItem}) => {
  

  if (item.length === 0){
    return(
      <div>There are no current items to display</div>
    )
  } else if(typeof sites === "string"){
    return(
      <div>{JSON.stringify(item)}</div>
    )
  } else {
    return(
      <div>
        {item.map((item) => {
          return(
            <div key={item.itemID}>
              <div>{item.itemName}</div>
            </div>
          )
          })}
      </div>
    )
  }
}

export default ShowConditions