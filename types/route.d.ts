type RootStackParamList = {
    Home: undefined;
    Details: {id: number; title: string; star: number} | undefined;
    // Feed: { sort: 'latest' | 'top'} | undefined;
}

// declare global {
//     namespace ReactNavigation {
//         interface RootParamList extends RootStackParamList {}
//     }
// }