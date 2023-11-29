import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

interface DropdownComponentProps {
  items: { label: string; value: any }[];
  onValueChange: (value: any) => void;
  slcLanguage: any; // Add this line
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({ items, onValueChange, slcLanguage }) => {
  const pickerSelectStyles = {
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      width: 200, // Set the desired width
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      width: 200, // Set the desired width
    },
  };


  return (
    <RNPickerSelect
      items={items}
      onValueChange={(value) => onValueChange(value)}
      placeholder={{ label: 'Select an option', value: null }}
      style={pickerSelectStyles}
    />
  );
};

export default DropdownComponent;