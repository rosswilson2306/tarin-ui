export default class TarinClient {
  #baseUrl: string;

  constructor() {
    this.#baseUrl = process.env.TARIN_SERVER_URL!;
  }

  async request({
    path,
    options,
  }: {
    path: string;
    options?: { method?: string };
  }) {
    const url = `${this.#baseUrl}${path}`;

    const res = await fetch(
      url,
      options || {
        method: "GET",
      },
    );
    const json = await res.json();

    return json;
  }
}
