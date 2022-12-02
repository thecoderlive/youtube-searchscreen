import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Searches from './Searches'

const YoutubeSearch = () => (
<ScrollView style={styles.youtube_search} showsVerticalScrollIndicator={false}>
<Searches item={item.searches}/>
</ScrollView>
)

export default YoutubeSearch;

const styles = StyleSheet.create({
    
});