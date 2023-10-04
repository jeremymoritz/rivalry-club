/** Rivalry App */

import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsConfig from './src/aws-exports';
import Access from './src/components/access';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@aws-amplify/ui-react-native/dist/primitives';

Amplify.configure(awsConfig);

function App(): JSX.Element {
  const [moveOn, setMoveOn] = useState<boolean>(false);

  return moveOn ? (
    <Access />
  ) : (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Rivalry Club is cool!</Text>
          <Button onPress={() => setMoveOn(true)}>
            Click here to continue
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
