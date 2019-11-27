import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';

import { ApolloProvider } from 'react-apollo';
import apolloClient from './services/apollo';

import getRoutesStack from './routes/routesStack';

const App: React.FC = () => {
  const Main = createAppContainer(getRoutesStack);

  return (
    <ApolloProvider client={apolloClient}>
      <View style={{ flex: 1 }}>
        <Main />
      </View>
    </ApolloProvider>
  );
};

export default App;
