import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';

function Home({ onMoveOnClick }: { onMoveOnClick(): void }): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Rivalry Club</Text>
          <Button mode="contained" onPress={onMoveOnClick}>
            <FontAwesomeIcon icon="square-check" /> Click here to continue!{' '}
            <FontAwesomeIcon icon="stroopwafel" />
          </Button>
          <Image
            style={styles.logoImage}
            source={{
              uri: 'https://rivalry-club.s3.amazonaws.com/images/logos/super_smash_bros_ultimate.png',
            }}
          />
          <Image
            style={styles.fighterImage}
            source={{
              uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoImage: { height: 250 },
  fighterImage: { height: 460 },
});

export default Home;
