[typescript-starter](../README.md) / [option](../modules/option.md) / None

# Class: None<T\>

[option](../modules/option.md).None

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Option`](../interfaces/option.Option.md)<`T`\>

## Table of contents

### Constructors

- [constructor](option.None.md#constructor)

### Methods

- [isNone](option.None.md#isnone)
- [isSome](option.None.md#issome)
- [match](option.None.md#match)
- [unwrap](option.None.md#unwrap)

## Constructors

### constructor

• **new None**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

## Methods

### isNone

▸ **isNone**(): this is None<T\>

#### Returns

this is None<T\>

#### Implementation of

[Option](../interfaces/option.Option.md).[isNone](../interfaces/option.Option.md#isnone)

#### Defined in

option.ts:42

___

### isSome

▸ **isSome**(): this is Some<T\>

#### Returns

this is Some<T\>

#### Implementation of

[Option](../interfaces/option.Option.md).[isSome](../interfaces/option.Option.md#issome)

#### Defined in

option.ts:38

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
| `branches` | `Match`<`never`, `A`\> |

#### Returns

`A`

#### Implementation of

[Option](../interfaces/option.Option.md).[match](../interfaces/option.Option.md#match)

#### Defined in

option.ts:50

___

### unwrap

▸ **unwrap**(): `never`

#### Returns

`never`

#### Implementation of

[Option](../interfaces/option.Option.md).[unwrap](../interfaces/option.Option.md#unwrap)

#### Defined in

option.ts:46
