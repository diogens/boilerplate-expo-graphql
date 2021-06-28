import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ApolloProvider } from '@apollo/client'

import { useQuery } from '@apollo/client'
import { StatusBar } from 'expo-status-bar'
import { QueryLaunchesPast } from '../graphql/generated/QueryLaunchesPast'
import { QUERY_LAUNCHES_PAST } from '../graphql/queries/launches-past'
import { FlatList } from 'react-native-gesture-handler'

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false)

  const { data, loading, error, refetch } =
    useQuery<QueryLaunchesPast>(QUERY_LAUNCHES_PAST)

  async function refreshList() {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <StatusBar style="light" />
        <Text>Carregando...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.loading}>
        <Text>Error...{error.message}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView>
        <FlatList
          data={data?.launchesPast}
          keyExtractor={(_, index) => index.toString()}
          onRefresh={refreshList}
          refreshing={true}
          renderItem={({ item }) => {
            return (
              <View style={styles.section}>
                <Text>{item?.mission_name}</Text>
              </View>
            )
          }}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  loading: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center'
  },
  section: {
    backgroundColor: 'tomato',
    padding: 20,
    borderBottomWidth: 1,
    borderRadius: 4,
    marginBottom: 1
  }
})
