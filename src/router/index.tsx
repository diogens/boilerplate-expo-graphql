import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ApolloProvider } from '@apollo/client'

import { useQuery } from '@apollo/client'
import { StatusBar } from 'expo-status-bar'
import { QueryLaunchesPast } from '../graphql/generated/QueryLaunchesPast'
import { QUERY_LAUNCHES_PAST } from '../graphql/queries/launches-past'
import { FlatList } from 'react-native-gesture-handler'

export default function App() {
  const { data, loading } = useQuery<QueryLaunchesPast>(QUERY_LAUNCHES_PAST)

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Carregando...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text>BoilerPlate :)</Text>
      {data?.launchesPast.map((item) => {
        return (
          <View key={`index-${item?.links}`} style={styles.section}>
            <Text>{item?.launch_date_local}</Text>
            <Text>{item?.launch_site}</Text>
            <Text>{item?.links}</Text>
            <Text>{item?.rocket}</Text>
            <Text>{item?.ships}</Text>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center'
  },
  section: {
    backgroundColor: 'tomato'
  }
})
