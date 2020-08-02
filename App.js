import React from "react";
import Carousel from './components/Carousel/carousel';
import {Data} from './services/data';
import {View} from "react-native";
export default class App extends React.Component {

constructor(props) {
 super(props);
 this.state = {
   dataSource:[]
  };
}

//Calling the Data service to get the data for images from fetch api
componentDidMount(){
    Data.getImageData().then((responseJson)=> {
        this.setState({
            dataSource: responseJson.img_list
        })
    })
}

render(){
    return(
        <View>
            <Carousel items={this.state.dataSource} itemsPerInterval={4}></Carousel>
        </View>
    )}
}
