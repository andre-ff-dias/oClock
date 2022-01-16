import React from 'react';
import {
  View,
  ListRenderItem,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import Flag from 'react-native-flags-typescript';

interface Props {
  data: any;
}

export interface Country {
  name: string;
  code: string;
  cities?: {
    name: string;
    code: string;
  }[];
}

const numColumns = 4;

const GridFlags = ({data}: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={numColumns}
        renderItem={({item}: ListRenderItemInfo<Country>) => (
          <Flag style={styles.item} code={item.code} size={64} type="flat" />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginLeft: 10,
    marginRight: 10,
  },
});
export default GridFlags;
