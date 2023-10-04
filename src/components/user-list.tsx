import { Text, View } from 'react-native';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as customQueries from '../graphql/custom-queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListUsersQuery, GetUserQuery, User } from '../API';
import { useEffect, useState } from 'react';
import { GetBasicUserQuery } from '../custom-api';

export default function UserList(): JSX.Element {
  const [user, setUser] = useState<User | null | undefined>();

  async function fetchData() {
    // Simple query
    const allUsers = await API.graphql<GraphQLQuery<ListUsersQuery>>({
      query: queries.listUsers,
    });
    // console.log(allUsers); // result: { "data": { "listUsers": { "items": [/* ..... */] } } }

    // Fetch a single record by its identifier
    const oneUserJson = await API.graphql<GraphQLQuery<GetUserQuery>>({
      query: queries.getUser,
      variables: { id: 'cc0849eb-2875-4baa-bbd1-48cbba8ee471' },
    });
    // Fetch a single record by its identifier
    const oneBasicUserJson = await API.graphql<GraphQLQuery<GetBasicUserQuery>>(
      {
        query: customQueries.getBasicUser,
        variables: { id: 'cc0849eb-2875-4baa-bbd1-48cbba8ee471' },
      },
    );

    console.warn({ oneBasicUserJson });

    if (oneBasicUserJson.data?.getUser) {
      const basicUser: User = oneBasicUserJson.data.getUser;

      console.warn({ basicUser });
    } else {
      console.warn('no basic user');
    }

    if (oneUserJson.data?.getUser) {
      const user: User = oneUserJson.data.getUser as User;

      console.warn({ user });
    } else {
      console.warn('no regular user');
    }

    console.warn({ allUsers });
    console.warn({ oneUserJson });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>User List</Text>
      <Text>One User</Text>
    </View>
  );
}
