import React from 'react'
import Summer from './Summer'
import Winter from './Winter'

const getInformation = (latitude,month) => {

  if(month > 2 && month < 9) {
    return latitude > 0 ? 'Summer' : 'Winter'
  }
  else{
    return latitude < 0 ? 'Winter' : 'Summer'
  }

}



function Season(props) {
  const Seasons = getInformation(props?.latitude,new Date().getMonth())

  return (
    <div> {Seasons === "Summer" ? ( <Summer /> ) : ( <Winter /> )  }</div>
  )
}

export default Season


