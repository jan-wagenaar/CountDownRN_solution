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
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          'SELECT * FROM events WHERE events.id = ?',
          [id],
          (_, { rows: { _array } }) => { resolve(setEventFunc(_array)) },
          (_, error) => { console.log("error dropping events table"); reject(error) }
        );
      }
    );
  })
}

const insertEvent = (event, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( 'INSERT INTO events (name, datetime) values (? , ?)', [event.name, event.datetime] );
    },
    (t, error) => { console.log("db error insertEvent"); console.log(error);},
    (t, success) => { successFunc() }
  )
}

const updateEventById = (event, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( 'UPDATE events SET name = ?,  datetime = ? WHERE ID = ?', [event.name, event.datetime, event.id] );
    },
    (t, error) => { console.log("db error insertEvent"); console.log(error);},
    (t, success) => { successFunc() }
  )
}

const deleteEventById = ( id, callBackFunc ) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'DELETE FROM events WHERE events.ID = (?)', 
        [id])
    },
    (t, error) => { console.log("db error deleting event"); console.log(error) },
    (_t, _success) => { callBackFunc(); console.log("Deleted event")}
  );
}

const dropDatabaseTablesAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DROP TABLE IF EXISTS events',
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
  updateEventById,
  getEventById,
  deleteEventById,
  setupDatabaseAsync,
  setupEventsAsync,
  dropDatabaseTablesAsync,
}