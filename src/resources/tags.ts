// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tags extends APIResource {
  /**
   * @example
   * ```ts
   * const tag = await client.tags.create({
   *   label: 'Work',
   *   owner_id: 'owner_id',
   * });
   * ```
   */
  create(body: TagCreateParams, options?: RequestOptions): APIPromise<Tag> {
    return this._client.post('/v1/tags', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const tag = await client.tags.retrieve(
   *   'tag_tz4a98xxat96iws9zmbrgj3a',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Tag> {
    return this._client.get(path`/v1/tags/${id}`, options);
  }

  /**
   * @example
   * ```ts
   * const tags = await client.tags.list();
   * ```
   */
  list(query: TagListParams | null | undefined = {}, options?: RequestOptions): APIPromise<TagListResponse> {
    return this._client.get('/v1/tags', { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const tag = await client.tags.delete(
   *   'tag_tz4a98xxat96iws9zmbrgj3a',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<TagDeleteResponse> {
    return this._client.delete(path`/v1/tags/${id}`, options);
  }
}

export interface Tag {
  id: string;

  created_at: string;

  label: string;

  owner_id: string;

  updated_at: string;
}

export interface TagListResponse {
  data: Array<Tag>;

  has_more: boolean;

  next_cursor: string | null;
}

export interface TagDeleteResponse {
  id: string;

  deleted: boolean;
}

export interface TagCreateParams {
  label: string;

  owner_id: string;
}

export interface TagListParams {
  cursor?: string;

  limit?: number | null;
}

export declare namespace Tags {
  export {
    type Tag as Tag,
    type TagListResponse as TagListResponse,
    type TagDeleteResponse as TagDeleteResponse,
    type TagCreateParams as TagCreateParams,
    type TagListParams as TagListParams,
  };
}
