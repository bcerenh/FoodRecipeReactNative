import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodPreparation({ data }) {
    return data.map((dataPrep) => (
      <View key={dataPrep} style={styles.listPrep}>
        <Text style={styles.itemText}>{dataPrep}</Text>
      </View>
    ));
    }

    const styles = StyleSheet.create({
        listPrep: {
            
                backgroundColor:'orange',
                marginVertical: 4,
                marginHorizontal: 12,
                borderRadius: 10,
                paddingVertical: 4,
              },
     
        itemText: {
         
        },
      });
      