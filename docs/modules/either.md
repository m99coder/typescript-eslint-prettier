[typescript-starter](../README.md) / either

# Module: either

## Table of contents

### Classes

- [Failure](../classes/either.Failure.md)
- [Success](../classes/either.Success.md)

### Interfaces

- [Either](../interfaces/either.Either.md)

### Functions

- [failure](either.md#failure)
- [success](either.md#success)

## Functions

### failure

▸ `Const` **failure**<`F`\>(`f`): [`Failure`](../classes/either.Failure.md)<`F`\>

#### Type parameters

| Name |
| :------ |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `F` |

#### Returns

[`Failure`](../classes/either.Failure.md)<`F`\>

#### Defined in

either.ts:65

___

### success

▸ `Const` **success**<`S`\>(`s`): [`Success`](../classes/either.Success.md)<`S`\>

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `S` |

#### Returns

[`Success`](../classes/either.Success.md)<`S`\>

#### Defined in

either.ts:61
