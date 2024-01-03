import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import axios from 'axios'
import Number from '../assets/img/number.png'

export class Surat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            surat: []
        }
    }

    componentDidMount() {
        axios.get("https://api.npoint.io/99c279bb173a6e28359c/data")
            .then(res => {
                this.setState({ surat: res.data })
            })
    }

    keyExtractor = (item, key) => key.toString()
    renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.listItem}
                onPress={() => this.props.navigation.navigate('Detail', {
                    id: item.nomor,
                    surat: item.nama
                })}
            >
                <ImageBackground style={styles.number} source={Number}>
                    <Text>{item.nomor}</Text>
                </ImageBackground>
                <View style={styles.content}>
                    <View style={styles.flex}>
                        <Text style={styles.title}>{item.nama}</Text>
                        <Text style={styles.title}>{item.asma}</Text>
                    </View>
                    <Text style={styles.subtitle}>{item.ayat} Ayat  Arti: {item.arti}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.surat}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    number: {
        width: 44,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
        color: '#333',
        backgroundColor: '#333'
    },
    content: {
        marginLeft: 10,
        flex: 1,
    },
    flex: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        color: '#333',
    },
    subtitle: {
        color: "#666",
    },
})

export default Surat
