import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link, router, useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View, } from "react-native";
import  SearchBar  from "@/components/SearchBar";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import { Colors } from "react-native/Libraries/NewAppScreen";
import MovieCard from "@/components/MovieCard";
import { getTrendingMovies } from "@/services/appwrite";
import TrendingCard from "@/components/TrendingCard";

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError
  } = useFetch(getTrendingMovies)

  const {data:movies, loading:moviesLoading, error: moviesError} = useFetch(()=>fetchMovies({query: ''}))
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"></Image>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: '100%', paddingBottom: 10}}>
      <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"></Image>

      { moviesLoading || trendingLoading ? (
        <ActivityIndicator
        size="large"
        color='#0000ff'
        className="mt-10 self-center"
        />
      ) : moviesError || trendingError ? (<Text>Error : {moviesError?.message || trendingError?.message}</Text>

      ) : (
          <View className="flex-1 mt-5">

      <SearchBar onPress={()=>router.push('/search')}
        placeholder='Search for a movie'/>

        {trendingMovies && (
          <View className="mt-10 ">
            <Text className="text-lg text-white font-bold mb-3">Trending Movies</Text>
          </View>
        )}

        <>

        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={()=> <View className="w-4"/>}
        className="mb-4 mt-3"
        data={trendingMovies}
        renderItem={({item,index})=>(<TrendingCard movie={item} index={index}/>)}
        ></FlatList>

        <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>
       
        <FlatList
        data={movies}
        renderItem={({item}) => (
          <MovieCard title={item.title} 
          image={item.image} 
          id={item.id}
           poster_path={item.poster_path}
           vote_average={item.vote_average} 
           release_date={item.release_date}/>
        )}
        keyExtractor={(item)=> item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'flex-start',
          gap: 20,
          paddingRight: 5,
          marginBottom: 10
        }}
        className="mt-2 pb-32"
        scrollEnabled={false}
        />
        </>
      </View>
        )
      }
      
      </ScrollView>
    </View>
  );
}
