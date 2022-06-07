import React from 'react'
import Season from './Season'

class Date extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      errorMessage:'',
    }
  }

  componentDidMount(){
    const currentposition = () => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({ latitude : position?.coords?.latitude , longitude : position?.coords?.longitude }),
        (error) => this.setState({ errorMessage: error.message}) 
        );
    }

    currentposition()

  }

  render() {
              const {latitude , longitude ,errorMessage} = this.state
              if(!errorMessage && latitude && longitude){
                return (
                    <>
                      <div>   
                        {/* <h2> Latitude:{latitude} </h2>  and <h3>Longtitude:{longitude}</h3>  */}
                           <Season latitude={latitude} longitude={longitude}  />
                      </div>
                    </>
                )
              }

              else if(errorMessage && !latitude && !longitude){
                return(
                  <>
                    <div>
                        <h2>{errorMessage } </h2>
                    </div>
                  </>
                )
              }

              else {
                return (
                  <>
                    <div>
                      <span className='loadingspinner'><i className="massive spinner loading icon"></i></span>
                    </div>
                  </>
                )

              }
    }
}

export default Date