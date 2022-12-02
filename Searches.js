import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const searchesItem = ({ item }) => (
<View style={styles.searches_item}>
<Image
    style={styles.timer}
    source={{uri: item.timer}}
    />
<Text style={styles.older_search}>{item.older_search}</Text>
<Image
    style={styles.older_search_image}
    source={{uri: item.older_search_image}}
    />
<Image
    style={styles.top_left_arrow}
    source={{uri: item.top_left_arrow}}
    />
</View>
  );

const Searches = ({ item }) => (
<FlatList
    style={styles.searches}
    data={item}
    renderItem={searchesItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default Searches;

const styles = StyleSheet.create({
    'timer': {
        'width': '8vw',
        'height': '8vw',
        'margin': 12
    },
    'older_search': {
        'color': '#0b0909',
        'fontSize': 20,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'older_search_image': {
        'width': '20vw',
        'height': '10vw',
        'marginTop': 5,
        'marginLeft': 10
    },
    'top_left_arrow': {
        'width': '5vw',
        'height': '7vw',
        'marginTop': 5,
        'marginLeft': 10
    }
});