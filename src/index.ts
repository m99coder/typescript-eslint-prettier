/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

// ––– type annotations
// const AGE: number = 40
const AGE = 40

// const ARTIST: string = 'Nick Cave and the Bad Seeds'
const ARTIST = 'Nick Cave and the Bad Seeds'

function sayHello(): string {
  return 'Hello'
}
// const num: number = sayHello()

class Greeter {
  constructor() {}

  sayHello(name: string): string {
    return `Hello ${name}`
  }
}

class Instrument {}
class Guitar extends Instrument {}
class Synth extends Instrument {}
class Drum extends Instrument {
  play(): void {
    console.log('Boing!')
  }
}

function pluckGuitar(guitar: Guitar): void {}
function storeInstrument(instrument: Instrument): void {}
function purchaseDrum(drum: Drum): void {}

const fender = new Guitar()
const juno60 = new Synth()
const efnote = new Drum()

pluckGuitar(fender)
pluckGuitar(juno60) // TypeScript shouldn’t let me do this, but duck typing is allowing it

storeInstrument(fender)
storeInstrument(juno60)

// doesn’t work
// purchaseDrum(fender)
// purchaseDrum(juno60)

interface Comment {
  id: number
  name: string
  content: string
}

interface Reply {
  id: number
  name: string
  content: string
  parentCommentId: number
}

const comment: Comment = {
  id: 1,
  name: 'Marco',
  content: 'Hello, World!',
}

const reply: Reply = {
  id: 2,
  name: 'Charles Darwin',
  content: 'Hi :)',
  parentCommentId: 1,
}

function postComment(comment: Comment) {
  // before TypeScript such a duck typing was common
  const isIdPresentAndValid =
    Object.prototype.hasOwnProperty.call(comment, 'id') && !isNaN(comment.id)
  const isNamePresentAndValid =
    Object.prototype.hasOwnProperty.call(comment, 'name') &&
    typeof comment.name === 'string'
  const isContentPresentAndValid =
    Object.prototype.hasOwnProperty.call(comment, 'content') &&
    typeof comment.name === 'string'

  if (!isIdPresentAndValid) throw new Error('Must provide an integer id')
  if (!isNamePresentAndValid) throw new Error('Must provide a string name')
  if (!isContentPresentAndValid)
    throw new Error('Must provide a string content')
}

postComment(comment)
postComment(reply) // still okay as all necessary members are present
// doesn’t work
// postComment({ id: number })

// ––– declare types
declare let $: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (selector: string): any
}
// $('.awesome').show()
// doesn’t work
// $(123).show()

// ––– primitive types
let num = 12
const binary = 0b110
num = 55
// doesn’t work
// binary = '222'

const firstName = 'John'
const lastName = 'Doe'
const message = `This person is ${firstName} ${lastName}`

let isLoading = false
isLoading = true
// doesn’t work
// isLoading = 'false'

const firstFivePrimes: number[] = [2, 3, 5, 7, 11]
const firstFivePrimes2: Array<number> = [2, 3, 5, 7, 11]

// ––– object-oriented programming
class Point {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y)
  }
}

const p1 = new Point(0, 10)
const p2 = new Point(10, 20)
const p3 = p1.add(p2) // Point { x: 10, y: 30 }

class Point3D extends Point {
  z: number

  constructor(x: number, y: number, z: number) {
    super(x, y) // needs to be the first call if used
    this.z = z
  }

  add(point: Point3D) {
    const point2D = super.add(point)
    return new Point3D(point2D.x, point2D.y, this.z + point.z)
  }
}

// ––– static properties
class Player {
  static instancesCreated = 0

  constructor() {
    Player.instancesCreated++
  }

  public static createPlayer(): Player {
    return new Player()
  }

  public shoot(): void {}
}

const player1 = new Player()
const player2 = new Player()
console.log(Player.instancesCreated)

player1.shoot()
// doesn’t work
// Player.shoot()
// console.log(player2.instancesCreated)

// ––– access modifiers
class Spider {
  readonly name: string
  readonly numberOfLegs: number = 8

  constructor(aName: string) {
    this.name = aName
  }
}

interface Coordinate {
  latitude: number
  longitude: number
  dateCreated?: Date
}

const coordinate: Coordinate = { latitude: 52.520007, longitude: 13.404954 }

interface ICircle {
  readonly id: string
  center: {
    x: number
    y: number
  }
  radius: number
  color?: string
}

interface ICircleWithArea extends ICircle {
  getArea: () => number
}

const circle007: ICircleWithArea = {
  id: '007',
  center: { x: 0, y: 0 },
  radius: 6,
  color: '#ff00ff',
  getArea: function () {
    return this.radius ** 2 * Math.PI
  },
}

// ––– generics
interface Queue<T> {
  data: T[]
  push: (t: T) => void
  pop: () => T | undefined
}

interface Monkey {
  name: string
  color: string
}

class MonkeyQueue implements Queue<Monkey> {
  data: Monkey[]

  constructor() {
    this.data = []
  }

  push(t: Monkey): void {
    this.data.push(t)
  }

  pop(): Monkey | undefined {
    return this.data.shift()
  }
}

type CreateUserRequestDTO = {
  userId: string
  email: string
  password: string
}

type Request = {
  body: string
}

class ParseUtils {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static parseObject<T>(raw: any): T | undefined {
    let returnData: T | undefined = undefined
    try {
      returnData = JSON.parse(raw)
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
    }

    return returnData
  }
}

class CreateUserController {
  public handleRequest(
    req: Request
  ): Promise<CreateUserRequestDTO | undefined> {
    const createUserDTO: CreateUserRequestDTO | undefined =
      ParseUtils.parseObject<CreateUserRequestDTO>(req.body)
    return Promise.resolve(createUserDTO)
  }
}

const userController = new CreateUserController()
userController
  .handleRequest({
    body: '{"userId":"user-id-123","email":"john.doe@example.com","password":"easy"}',
  })
  .then(console.log)
// userController.handleRequest({ body: '{"userId"}' })

// ––– type assertions
interface Person {
  name: string
  age: number
}

const person = {} as Person
person.name = 'John'

// ––– types
type Name = string
type Data = [number, string]
type PointX = { x: number }
type PointY = { y: number }
type IncompletePoint = PointX | PointY
type CompletePoint = PointX & PointY

// ––– enum
enum InstrumentType {
  Guitar,
  Bass,
  Keyboard,
  Drums,
}
const myBass = InstrumentType.Bass

// ––– literals
type KeyValue = {
  fieldName: 'email' | 'password' | 'phonenumber'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
}

// ––– inline type
const GenreType: { [index: number]: string } = {
  1: 'Metal',
  2: 'Rap',
  3: 'Pop',
}

interface GenreProps {
  id: number
  description: string
}

class Genre {
  private props: GenreProps

  get id(): number {
    return this.props.id
  }

  get description(): string {
    return this.props.description
  }

  constructor(props: GenreProps) {
    this.props = props
  }
}

function createGenreFromGenreId(id: number): Genre | null {
  if (id < 1 || id > 3) {
    return null
  }
  return new Genre({ id, description: GenreType[id] })
}

// ––– type guards
function example(x: number | boolean) {
  if (typeof x === 'number') {
    return x.toFixed(2)
  }
  // doesn’t work
  // return x.toFixed(2)
  return x === true
}

class MyResponse {
  header = 'header example'
  result = 'result example'
}

class MyError {
  header = 'header example'
  message = 'message example'
}

function example2(x: MyResponse | MyError) {
  if (x instanceof MyResponse) {
    console.log(x.result)
  } else {
    console.log(x.message)
  }
}

// ––– in guards
const checkForName = 'name' in person
console.log(checkForName)
