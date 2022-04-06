import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const getEvents = (setEventFunc) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'select * from events',
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

const insertEvent = (userName, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( 'insert into events (name) values (?)', [userName] );
    },
    (t, error) => { console.log("db error insertEvent"); console.log(error);},
    (t, success) => { successFunc() }
  )
}

const dropDatabaseTablesAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'drop table events',
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
          'create table if not exists events (id integer primary key not null, name text);'
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
        tx.executeSql( 'insert into events (id, name) values (?,?)', [1, "john"] );
      },
      (t, error) => { console.log("db error insertEvent"); console.log(error); resolve() },
      (t, success) => { resolve(success)}
    )
  })
}

export const database = {
  getEvents,
  insertEvent,
  setupDatabaseAsync,
  setupEventsAsync,
  dropDatabaseTablesAsync,
}