export class RecentlyUsedList {
  private list: string[] = []
  private size = 5

  constructor(size?: number) {
    if (size) {
      this.size = size
    }
  }

  at(index: number): string | undefined {
    if (index < 0 || this.list.length < index) {
      return undefined
    }
    return this.list[index]
  }

  push(item: string) {
    if (this.list.includes(item)) {
      this.list.splice(this.list.indexOf(item), 1)
    }
    if (this.list.length === this.size) {
      this.list.splice(this.list.length - 1, 1)
    }
    if (item !== '') {
      this.list.unshift(item)
    }
  }

  pop(): string | undefined {
    if (this.list.length === 0) {
      return undefined
    }
    return this.list.splice(0, 1)[0]
  }
}
