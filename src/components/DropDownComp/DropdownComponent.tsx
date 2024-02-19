import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { ConfigStyle as pickerSelectStyles } from './ConfigStyle';

interface DropdownComponentProps {
  items: { label: string; value: any }[];
  onValueChange: (value: any) => void;
  slcLanguage: any; // Add this line
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({ items, onValueChange, slcLanguage }) => {


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