import React, { useState, useEffect } from 'react';
import { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';
import { connect, disconnect } from '../../services/socket';

import { Map, Avatar, Dev, Name, Bio, Techs, Form, Input, Button } from './styles';

export default function Main({ navigation }) {
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState('');
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude: -22.4614468,
          longitude: -48.5671197,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }

    loadInitialPosition();
  }, []);

  function setupWebsocket() {
    const { latitude, longitude } = currentRegion;

    connect(
      latitude,
      longitude,
      techs
    );
  }

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs
      }
    });

    setDevs(response.data.devs);
    setupWebsocket();
  }

  function handleRegionChange(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <Map
        onRegionChangeComplete={handleRegionChange}
        initialRegion={currentRegion}
      >
        {devs.map(dev => (
          <Marker
            key={dev._id}
            coordinate={{ latitude: dev.location.coordinates[1], longitude: dev.location.coordinates[0] }}
          >
            <Avatar source={{ uri: dev.avatar_url }} />

            <Callout onPress={() => {
              navigation.navigate('Profile', { github_username: dev.github_username })
            }}>
              <Dev>
                <Name>{dev.name}</Name>
                <Bio>{dev.bio}</Bio>
                <Techs>{dev.techs.join(', ')}</Techs>
              </Dev>
            </Callout>
          </Marker>
        ))}
      </Map>

      <Form>
        <Input
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <Button onPress={loadDevs}>
          <MaterialIcons name="my-location" size={20} color="#fff" />
        </Button>
      </Form>
    </>
  );
}
