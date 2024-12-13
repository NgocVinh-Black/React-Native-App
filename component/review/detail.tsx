import { Button, StyleSheet, Text, View } from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const"
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native"

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR
    },
    reviewText: {
        fontSize: 20,
        fontFamily: OPENSANS_REGULAR,
        padding: 15
    }
})
const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'Details'> = useRoute();
    return (
        <View>
            <Text style={styles.review}>Review Detail</Text>
            <Text style={styles.reviewText}>Id: {route.params?.id}</Text>
            <Text style={styles.reviewText}>Title: {route.params?.star}</Text>
            <Text style={styles.reviewText}>Rate: {route.params?.title}</Text>
            <Button
                title="Go home"
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "Home" }],
                    })
                }
            />
        </View>
    )
}

export default DetailScreen