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

[option.ts:7](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/option.ts#L7)

___

### isSome

▸ **isSome**(): this is Some<T\>

#### Returns

this is Some<T\>

#### Defined in

[option.ts:6](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/option.ts#L6)

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

[option.ts:9](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/option.ts#L9)

___

### unwrap

▸ **unwrap**(): `T`

#### Returns

`T`

#### Defined in

[option.ts:8](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/option.ts#L8)
