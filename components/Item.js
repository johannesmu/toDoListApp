import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity,
    Image,
    TouchableHighlight} from 'react-native';

export const Item = (props) => {
    return(
        //render each item on the list
    <TouchableHighlight 
    activeOpacity={0.6} 
    underlayColor="#DDDDDD">
        <View style = { props.status ? itemStyles.itemDone : itemStyles.item }> 
            <View style = {itemStyles.row}>
            <Text style={ props.status ? itemStyles.textDone : itemStyles.text }>{props.task}</Text>
            </View>
            
            <TouchableOpacity onPress={ () => {props.delete( props.id ) } } style={{marginRight:30}}>
                <Image style ={itemStyles.icon} source={require('../assets/trash-alt-solid.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => {props.buttonPressed( props.id ) } } >
                <Image style={itemStyles.icon} source={require('../assets/check-circle-solid.png')} />
            </TouchableOpacity>
        </View>
    </TouchableHighlight>
    )
}

const itemStyles = StyleSheet.create({
    item: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: '#dcdcdc',
        opacity: 1,
    
    },
    itemDone: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: '#dcdcdc',
        opacity: 0.5,
    },
    text: {
        fontSize:16,
        color: 'black'
    },
    textDone: {
        fontSize: 16,
        color: 'black',
        textDecorationLine: 'line-through',
    },
    row: {
        flexDirection: 'row',
        flex: 1
    },
    icon: {
        width: 20, 
        height: 20,
    }

})