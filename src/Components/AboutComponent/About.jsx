import React from "react";
import { View, Text } from 'react-native';
import Styles from './AboutStyle'

function About(){
    const AboutData = [
        {
            head:"Age",
            data:23
        },
        {
            head:"Status",
            data:"Single"
        },
        {
            head:"FreeLancer",
            data:"Available"
        },
        {
            head:"Address",
            data:"Cairo"
        },

    ]
    return(
        <View style={Styles.AboutSection}>
                {
                    AboutData.map((item) => {
                        return (
                            <View style={Styles.AboutRow}>
                                <Text style={Styles.AboutHead}>{item.head}</Text>
                                <Text style={Styles.AboutContent}>{item.data}</Text>
                            </View>
                        )
                    })
                }
        </View>
    )
}

export default About;