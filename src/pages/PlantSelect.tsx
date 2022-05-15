import React, { useEffect, useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import { EnvironmentButton } from '../components/EnvironmentButton';

import { Header } from '../components/Header';

import { PlantCardPrimary } from '../components/PlantCardPrimary';
import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: string;
  name:  string;
  about:  string;
  water_tips:  string;
  photo:  string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export function PlantSelect(){
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]); 
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]); 
  const [environmentSelected, setEnvironmentSelected] = useState('all');

  function handleEnvironmentSelected(environment: string){
    setEnvironmentSelected(environment);

    if(environment == 'all')
      return setFilteredPlants(plants);
    
    const filtered = plants.filter(plant =>
      plant.environments.includes(environment)  
    );

    setFilteredPlants(filtered);
  }

  useEffect(() => {
    async function fetchEnvironment(){
      const { data } = await api
      .get('plants_environments?_sort=title&_order=asc');
      setEnvironments([
        { 
          key: 'all', 
          title: 'Todos',
        },
        ...data
      ]);
    }

    fetchEnvironment();
  }, [])

  useEffect(() => {
    async function fetchPlants(){
      const { data } = await api
      .get('plants?_sort=name&_order=asc');
      setPlants(data);
    }

    fetchPlants();
  }, [])


  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text style={styles.subtitle}>
          você quer colocar sua planta?
        </Text>
      </View>

      <View>
        <FlatList 
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>
      <View style={styles.plants}>
        <FlatList 
         data={filteredPlants}
         renderItem={({item}) => (
           <PlantCardPrimary data={item}/>
         )}
         showsVerticalScrollIndicator={false}
         numColumns={2}
        />
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    paddingHorizontal: 30,
  },
  title:{
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32
  },
  plants: {
    flex: 1,
  }
});