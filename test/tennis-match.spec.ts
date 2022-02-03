import { Player, Point, TennisMatch } from '../src/tennis-match'

describe('TennisMatch', () => {
  let match: TennisMatch

  /**
   * Serving & receiving:
   * At the start of the game, the server and the receiver are decided.
   * In real life, we do a coin toss, but for our game,
   * you could use merely refer to the players as server and receiver.
   */
  describe('Serving & receiving', () => {
    it('accepts two players', () => {
      const player1 = new Player()
      const player2 = new Player()
      match = new TennisMatch([player1, player2])

      expect(match.players.length).toBe(2)
    })

    it('throws an error if not providing two players', () => {
      const player1 = new Player()

      expect(() => new TennisMatch([player1])).toThrowError(
        'Provide exactly two players'
      )
    })

    it('knows the server and the receiver', () => {
      const player1 = new Player()
      const player2 = new Player()
      match = new TennisMatch([player1, player2])

      expect(match.server).toBe(player1)
      expect(match.receiver).toBe(player2)
    })
  })

  /**
   * Scoring:
   * In Tennis, there are 4 points.
   * The first point — which represents zero — is called “love”.
   * It goes “love”, “15”, “30”, and then “40”.
   * Whenever the ball isn’t served back, whoever’s side it was last on,
   * the other player gets a point.
   */
  describe('Scoring', () => {
    let player1: Player
    let player2: Player

    beforeEach(() => {
      player1 = new Player()
      player2 = new Player()
      match = new TennisMatch([player1, player2])
    })

    it('start with 0', () => {
      expect(player1.points).toEqual(Point.LOVE)
    })

    it('give a point to count 15', () => {
      match.pointFor(player1)
      expect(player1.points).toEqual(Point.FIFTEEN)
    })

    it('give two points to count 30', () => {
      match.pointFor(player1)
      match.pointFor(player1)
      expect(player1.points).toEqual(Point.THIRTY)
    })

    it('give three points to count 40', () => {
      match.pointFor(player1)
      match.pointFor(player1)
      match.pointFor(player1)
      expect(player1.points).toEqual(Point.FORTY)
    })
  })

  /**
   * Winning:
   * In order to win a game, you have to win by two.
   * That means that if the score is tied 40:40 in a “deuce”
   * (four points each player), then the next person to score wins an “advantage”.
   * If the player with the advantage scores again, then the game is over and they win.
   * However, if the player with the “advantage” loses the next point, it goes back to “Deuce”.
   */
  describe('Winning', () => {
    it('first to 4 points wins a game', () => {
      const player1 = new Player()
      const player2 = new Player()
      match = new TennisMatch([player1, player2])

      Array.from({ length: 4 }, () => match.pointFor(player1))
      expect(player1.points).toEqual(Point.LOVE)
    })

    describe('you have to win by two', () => {
      let player1: Player
      let player2: Player

      beforeEach(() => {
        player1 = new Player()
        player2 = new Player()
        match = new TennisMatch([player1, player2])
      })

      it('score for advantage player goes back to deuce, if not a second point follows', () => {
        // advantage player 2
        Array.from({ length: 3 }, () => match.pointFor(player1))
        Array.from({ length: 4 }, () => match.pointFor(player2))

        expect(player1.points).toEqual(Point.FORTY)
        expect(player2.points).toEqual(Point.ADVANTAGE)

        // point player 1
        match.pointFor(player1)
        expect(player1.points).toEqual(Point.FORTY)
        expect(player2.points).toEqual(Point.FORTY)
      })

      it('winning 2 points in a row after deuce wins a game', () => {
        Array.from({ length: 3 }, () => match.pointFor(player1))
        Array.from({ length: 5 }, () => match.pointFor(player2))

        expect(player1.points).toEqual(Point.LOVE)
        expect(player2.points).toEqual(Point.LOVE)
      })
    })
  })
})
