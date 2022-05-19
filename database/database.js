import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const getEvents = (setEventFunc) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'SELECT * FROM EVENTS',
        [],
        (_, { rows: { _array } }) => {
          setEventFunc(_array)
        }
      );
    },
    (t, error) => { console.log("db error load events"); console.log(error) },
    (_t, _success) => { console.log("loaded events")}
  );
}

const getEventById = (setEventFunc) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'SELECT * FROM EVENTS WHERE EVENTS.ID = (?)', [Id],
        [],
        (_, { rows: { _array } }) => {
          setEventFunc(_array)
        }
      );
    },
    (t, error) => { console.log("db error load event"); console.log(error) },
    (_t, _success) => { console.log("loaded event")}
  );
}

const insertEvent = (eventName, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( 'INSERT INTO events (name) values (?)', [eventName] );
    },
    (t, error) => { console.log("db error insertEvent"); console.log(error);},
    (t, success) => { successFunc() }
  )
}

const dropDatabaseTablesAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DROP TABLE events',
        [],
        (_, result) => { resolve(result) },
        (_, error) => { console.log("error dropping events table"); reject(error)
        }
      )
    })
  })
}

const setupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS events (id INTEGER primary key NOT NULL, name TEXT);'
        );
      },
      (_, error) => { console.log("db error creating tables"); console.log(error); reject(error) },
      (_, success) => { resolve(success)}
    )
  })
}

const setupEventsAsync = async () => {
  return new Promise((resolve, _reject) => {
    db.transaction( tx => {
        tx.executeSql( 'INSERT INTO events (id, name) VALUES (?,?)', [1, "Create app"] );
      },
      (t, error) => { console.log("db error insertEvent"); console.log(error); resolve() },
      (t, success) => { resolve(success)}
    )
  })
}

export const database = {
  getEvents,
  insertEvent,
  getEventById,
  setupDatabaseAsync,
  setupEventsAsync,
  dropDatabaseTablesAsync,
}