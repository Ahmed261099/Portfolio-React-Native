import React from "react";
import Styles from './SkillStyle'
import { View,Text } from 'react-native';
import{ Rating }from 'react-native-ratings'; 


function Skills(){
    const Skills =[
        {
            Skill:"HTML5",
            rating:4.5
        },
        {
            Skill:"CSS3",
            rating:4.5
        },
        {
            Skill:"SCSS",
            rating:4.5
        },
        {
            Skill:"JAVASCRIPT",
            rating:4
        },
        {
            Skill:"TypeScript",
            rating:4
        },
        {
            Skill:"JSON",
            rating:4.5
        },
        {
            Skill:"JQUERY",
            rating:4
        },
    ]
    return(
        <View style={Styles.SkillSection}>
            <Text style={Styles.SectionName}>Skills</Text>
            {
                Skills.map((item) => {
                    return(
                        <View style={Styles.SkillRow}>
                            <Text style={Styles.SkillHead}>{item.Skill}</Text>
                            <Rating 
                            type='rocket'
                            startingValue={item.rating}
                            readonly
                            ratingCount={5}
                            imageSize={30}
                            style={Styles.SkillRating}
                            ></Rating>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Skills;