import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

function Home({ onMoveOnClick }: { onMoveOnClick(): void }): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Rivalry Club is cool!</Text>
          <Button mode="contained" onPress={onMoveOnClick}>
            <FontAwesomeIcon icon="square-check" /> Click here to continue!{' '}
            <FontAwesomeIcon icon="stroopwafel" />
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
