import React, {useState, useEffect, useMemo} from 'react';
import {Provider} from 'react-redux';

import store from './src/store';

import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigation from './src/navigation/DrawerNavigation';
import {AuthStackNavigator} from './src/navigation/StackNavigation';
import {AuthContext} from './src/navigation/context';

import {Loading} from './src/components';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: (token) => {
        setIsLoading(false);
        setUserToken(token);
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken ? <DrawerNavigation /> : <AuthStackNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;
