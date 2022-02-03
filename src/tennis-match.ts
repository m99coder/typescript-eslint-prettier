export enum Point {
  LOVE = 0,
  FIFTEEN = 15,
  THIRTY = 30,
  FORTY = 40,
  ADVANTAGE = 60,
}

export class Player {
  private _id = Math.random()
  private _points = Point.LOVE

  public get id() {
    return this._id
  }

  public get points() {
    return this._points
  }

  public set points(points: Point) {
    this._points = points
  }
}

export class TennisMatch {
  private _players: Player[] = []
  private _server: Player
  private _receiver: Player

  constructor(players: Player[]) {
    if (players.length !== 2) {
      throw new Error('Provide exactly two players')
    }

    this._players = players
    this._server = players[0]
    this._receiver = players[1]
  }

  public get players() {
    return this._players
  }

  public get server() {
    return this._server
  }

  public get receiver() {
    return this._receiver
  }

  public pointFor(player: Player) {
    const opponent = this._players.find((p) => p.id !== player.id)
    if (!opponent) {
      throw new Error('Did not find opponent')
    }

    // advantage can only be reached from a previous deuce,
    // in case the other player made the point, the score is reset to deuce
    if (opponent.points === Point.ADVANTAGE) {
      opponent.points = Point.FORTY
      return
    }

    switch (player.points) {
      case Point.LOVE:
        player.points = Point.FIFTEEN
        break
      case Point.FIFTEEN:
        player.points = Point.THIRTY
        break
      case Point.THIRTY:
        player.points = Point.FORTY
        break
      case Point.FORTY:
        // there needs to be a difference of two at least to win a game
        if (opponent.points <= Point.THIRTY) {
          opponent.points = Point.LOVE
          player.points = Point.LOVE
        } else {
          player.points = Point.ADVANTAGE
        }
        break
      case Point.ADVANTAGE:
        opponent.points = Point.LOVE
        player.points = Point.LOVE
    }
  }
}
