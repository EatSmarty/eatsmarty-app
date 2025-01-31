/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
// import pic1 from '';

const data = [
    {
        imgurl: require('@/assets/images/0001001.png'),
        text: 'drink'
    },
    {
        imgurl: require('@/assets/images/0002401.png'),
        text: 'crops'
    },
    {
        imgurl: require('@/assets/images/0008301.png'),
        text: 'fish'
    },
    {
        imgurl: require('@/assets/images/0002601.png'),
        text: 'meat'
    },
    {
        imgurl: require('@/assets/images/0014501.png'),
        text: 'Vegetables'
    },
    {
        imgurl: require('@/assets/images/boiled-egg-3311535-27548110.png'),
        text: 'dairy'
    },
  ];

const CategoryCard = () => {
  return (
    <View style={styles.container}>
        {data.map((item, index) => (
            <View key={index} style={styles.box}>
                <Image source={item.imgurl} style={styles.image} />
                <Text>{item.text}</Text>
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
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
});

export default CategoryCard;
