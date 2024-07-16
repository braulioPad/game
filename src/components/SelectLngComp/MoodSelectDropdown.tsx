
import { style as styles } from './MoodSelectDropdownStyle';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const MoodSelectDropdown = ({ data, onSelect }) => {
  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
        onSelect(selectedItem, index);
      }}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View style={styles.dropdownButtonStyle}>
            <Text style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem.title) || 'Select your mood'}
            </Text>
            <Text style={styles.dropdownButtonArrowStyle}>
              {isOpened ? '▲' : '▼'}
            </Text>
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View style={{...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' })}}>
            <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};

export default MoodSelectDropdown;
