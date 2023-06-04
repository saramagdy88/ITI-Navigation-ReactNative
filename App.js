import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image ,ScrollView, SectionList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import Root from './Navigation/root';

const screenWidth = Dimensions.get('window').width;


export default function App() {
  const section = [
    {
      id:"0",
      title:"A",
      data:[
        {id:"0",text:"Ali" ,img :"https://bootdey.com/img/Content/avatar/avatar6.png"},
        {id:"1",text:"Ahmed" ,img:"https://bootdey.com/img/Content/avatar/avatar1.png"},
        {id:"2",text:"Adel" , img:"https://bootdey.com/img/Content/avatar/avatar7.png" },
      ]
      },
      {
      id:"1",
      title:"B",
      data:[
        {id:"3",text:"Baraa" , img :"https://bootdey.com/img/Content/avatar/avatar6.png"},
        {id:"4",text:"Basem", img:"https://bootdey.com/img/Content/avatar/avatar7.png" } 
      ]
    } ,
    {
      id:"2",
      title:"D",
      data:[
        {id:"5",text:"Dawood" , img:"https://bootdey.com/img/Content/avatar/avatar1.png" },
        {id:"6",text:"Diaa", img :"https://bootdey.com/img/Content/avatar/avatar6.png" }
      ]
    }
  ]
  
  return (
<NavigationContainer>
  <Root></Root>
{/* <View>
    <SectionList sections={section}
    renderSectionHeader={(props)=><Text style={[styles.headerSty,{width:screenWidth}]}>{props.section.title}</Text>} 
    renderItem={(props)=>
    <View style={styles.itemContainer}>
      <Image style={styles.imgStyle} source={{ uri: props.item.img }}/>
      <Text>{props.item.text}</Text> 
    </View>}>
    </SectionList>

</View> */}
</NavigationContainer>


  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerSty:{
//     fontSize:25,backgroundColor:"#314c67",color:"white",padding:10,marginBottom:8 
//   } ,
//   itemContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     backgroundColor:"#eee"
//   },
//   imgStyle:{width: 50, height: 50 , borderRadius: 50 ,margin:10}
// });
