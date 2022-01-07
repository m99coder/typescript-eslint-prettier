[typescript-starter](../README.md) / [option](../modules/option.md) / Some

# Class: Some<T\>

[option](../modules/option.md).Some

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Option`](../interfaces/option.Option.md)<`T`\>

## Table of contents

### Constructors

- [constructor](option.Some.md#constructor)

### Properties

- [value](option.Some.md#value)

### Methods

- [isNone](option.Some.md#isnone)
- [isSome](option.Some.md#issome)
- [match](option.Some.md#match)
- [unwrap](option.Some.md#unwrap)

## Constructors

### constructor

• **new Some**<`T`\>(`value`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Defined in

option.ts:16

## Properties

### value

• `Readonly` **value**: `T`

#### Defined in

option.ts:14

## Methods

### isNone

▸ **isNone**(): this is None<T\>

#### Returns

this is None<T\>

#### Implementation of

[Option](../interfaces/option.Option.md).[isNone](../interfaces/option.Option.md#isnone)

#### Defined in

option.ts:24

___

### isSome

▸ **isSome**(): this is Some<T\>

#### Returns

this is Some<T\>

#### Implementation of

[Option](../interfaces/option.Option.md).[isSome](../interfaces/option.Option.md#issome)

#### Defined in

option.ts:20

___

### match

▸ **match**<`A`\>(`branches`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `branches` | `Match`<`T`, `A`\> |

#### Returns

`A`

#### Implementation of

[Option](../interfaces/option.Option.md).[match](../interfaces/option.Option.md#match)

#### Defined in

option.ts:32

___

### unwrap

▸ **unwrap**(): `T`

#### Returns

`T`

#### Implementation of

[Option](../interfaces/option.Option.md).[unwrap](../interfaces/option.Option.md#unwrap)

#### Defined in

option.ts:28
