
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import rootReducer from './store/root-reducer';

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger();
const middleWares = compose(applyMiddleware(logger))

const store = createStore(
  persistedReducer,
  middleWares,
);

const persistor = persistStore(store);

export { store, persistor };
