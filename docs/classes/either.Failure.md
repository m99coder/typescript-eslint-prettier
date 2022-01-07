[typescript-starter](../README.md) / [either](../modules/either.md) / Failure

# Class: Failure<F\>

[either](../modules/either.md).Failure

## Type parameters

| Name |
| :------ |
| `F` |

## Implements

- [`Either`](../interfaces/either.Either.md)<`never`, `F`\>

## Table of contents

### Constructors

- [constructor](either.Failure.md#constructor)

### Properties

- [value](either.Failure.md#value)

### Methods

- [isFailure](either.Failure.md#isfailure)
- [isSuccess](either.Failure.md#issuccess)
- [match](either.Failure.md#match)
- [unwrap](either.Failure.md#unwrap)

## Constructors

### constructor

• **new Failure**<`F`\>(`value`)

#### Type parameters

| Name |
| :------ |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `F` |

#### Defined in

[either.ts:39](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L39)

## Properties

### value

• `Readonly` **value**: `F`

#### Defined in

[either.ts:37](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L37)

## Methods

### isFailure

▸ **isFailure**(): this is Failure<F\>

#### Returns

this is Failure<F\>

#### Implementation of

[Either](../interfaces/either.Either.md).[isFailure](../interfaces/either.Either.md#isfailure)

#### Defined in

[either.ts:47](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L47)

___

### isSuccess

▸ **isSuccess**(): this is Success<never\>

#### Returns

this is Success<never\>

#### Implementation of

[Either](../interfaces/either.Either.md).[isSuccess](../interfaces/either.Either.md#issuccess)

#### Defined in

[either.ts:43](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L43)

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
| `branches` | `Match`<`never`, `A`, `F`\> |

#### Returns

`A`

#### Implementation of

[Either](../interfaces/either.Either.md).[match](../interfaces/either.Either.md#match)

#### Defined in

[either.ts:55](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L55)

___

### unwrap

▸ **unwrap**(): `never`

#### Returns

`never`

#### Implementation of

[Either](../interfaces/either.Either.md).[unwrap](../interfaces/either.Either.md#unwrap)

#### Defined in

[either.ts:51](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L51)
