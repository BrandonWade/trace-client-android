import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    fileListItem: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#aaaaff',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});

class FileList extends Component {
    renderFileListItem = ({item}) => {
        return (
            <View
                style={styles.fileListItem}>
                <Text>{item}</Text>
            </View>
        );
    };

    render() {
        const data = ['item 1', 'item 2', 'item 3'];
        return (
            <FlatList
                data={data}
                renderItem={this.renderFileListItem}
                keyExtractor={(item, index) => index.toString()} />
        );
    }
}

export default FileList;
