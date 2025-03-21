import { icons } from '@/constants/icons';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

interface Props {
    onPress?: ()=> void;
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

const SearchBar = ({onPress, placeholder, value,onChangeText}: Props) => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
            <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#ab8bff'></Image>
            <TextInput
            onPress={onPress}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor='#a8b5db'
            className='flex-1 ml-2 text-white'
            />

            
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchBar;
