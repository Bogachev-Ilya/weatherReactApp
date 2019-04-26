import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "c7b11123bb20499497c75626192404";

class App extends React.Component{

  state = {
    temp_c: undefined,
    feelslike_c: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    error: undefined
  }

  gettingWeather = async (event) =>{
    event.preventDefault();
    const city = event.target.elements.city.value;
    
    
    if(city){
      const api_url = await 
      fetch(`http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`);
      const data = await api_url.json();

      this.setState({
        temp_c: data.current.temp_c,
        feelslike_c: data.current.feelslike_c,
        city: data.location.name,
        country: data.location.country,
        pressure: data.current.pressure_mb,
        error: undefined
      });
    }else{
      this.setState({
        temp_c: undefined,
        feelslike_c: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        error: "Please enter city"
      })
    }    
  }
    render(){
      return(
        <div>
        <Info />
        <Form weatherMethod={this.gettingWeather}/>
        <Weather 
          temp_c={this.state.temp_c}
          city={this.state.city}
          country={this.state.country}
          feelslike_c={this.state.feelslike_c}
          pressure={this.state.pressure}
          error={this.state.error}
        />
        </div>
      );
    }
}

export default App;