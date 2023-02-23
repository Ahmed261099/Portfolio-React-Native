import React from 'react';
import Styles from './LanguagesStyle';
import { Text, View } from 'react-native';
import{ Rating }from 'react-native-ratings'; 

function Languages()
{

    const Languages =[
        {
            language:"English",
            rating:4
        },
        {
            language:"Arabic",
            rating:5
        },
        {
            language:"French",
            rating:2
        },
        {
            language:"Russian",
            rating:1
        },
    ]
    return(
        <View style={Styles.LanguageSection}>
            <Text style={Styles.SectionName}>Languages</Text>
            {
                Languages.map((item) => {
                    return(
                        <View style={Styles.LangRow}>
                        <Text style={Styles.LangHead}>{item.language}</Text>
                        <Rating 
                        type='star'
                        startingValue={item.rating}
                        ratingBackgroundColor="white" 
                        readonly
                        ratingCount={5}
                        imageSize={30}
                        style={Styles.langRating}
                        ></Rating>
                    </View>
                    )
                })
            }
        </View>
    )
}

export default Languages;