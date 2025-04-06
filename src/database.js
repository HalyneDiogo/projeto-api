import fs from "fs/promises";

const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(DATABASE_PATH, "utf-8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => this.#persist());
  }

  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  insert(tabela, dados) {
    if (Array.isArray(this.#database[tabela])) {
      this.#database[tabela].push(dados);
    } else {
      this.#database[tabela] = [dados];
    }

    this.#persist();
  }

  select(tabela) {
    return this.#database[tabela] ?? [];
  }
}
