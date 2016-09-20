import { TypedRecord } from 'typed-immutable-record';
import { makeTypedFactory } from 'typed-immutable-record';

export interface <%= _.capitalize(name) %>ModelInterface {
  <%= name %>Value: String;
};

export interface <%= _.capitalize(name) %>Model extends TypedRecord<<%= _.capitalize(name) %>Model>,
  <%= _.capitalize(name) %>ModelInterface {
};

const <%= _.capitalize(name) %>ModelFactory = makeTypedFactory<<%= _.capitalize(name) %>ModelInterface, <%= _.capitalize(name) %>Model>({
  <%= name %>Value: '<%= _.capitalize(name) %> default value'
});

export const InitialState = <%= _.capitalize(name) %>ModelFactory();
