import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    console.log(data);

    const result = await json(data);
    return result;
  }
}
