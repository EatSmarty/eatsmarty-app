/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
// import pic1 from '';

const data = [
    require('@/assets/images/0001001.png'),
    require('@/assets/images/0002401.png'),
    require('@/assets/images/0008301.png'),
    require('@/assets/images/0023701.png'),
    require('@/assets/images/0014501.png'),
    require('@/assets/images/0001601.png'),
  ];

const CategoryCard = () => {
  return (
    <View style={styles.container}>
        {data.map((item, index) => (
            <View key={index} style={styles.box}>
                <Image source={item} style={styles.image} />
            </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
  box: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#E2F6F1',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    padding: 10
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
});

export default CategoryCard;
