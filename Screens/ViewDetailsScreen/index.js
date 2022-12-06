import { Pressable, Text, ToastAndroid, View } from "react-native";
import styles from "./styles";
import { ImageSlider } from "react-native-image-slider-banner";
import Ionicons from '@expo/vector-icons/Ionicons';
import SegmentedControlTab from "react-native-segmented-control-tab";
import TabsComponent from "../../components/TabsComponent";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DescriptionScreen from "../DescriptionScreen";
import NutritionFactsScreen from "../NutritionFactsScreen";
import { useEffect, useState } from "react";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const ViewDetailsScreen = ({ data, scrollForward, scrollBackwards }) => {
    const [imgs, setImgs] = useState([]);
    let arrayImgs = []
    useEffect(() => {
        data.attributes.Image.data.map(res => {
            arrayImgs.push({ img: `https://ciaochow.plusnarrative.biz${res.attributes.url}` });
        })
        setImgs(arrayImgs);
    }, []);

    function showToast() {
        ToastAndroid.show('Added to your favourites!', ToastAndroid.SHORT);
    }

    function findSomething() {
        ToastAndroid.show('Nah, Find something else!', ToastAndroid.SHORT);
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgSliderContainer}>
                <ImageSlider
                    data={imgs}
                    indicatorContainerStyle={{ marginBottom: 50, }}
                    showHeader
                    headerStyle={{ backgroundColor: 'whitesmoke', }}
                    onItemChanged={(item) => console.log("item", item)}
                    caroselImageStyle={{ resizeMode: 'cover', height: '100%' }}
                    onClick={(item, index) => { alert('hello' + index) }}
                />
            </View>
            <View style={styles.contentContainer}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', padding: 16 }}>
                    <Text style={{ fontSize: 24, fontWeight: '600' }}>{data.attributes.Title}</Text>
                    {/* <Pressable style={{ backgroundColor: '#707070', padding: 8, borderRadius: 10 }} onPress={showToast} > */}
                    <Pressable style={{ backgroundColor: '#707070', padding: 8, borderRadius: 10 }} onPress={scrollBackwards} >
                        <Ionicons name="heart-outline" size={20} color="white" />
                    </Pressable>
                </View>
                <View style={styles.segments}>
                    <TabsComponent desc={data.attributes.Description} style={{ height: '100%', backgroundColor: 'green' }} />
                </View>
            </View>
            <View style={styles.btnContainer}>
                {/* <Pressable style={styles.nahBtn} onPress={findSomething} > */}
                <Pressable style={styles.nahBtn} onPress={scrollForward} >
                    <Text style={styles.nahBtnText}>Nah, Find something else.</Text>
                </Pressable>
            </View>
        </View>
    )
};
export default ViewDetailsScreen;