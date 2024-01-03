import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Logo from '../assets/img/logo.png'

export class Splash extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogin: false
        }

        setTimeout(() => {
            this.setState({ isLogin: true })
            this.props.navigation.navigate("Home")
        }, 2500)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={Logo} style={styles.logo} />
                <Text style={{ fontSize: 18, color: '#333'}}>Alquran dan Terjemahan Online</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {

                    }}
                >
                    <Text style={{ color: 'white' }}>Al-Quran</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "white"
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: "contain"
    },
    button: {
        backgroundColor: '#7EAA92',
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    }
})

export default Splash
