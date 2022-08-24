import React from 'react'
import '../../App.css';

const ShowEquipment = ({sites}) => {


  return(
    <div>
      {sites.map((site) => {
        return(
          <div className='siteCard' key={site.siteID}>
            <div className='siteName'>{site.siteName}</div>
            <div>
              {site.location.map((state) => {
                return(
                  <div>
                    <div className='stateName'>{state.state}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ShowEquipment