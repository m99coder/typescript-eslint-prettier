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

either.ts:8

___

### isSuccess

▸ **isSuccess**(): this is Success<S\>

#### Returns

this is Success<S\>

#### Defined in

either.ts:7

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

either.ts:10

___

### unwrap

▸ **unwrap**(): `S`

#### Returns

`S`

#### Defined in

either.ts:9
