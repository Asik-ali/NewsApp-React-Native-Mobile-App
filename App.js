import AppNavigation from "./src/navigation";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
}



// import React, { useEffect, useRef } from 'react';
// import { AppState } from 'react-native';
// import AppNavigation from './src/navigation';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { AppOpenAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

// const queryClient = new QueryClient();

// const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-3121432182108183/7560607422';

// const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
//   keywords: ['fashion', 'clothing'],
// });

// export default function App() {
//   const appState = useRef(AppState.currentState);

//   useEffect(() => {
//     appOpenAd.load();

//     const appStateListener = AppState.addEventListener('change', handleAppStateChange);

//     const unsubscribeAdEvent = appOpenAd.addAdEventListener(AdEventType.CLOSED, () => {
//       appOpenAd.load();
//     });

//     return () => {
//       appStateListener.remove();
//       unsubscribeAdEvent();
//     };
//   }, []);

//   const handleAppStateChange = (nextAppState) => {
//     if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
//       if (appOpenAd.loaded) {
//         appOpenAd.show();
//       } else {
//         appOpenAd.load();
//       }
//     }

//     appState.current = nextAppState;
//   };

//   return (
//     <QueryClientProvider client={queryClient}>
//       <AppNavigation />
//     </QueryClientProvider>
//   );
// }
