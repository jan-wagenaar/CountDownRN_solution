import React, {useEffect} from 'react';
import { database } from '../database/database'

export default function useDatabase() {
  const [isDBLoadingComplete, setDBLoadingComplete] = React.useState(false);

  useEffect(() => {
    async function loadDataAsync() {
      try {
        // await database.dropDatabaseTablesAsync()
        await database.setupDatabaseAsync()
        await database.setupEventsAsync()

        setDBLoadingComplete(true);
      } catch (e) {
        console.warn(e);
      }
    }

    loadDataAsync();
  }, []);

  return isDBLoadingComplete;
}