// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Chartest } from '../client';

export abstract class APIResource {
  protected _client: Chartest;

  constructor(client: Chartest) {
    this._client = client;
  }
}
