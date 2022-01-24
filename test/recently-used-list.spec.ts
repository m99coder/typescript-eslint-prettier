import { RecentlyUsedList } from '../src/recently-used-list'

/*
  description:
  Develop a recently-used-list class to hold strings uniquely in Last-In-First-Out order.
  The most recently added item is first, the least recently added item is last.
  Items can be looked up by index, which counts from zero.
  Items in the list are unique, so duplicate insertions are moved rather than added.
  A recently-used-list is also initially empty.
*/

/*
  optional extras:
  - Null insertions (empty strings) are not allowed.
  - A bounded capacity can be specified, so there is an upper limit to the number of items contained, with the least recently added items dropped on overflow.
  - While getting items by index, supplied index-value should be within the bounds of List
    [eg. if maximum item counts of list is 5 then supplied index is less than 4 as index starts from 0 (zero)]
  - Negative index value not allowed [>0]
  - Size limit is must if not supplied make 5 as default [0-4]
*/

// a stack at the end
describe('Recently used list', () => {
  let recentlyUsedList: RecentlyUsedList

  beforeEach(() => {
    recentlyUsedList = new RecentlyUsedList()
  })

  it('returns “foo” as first and “bar” as last item', () => {
    recentlyUsedList.push('bar')
    recentlyUsedList.push('foo')
    expect(recentlyUsedList.pop()).toEqual('foo')
    expect(recentlyUsedList.pop()).toEqual('bar')
  })

  it('returns “foo” for index 0 and “bar” for index 1', () => {
    recentlyUsedList.push('bar')
    recentlyUsedList.push('foo')
    expect(recentlyUsedList.at(0)).toBe('foo')
    expect(recentlyUsedList.at(1)).toBe('bar')
  })

  it('adds “foo” only once', () => {
    recentlyUsedList.push('foo')
    recentlyUsedList.push('foo')
    expect(recentlyUsedList.pop()).toBe('foo')
    expect(recentlyUsedList.pop()).toBeUndefined()
  })

  it('moves “foo” if not unique', () => {
    recentlyUsedList.push('foo')
    recentlyUsedList.push('bar')
    recentlyUsedList.push('baz')
    recentlyUsedList.push('foo')

    expect(recentlyUsedList.pop()).toBe('foo')
    expect(recentlyUsedList.pop()).toBe('baz')
    expect(recentlyUsedList.pop()).toBe('bar')
    expect(recentlyUsedList.pop()).toBeUndefined()
  })

  it('should initially be empty', () => {
    expect(recentlyUsedList.pop()).toBeUndefined()
  })

  // optional extras
  it('doesn’t add an empty string', () => {
    recentlyUsedList.push('')
    expect(recentlyUsedList.pop()).toBeUndefined()
  })

  it('drops “foo” if “bar” is added with size 1', () => {
    recentlyUsedList = new RecentlyUsedList(1)
    recentlyUsedList.push('foo')
    recentlyUsedList.push('bar')

    expect(recentlyUsedList.pop()).toBe('bar')
    expect(recentlyUsedList.pop()).toBeUndefined()
  })

  it('returns nothing if index is 1 for a list of 1', () => {
    recentlyUsedList = new RecentlyUsedList(1)
    recentlyUsedList.push('foo')
    expect(recentlyUsedList.at(1)).toBeUndefined()
  })

  it('returns nothing for negative indexes', () => {
    recentlyUsedList.push('bar')
    expect(recentlyUsedList.at(-1)).toBeUndefined()
  })

  it('defaults to a size of 5', () => {
    recentlyUsedList.push('t')
    recentlyUsedList.push('e')
    recentlyUsedList.push('s')
    recentlyUsedList.push('t')
    recentlyUsedList.push('i')
    recentlyUsedList.push('n')
    recentlyUsedList.push('g')

    expect(recentlyUsedList.pop()).toBe('g')
    expect(recentlyUsedList.pop()).toBe('n')
    expect(recentlyUsedList.pop()).toBe('i')
    expect(recentlyUsedList.pop()).toBe('t')
    expect(recentlyUsedList.pop()).toBe('s')
    expect(recentlyUsedList.pop()).toBeUndefined()
  })
})
