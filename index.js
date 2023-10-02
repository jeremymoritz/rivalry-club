/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import {Amplify, Auth} from 'aws-amplify';
// import awsconfig from './src/aws-exports';
// Amplify.configure(awsconfig);
// import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react-native';
// import Router from './src/components/router';

// export default function App() {
//   return (
//     <Authenticator.Provider>
//       <Authenticator>
//         <Router />
//       </Authenticator>
//     </Authenticator.Provider>
//   );
// }

AppRegistry.registerComponent(appName, () => App);
