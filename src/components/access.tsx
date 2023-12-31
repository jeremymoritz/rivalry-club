import { GraphQLQuery } from '@aws-amplify/api';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { API } from 'aws-amplify';
import type { PropsWithChildren } from 'react';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Button } from 'react-native-paper';

import { User, UsersByAwsSubQuery } from '../API';
import UserList from '../components/user-list';
import { usersByAwsSub } from '../graphql/queries';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function SignOutButton(): JSX.Element {
  const { signOut } = useAuthenticator();

  return (
    <Button mode="contained" onPress={signOut}>
      Sign Out
    </Button>
  );
}

function Access(): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const isDarkMode = useColorScheme() === 'dark';

  const { user: amplifyUser } = useAuthenticator();

  async function fetchAndSetUserByAwsSub(awsSub: string): Promise<void> {
    const queryResult = await API.graphql<GraphQLQuery<UsersByAwsSubQuery>>({
      query: usersByAwsSub,
      variables: { awsSub },
    });

    const usersWithAwsSub = queryResult.data?.usersByAwsSub?.items;

    if (!usersWithAwsSub?.length) return;

    setUser(usersWithAwsSub[0]);
  }

  useEffect(() => {
    if (!amplifyUser?.username) return;

    fetchAndSetUserByAwsSub(amplifyUser.username);
  }, [amplifyUser]);

  console.warn({ amplifyUser });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <UserList />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <SignOutButton />
          <Section title="Welcome">
            Welcome{user ? `, ${user.firstName}` : ''}!
            <FontAwesomeIcon icon={faMugSaucer} />
            <FontAwesomeIcon icon="square-check" />
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Access;
