import React from 'react'
import '../../App.css';

const ShowEquipment = ({sites, setSites}) => {
  

  if (sites.length === 0){
    return(
      <div>There are no current sites to display</div>
    )
  } else if(typeof sites === "string"){
    return(
      <div>{JSON.stringify(sites)}</div>
    )
  } else {
    return(
      <div>
        {sites.map((site) => {
          return(
            <div className='siteCard' key={site.siteID}>
              <div className='siteName'>
                <h3>A possible matching site would be:</h3>
                <div>{site.siteName}</div>
              </div>
              
              <div>
                {site.location.map((state, i) => {
                  return(
                    <div key={i}>
                      <div className='stateName'>
                        <p>This is located in:</p>
                        <p>{state.city}, {state.state}</p>
                      </div>
                    </div>
                  )
                })}
                <div>
                  {site.recommendedEquipment.map((item, i) => {
                    return(
                      <div key={i}>
                        <div className='stateName'>
                          <p>Recommended Equipment:</p>
                          <p>Wetsuit: {item.wetSuit}</p>
                          <p>Regulator: {item.regulator}</p>
                          <p>Fins: {item.Fins}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ShowEquipment