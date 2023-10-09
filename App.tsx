/** Rivalry App */

import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsConfig from './src/aws-exports';
import Access from './src/components/access';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Authenticator } from '@aws-amplify/ui-react-native';
import { Button } from 'react-native-paper'; // in App.js

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { iconsInProject } from './src/assets/icons';

library.add(...iconsInProject);

Amplify.configure(awsConfig);

function App(): JSX.Element {
  const [moveOn, setMoveOn] = useState<boolean>(false);

  return moveOn ? (
    <Authenticator.Provider>
      <Authenticator>
        <Access />
      </Authenticator>
    </Authenticator.Provider>
  ) : (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Rivalry Club is cool!</Text>
          <Button mode="contained" onPress={() => setMoveOn(true)}>
            <FontAwesomeIcon icon="square-check" /> Click here to continue{' '}
            <FontAwesomeIcon icon="stroopwafel" />
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
