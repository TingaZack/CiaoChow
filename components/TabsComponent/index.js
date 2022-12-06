import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DescriptionScreen from "../../Screens/DescriptionScreen";
import NutritionFactsScreen from "../../Screens/NutritionFactsScreen";
import SegmentedControlTab from 'react-native-segmented-control-tab';

const Tab = createBottomTabNavigator();

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useState } from "react";

const TabsComponent = ({ desc }) => {

    const [customStyleIndex, setCustomStyleIndex] = useState(0);

    const handleCustomIndexSelect = (index) => {
        //handle tab selection for custom Tab Selection SegmentedControlTab
        setCustomStyleIndex(index);
    };

    return (
        <View>
            <SegmentedControlTab
                values={['Description', 'Nutrition Facts']}
                selectedIndex={customStyleIndex}
                onTabPress={handleCustomIndexSelect}
                borderRadius={0}
                tabsContainerStyle={{
                    height: 50, borderBottomColor: '#BDBDBD',
                    borderBottomWidth: 0.5,
                }}
                tabStyle={{
                    borderWidth: 0,
                    borderColor: 'transparent',

                }}
                activeTabStyle={{
                    backgroundColor: 'white', marginTop: 2, borderBottomColor: '#4CAD73',
                    borderBottomWidth: 2, borderWidth: 2, width: 90, strokeWidth: 1, width: 70

                }}
                tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
                activeTabTextStyle={{ color: '#888888' }}
            />
            {customStyleIndex === 0 && (
                <DescriptionScreen desc={desc} />
            )}
            {customStyleIndex === 1 && (
                <NutritionFactsScreen />
            )}
        </View>
    )
};
export default TabsComponent;