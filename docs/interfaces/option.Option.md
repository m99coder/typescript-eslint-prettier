[typescript-starter](../README.md) / [option](../modules/option.md) / Option

# Interface: Option<T\>

[option](../modules/option.md).Option

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`None`](../classes/option.None.md)
- [`Some`](../classes/option.Some.md)

## Table of contents

### Methods

- [isNone](option.Option.md#isnone)
- [isSome](option.Option.md#issome)
- [match](option.Option.md#match)
- [unwrap](option.Option.md#unwrap)

## Methods

### isNone

▸ **isNone**(): this is None<T\>

#### Returns

this is None<T\>

#### Defined in

option.ts:8

___

### isSome

▸ **isSome**(): this is Some<T\>

#### Returns

this is Some<T\>

#### Defined in

option.ts:7

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

#### Defined in

option.ts:10

___

### unwrap

▸ **unwrap**(): `T`

#### Returns

`T`

#### Defined in

option.ts:9
