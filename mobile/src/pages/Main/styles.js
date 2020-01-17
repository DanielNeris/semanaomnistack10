import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Map = styled(MapView)`
  flex: 1;
`;

export const Avatar = styled.Image`
  height: 54px;
  width: 54px; 
  border-radius: 4px;
  border-width: 4px;
  border-color: #fff;
`;

export const Dev = styled.View`
  width: 260px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const Bio = styled.Text`
  color: #666;
  margin-top: 5px;
`;

export const Techs = styled.Text`
  margin-top: 5px;
`;

export const Form = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 5;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  background-color: #FFF;
  color: #333;
  border-radius: 25px;
  padding: 0px 20px;
  font-size: 16px;
  box-shadow: 4px 4px 0.2px #000;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #8E4DFF;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;