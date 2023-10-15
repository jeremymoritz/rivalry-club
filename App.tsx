/** Rivalry App */

import { Authenticator } from '@aws-amplify/ui-react-native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Amplify } from 'aws-amplify';
import React, { useState } from 'react';

import { iconsInProject } from './src/assets/icons';
import awsConfig from './src/aws-exports';
import Access from './src/components/access';
import Home from './src/components/home';

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
    <Home onMoveOnClick={() => setMoveOn(true)} />
  );
}

export default App;
