import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const DetailsScreen = () => {
    return (
        <View style={styles.body}>
            <Text>Welcome to DetailsScreen</Text>
        </View>
    );
}

export default DetailsScreen;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#f1f1f1',
    },
});