import React from 'react';
import { WebV } from './styles';

export default function Profile({ navigation }) {
  const githubUsername = navigation.getParam('github_username');

  return (
    <WebV source={{ uri: `https://github.com/${githubUsername}` }} /> 
  );
}
