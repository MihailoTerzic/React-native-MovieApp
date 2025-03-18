import { images } from '@/constants/images';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image,Text } from 'react-native';

const TrendingCard = ({movie: {movie_id, title, poster_url}, index}) => {
    return (
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity
            className='w-32 relative pl-5'
            >
<Image source={{uri:poster_url}}
className='w-32 h-48 rounded-lg'
resizeMode='cover'/>
<View className='absolute bottom-9 -left-3.5 px-2 py-1 rounded-full'>
    <Text className='font-bold text-white text-6xl'>{index +1}</Text>
</View>
<Text className='text-sm font-bold mt-2 text-light-200'>{title}</Text>
            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({})

export default TrendingCard;
