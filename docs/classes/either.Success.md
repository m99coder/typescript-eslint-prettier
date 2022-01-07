[typescript-starter](../README.md) / [either](../modules/either.md) / Success

# Class: Success<S\>

[either](../modules/either.md).Success

## Type parameters

| Name |
| :------ |
| `S` |

## Implements

- [`Either`](../interfaces/either.Either.md)<`S`, `never`\>

## Table of contents

### Constructors

- [constructor](either.Success.md#constructor)

### Properties

- [value](either.Success.md#value)

### Methods

- [isFailure](either.Success.md#isfailure)
- [isSuccess](either.Success.md#issuccess)
- [match](either.Success.md#match)
- [unwrap](either.Success.md#unwrap)

## Constructors

### constructor

• **new Success**<`S`\>(`value`)

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `S` |

#### Defined in

[either.ts:15](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L15)

## Properties

### value

• `Readonly` **value**: `S`

#### Defined in

[either.ts:13](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L13)

## Methods

### isFailure

▸ **isFailure**(): this is Failure<never\>

#### Returns

this is Failure<never\>

#### Implementation of

[Either](../interfaces/either.Either.md).[isFailure](../interfaces/either.Either.md#isfailure)

#### Defined in

[either.ts:23](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L23)

___

### isSuccess

▸ **isSuccess**(): this is Success<S\>

#### Returns

this is Success<S\>

#### Implementation of

[Either](../interfaces/either.Either.md).[isSuccess](../interfaces/either.Either.md#issuccess)

#### Defined in

[either.ts:19](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L19)

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
| `branches` | `Match`<`S`, `A`, `never`\> |

#### Returns

`A`

#### Implementation of

[Either](../interfaces/either.Either.md).[match](../interfaces/either.Either.md#match)

#### Defined in

[either.ts:31](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L31)

___

### unwrap

▸ **unwrap**(): `S`

#### Returns

`S`

#### Implementation of

[Either](../interfaces/either.Either.md).[unwrap](../interfaces/either.Either.md#unwrap)

#### Defined in

[either.ts:27](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L27)
