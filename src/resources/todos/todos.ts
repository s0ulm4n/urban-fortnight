// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TagsAPI from './tags';
import { TagAddParams, TagRemoveParams, Tags } from './tags';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Todos extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * @example
   * ```ts
   * const todo = await client.todos.create({
   *   completed_at: '2021-01-01T00:00:00.000Z',
   *   description: 'Get butter, milk, and bread',
   *   tag_ids: ['string'],
   *   title: 'Buy groceries',
   * });
   * ```
   */
  create(body: TodoCreateParams, options?: RequestOptions): APIPromise<Todo> {
    return this._client.post('/v1/todos', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const todo = await client.todos.retrieve(
   *   'todo_nc6bzmkmd014706rfda898to',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Todo> {
    return this._client.get(path`/v1/todos/${id}`, options);
  }

  /**
   * @example
   * ```ts
   * const todo = await client.todos.update(
   *   'todo_nc6bzmkmd014706rfda898to',
   * );
   * ```
   */
  update(
    id: string,
    body: TodoUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Todo> {
    return this._client.put(path`/v1/todos/${id}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const todos = await client.todos.list();
   * ```
   */
  list(
    query: TodoListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TodoListResponse> {
    return this._client.get('/v1/todos', { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const todo = await client.todos.delete(
   *   'todo_nc6bzmkmd014706rfda898to',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<TodoDeleteResponse> {
    return this._client.delete(path`/v1/todos/${id}`, options);
  }

  /**
   * @example
   * ```ts
   * const todo = await client.todos.complete(
   *   'todo_nc6bzmkmd014706rfda898to',
   * );
   * ```
   */
  complete(id: string, options?: RequestOptions): APIPromise<Todo> {
    return this._client.post(path`/v1/todos/${id}/complete`, options);
  }
}

export interface Todo {
  id: string;

  completed_at: string | null;

  created_at: string;

  description: string | null;

  tags: Array<Todo.Tag>;

  title: string;

  updated_at: string;
}

export namespace Todo {
  export interface Tag {
    id: string;

    created_at: string;

    label: string;

    updated_at: string;
  }
}

export interface TodoListResponse {
  data: Array<Todo>;

  has_more: boolean;

  next_cursor: string | null;
}

export interface TodoDeleteResponse {
  id: string;

  deleted: boolean;
}

export interface TodoCreateParams {
  completed_at: string | null;

  description: string | null;

  tag_ids: Array<string>;

  title: string;
}

export interface TodoUpdateParams {
  completed_at?: string | null;

  description?: string | null;

  tag_ids?: Array<string>;

  title?: string;
}

export interface TodoListParams {
  cursor?: string;

  limit?: number | null;
}

Todos.Tags = Tags;

export declare namespace Todos {
  export {
    type Todo as Todo,
    type TodoListResponse as TodoListResponse,
    type TodoDeleteResponse as TodoDeleteResponse,
    type TodoCreateParams as TodoCreateParams,
    type TodoUpdateParams as TodoUpdateParams,
    type TodoListParams as TodoListParams,
  };

  export { Tags as Tags, type TagAddParams as TagAddParams, type TagRemoveParams as TagRemoveParams };
}
