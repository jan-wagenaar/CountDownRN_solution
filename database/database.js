import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const getEvents = (setEventsFunc) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          'SELECT * FROM EVENTS',
          [],
          (_, { rows: { _array } }) => { resolve(setEventsFunc(_array)) },
          (_, error) => { console.log("error dropping events table"); reject(error) }
        );
      }
    );
  })
};

const getEventById = (id, setEventFunc) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'SELECT * FROM EVENTS WHERE EVENTS.ID = (?)', [id],
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

const insertEvent = (eventName, eventDateTime, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( 'INSERT INTO events (name, datetime) values (? , ?)', [eventName, eventDateTime] );
    },
    (t, error) => { console.log("db error insertEvent"); console.log(error);},
    (t, success) => { successFunc() }
  )
}

const deleteEventById = (id) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'DELETE * FROM EVENTS WHERE EVENTS.ID = (?)', [id])
    },
    (t, error) => { console.log("db error load event"); console.log(error) },
    (_t, _success) => { console.log("loaded event")}
  );
}

const dropDatabaseTablesAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DROP TABLE events',
        [],
        (_, result) => { resolve(result) },
        (_, error) => { console.log("error dropping events table"); reject(error) }
      )
    })
  })
}

const setupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS events (id INTEGER primary key NOT NULL, name TEXT, datetime TEXT);'
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
        tx.executeSql( 'INSERT INTO events (id, name, datetime) VALUES (?,?,?)', [1, "Create app", "2022-07-24 12:00:00"] );
      },
      (t, error) => { console.log("db error setup sample data"); console.log(error); resolve() },
      (t, success) => { resolve(success)}
    )
  })
}

export const database = {
  getEvents,
  insertEvent,
  getEventById,
  deleteEventById,
  setupDatabaseAsync,
  setupEventsAsync,
  dropDatabaseTablesAsync,
}