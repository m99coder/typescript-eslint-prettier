[typescript-starter](../README.md) / [either](../modules/either.md) / Either

# Interface: Either<S, F\>

[either](../modules/either.md).Either

## Type parameters

| Name |
| :------ |
| `S` |
| `F` |

## Implemented by

- [`Failure`](../classes/either.Failure.md)
- [`Success`](../classes/either.Success.md)

## Table of contents

### Methods

- [isFailure](either.Either.md#isfailure)
- [isSuccess](either.Either.md#issuccess)
- [match](either.Either.md#match)
- [unwrap](either.Either.md#unwrap)

## Methods

### isFailure

▸ **isFailure**(): this is Failure<F\>

#### Returns

this is Failure<F\>

#### Defined in

[either.ts:7](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L7)

___

### isSuccess

▸ **isSuccess**(): this is Success<S\>

#### Returns

this is Success<S\>

#### Defined in

[either.ts:6](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L6)

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
| `branches` | `Match`<`S`, `A`, `F`\> |

#### Returns

`A`

#### Defined in

[either.ts:9](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L9)

___

### unwrap

▸ **unwrap**(): `S`

#### Returns

`S`

#### Defined in

[either.ts:8](https://github.com/m99coder/typescript-eslint-prettier/blob/3803c92/src/either.ts#L8)
