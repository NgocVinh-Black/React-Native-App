import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface IReview {
    id: number;
    title: string;
    star: number;
}
const styles = StyleSheet.create({
    reviewItem: {
        padding: 15,
        backgroundColor: '#ccc',
        margin: 15
    }
})
const HomeScreen = (props: any) => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const [review, setReview] = useState<IReview[]>([
        { id: 1, title: "React Native", star: 5 },
        { id: 2, title: "React Native 2", star: 4 }
    ]);
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Review list:</Text>
            <View>
                <FlatList
                    data={review}
                    keyExtractor={item => item.id + ""}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                            onPress={() => navigation.navigate("Details",item)}
                            >
                                <View style={styles.reviewItem}>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default HomeScreen