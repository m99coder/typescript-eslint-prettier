export class TextUtils {
  public static isLessThanLength(text: string, length: number): boolean {
    // With the fake it technique, we fake the implementation to make the test pass
    // return true
    // With the obvious implementation, we know exactly how to make the test pass
    return text.length < length
  }
}
