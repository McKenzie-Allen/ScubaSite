import React from 'react'
import '../../App.css';

const ShowConditions = ({item, setItem}) => {
  

  if (item.length === 0){
    return(
      <div>There are no current items to display</div>
    )
  } else if(typeof item === "string"){
    return(
      <div>{JSON.stringify(item)}</div>
    )
  } else {
    return(
      <div>
        {item.map((item) => {
          return(
            <div className='siteCard' key={item.itemID}>
              <div className='siteName'>
                <h3>Here are the recommended conditions for a</h3>
                <h3>{item.itemName} {item.itemType}</h3>
              </div>
              <p className='siteName'>{item.recommendedCondition}</p>
            </div>
          )
          })}
      </div>
    )
  }
}

export default ShowConditions