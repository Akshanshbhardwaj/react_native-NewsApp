import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';

const categories = ['Entertainment', 'Business', 'Politics', 'Health', 'Technology', 'Sports',];

class Categories extends Component {
    state = {}
    render() {
        return (
            <ScrollView horizontal={true}>
                {categories.map((category, index) => (
                        <TouchableOpacity key={index} onPress={() => this.props.navigation.nagate('GetNews', {category,})
                            }>
                            <View >
                                <Text style={{ padding: 10, borderWidth: 1, borderColor: 'black', fontSize: 19, margin: 10, borderRadius: 10, color: "black" }}>{category}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        );
    }
}

export default Categories;