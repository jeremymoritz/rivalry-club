import { GraphQLQuery } from '@aws-amplify/api';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import { Game, ListGamesQuery } from '../API';
import { styles } from '../assets/styles';
import { gameLogoSource, s3Favicons } from '../assets/utils';
import { listGames } from '../graphql/queries';

// async function fetchFightersByGameId(gameId): Promise<void> {
//   const queryResult = await API.graphql<GraphQLQuery<UsersByAwsSubQuery>>({
//     query: usersByAwsSub,
//     variables: { awsSub },
//   });

//   const usersWithAwsSub = queryResult.data?.usersByAwsSub?.items;

//   if (!usersWithAwsSub?.length) return;

//   setUser(usersWithAwsSub[0]);
// }

function Home({ onMoveOnClick }: { onMoveOnClick(): void }): JSX.Element {
  async function fetchAndSetGames(): Promise<void> {
    const queryResult = await API.graphql<GraphQLQuery<ListGamesQuery>>({
      query: listGames,
    });

    const games = queryResult.data?.listGames?.items;

    if (!games?.length) return;

    setGames(games as Game[]);
  }

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchAndSetGames();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.siteLogoImage}
          source={{
            uri: `${s3Favicons}/swords-144.png`,
          }}
        />
        <Text style={styles.title}>Rivalry Club</Text>
        <Button mode="contained" onPress={onMoveOnClick}>
          <FontAwesomeIcon icon="square-check" /> Click here to continue!{' '}
          <FontAwesomeIcon icon="stroopwafel" />
        </Button>
      </View>
      <ScrollView>
        {games.map(game => (
          <>
            <Image
              style={styles.gameLogoImage}
              source={{
                uri: gameLogoSource(game),
              }}
            />
            <Text>{game.name}</Text>
          </>
        ))}
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
        <Image
          style={styles.fighterImage}
          source={{
            uri: 'https://rivalry-club.s3.amazonaws.com/images/fighters/ssbu/_large/banjo__kazooie.png',
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
