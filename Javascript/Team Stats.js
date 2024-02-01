const team = {
  _players: [
    {firstName: 'Michael', lastName: 'Bonezies', age: 6},
    {firstName: 'Lucipurr', lastName: 'Argendile', age: 10},
    {firstName: 'Maximus', lastName: 'Whiskerino', age: 4}
  ],

  _games: [
    {opponent: 'Doggers', teamPoints: 5, opponentPoints: 8},
    {opponent: 'Lizzzurds', teamPoints: 10, opponentPoints: 3},
    {opponent: 'Birb', teamPoints: 2, opponentPoints: 11}
  ],

  get players(){
    return this._players;
  },

  get games(){
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);
