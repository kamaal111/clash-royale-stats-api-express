const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlayerSchema = Schema({
  updatedAt: { type: Date, default: Date.now },

  id: String,
  name: String,
  expLevel: Number,
  trophies: Number,
  bestTrophies: Number,
  wins: Number,
  losses: Number,
  battleCount: Number,
  threeCrownWins: Number,
  challengeCardsWon: { type: Number, default: undefined },
  challengeMaxWins: { type: Number, default: undefined },
  tournamentCardsWon: { type: Number, default: undefined },
  tournamentBattleCount: { type: Number, default: undefined },
  role: { type: String, default: undefined },
  donations: Number,
  donationsReceived: Number,
  totalDonations: Number,
  warDayWins: { type: Number, default: undefined },
  clanCardsCollected: { type: Number, default: undefined },

  clan: {
    tag: String,
    name: String,
    badgeId: Number
  },

  arena: { id: Number, name: String },

  leagueStatistics: {
    currentSeason: {
      trophies: { type: Number, default: 0 },
      bestTrophies: { type: Number, default: 0 }
    },
    previousSeason: {
      id: { type: String, default: "" },
      trophies: { type: Number, default: 0 },
      bestTrophies: { type: Number, default: 0 }
    },
    bestSeason: {
      id: { type: String, default: "" },
      trophies: { type: Number, default: 0 }
    }
  },

  currentFavouriteCard: {
    name: String,
    maxLevel: Number,
    iconUrls: {
      medium: String
    }
  }
});

const Player = mongoose.model("playerData", PlayerSchema);

module.exports = Player;
