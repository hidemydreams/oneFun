// Games
let gamesList = [
  {
    id: 1,
    name: 'Heads Up',
    rules: 'This is a game that will elevate the fun of any group gathering. One player holds the phone up to their forehead and the other players try to describe the word displayed. See how many words you can guess!',
    category: 'smartphoneGames'
  },
  {
    id: 2,
    name: 'Bloop',
    rules: 'Grab a camera phone, sit around in a close circle, and set a timer on the camera. Pass the phone around by holding it up to your face then passing it along. When the time ends, the camera will take a photo of you. See who has the funniest selfie of the night.',
    category: 'smartphoneGames'
  },
  {
    id: 3,
    name: 'Camera Hot Potato',
    rules: 'Grab a camera phone, sit around in a close circle, and set a timer on the camera. Pass the phone around by holding it up to your face then passing it along. When the time ends, the camera will take a photo of you. See who has the funniest selfie of the night.',
    category: 'smartphoneGames'
  },
  {
    id: 4,
    name: 'Pokemon Go',
    rules: 'Bring back the craze of this app and get some fresh air! Download the app and go on a search for the Pokemon in your area.',
    category: 'smartphoneGames'
  },
  {
    id: 5,
    name: 'Hot Hands',
    rules: 'See who knows pop culture best with this app. Players have three seconds to say what’s on the screen and then press the red button before everyone else.',
    category: 'smartphoneGames'
  },
  {
    id: 6,
    name: 'Psych!',
    rules: 'This smartphone app makes you give wild yet plausible guesses to questions. Potential answers (and the correct one) are displayed on the screen and players try to figure out which one is right.',
    category: 'smartphoneGames'
  },
  {
    id: 7,
    name: 'Try Not to Laugh Challenge',
    rules: 'Gather around the living room or share you screens over Zoom and play your favorite funny YouTube videos. If someone starts to laugh, they get a point against them. Keep track throughout the night and the person with the least amount is the winner.',
    category: 'smartphoneGames'
  },
  {
    id: 8,
    name: 'Wikipedia Game',
    rules: 'All you need for this game is a phone and access to the internet. Go to wikipedia.com, and have everyone go to a random page. Then have someone pick a word. Once you have your term, each person has to get to the Wikipedia page associated with that word by clicking only on links in Wikipedia. Whoever reaches the page first wins.',
    category: 'smartphoneGames'
  },
  {
    id: 9,
    name: 'Freeze Dance',
    rules:'Start up a dance party! See who has the best dance moves (or lack thereof) and make sure you freeze when the music stops. For this game, you’ll need great playlist and a phone or speakers.',
    category: 'smartphoneGames'
  },
  {
    id: 10,
    name: 'Snap',
    rules:'This card game uses a full deck of cards. Cards are dealt evenly among players, and when receiving your cards, keep them in a stacked pile face down in front of you. The dealer starts by picking the first card on top of their pile and turns it face up next to the pile and this continues down the line of players. If at any moment two upward-facing cards are the same, the first player to notice should shout “snap!” and take both cards, adding them at the bottom of their pile. When you have no face-down cards left, you’re out. The last player to have the most cards in a pile is the winner.',
    category: 'cardsGames'
  },
  {
    id: 11,
    name: 'Crazy Eights',
    rules:'This game is like Uno, but is played with a normal deck of cards. Each player gets seven cards, and the rest of the deck is put in the middle of the playing surface, placing one card face up next to the deck. Players go in a circle, adding cards to the pile that match the suit or rank of the card facing up. If a player cannot match the face-up card, they must choose cards from the face-down pile until they find a matching card. Eights are like wild cards and can be any suit, rank, or color desired. The first player to get rid of all of their cards wins.',
    category: 'cardsGames'
  },
  {
    id: 12,
    name: 'B.S.',
    rules:'This is played by using a deck of cards with the Jokers removed. The dealer should hand out cards to each player until all cards are dealt. The goal of the game is to get rid of all of your cards by going in order of card rank, but you can fib and say you have cards that you don’t. A player can then call your B.S., and if they are right, you take the whole deck of cards in the middle; if they’re wrong, they take the deck.',
    category: 'cardsGames'
  },
  {
    id: 15,
    name: 'Blindfolded Drawing Challenge',
    rules: 'Unless you are the artist of your group, drawing can already be tough. Trying to draw without even seeing what is already on the paper is even harder. Make a friend put on a blindfold and give them something to draw (a tree, house, your friend, etc) and see the hilarious results.',
    category: 'drawGames'
  },
  {
    id: 16,
    name: 'Impression Challenge',
    rules:'This challenge involves getting your friends to guess correctly. Write the name of several famous personalities onto a post-it and throw them in a hat, or if you are social distancing, just come up with a person on your own. When it is your turn, you will prepare an impression of the person you have chosen. In order to win, your friends must be able to guess who you are.',
    category: 'drawGames'
  },
  {
    id: 17,
    name: 'Single Sentence Game',
    rules:'Create an original story by contributing one sentence at a time. Start by writing one sentence at the top of a piece of paper (it can be about anything). Then, pass it on to the next player, who will have to draw a picture illustrating the sentence. Fold the paper so that the sentence is no longer showing, and then pass it on to the next person, who will have to write a sentence explaining what they think the picture is about. Keep repeating the process until the paper is filled, and then read the sentences aloud for some really good laughs.',
    category: 'noInventoryGames'
  },
  {
    id: 18,
    name: 'Jeopardy',
    rules:'Bring this television game show to your own house. For this game, create a board with categories written on it. Place Post-it notes on the board with number values written on top and questions written on the back. Players from a team will pick a value under a category to answer the question with it. If answered correctly, the team gets that number of points; if answered incorrectly, the team loses that amount of points. Play until the entire board is answered.',
    category: 'drawGames'
  },
  {
    id: 19,
    name: 'Mark Simpson',
    rules:'To play this game, you’ll start by picking a TV or movie character from a bowl. Then, from memory, the player will draw what they think the character looks like on a piece of paper for everyone to guess who it is. See who’s a good artist and who knows their characters best.',
    category: 'drawGames'
  },
  {
    id: 20,
    name: 'Who Am I?',
    rules:'Similar to Heads Up, one player will choose a famous or well-known person for you, write the name on a Post-It note, and stick it to your forehead. The players will give you hints and it’s your job to guess who it is.',
    category: 'drawGames'
  },
  {
    id: 21,
    name: 'Newlywed Game',
    rules:'This game isn’t just for couples—any group of friends can play. See how well you know your best friend, and sit back to back with each other while answering a list of questions that are being read off to you on a slip of paper. Whoever knew the most wins.',
    category: 'drawGames'
  },
  {
    id: 22,
    name: 'Tic-Tac-Toe',
    rules:
    'If you’re really bored, set up a tic-tac-toe tournament and see who’s the most strategic of the group. All you need is paper and enough pens for each person.',
    category: 'drawGames'
  },
  {
    id: 23,
    name: 'Pictionary',
    rules:'This is the same concept as charades, but instead of acting out, you draw it. All you need is paper and writing utensils (and a timer if you want to get competitive).',
    category: 'drawGames'
  },
  {
    id: 24,
    name: 'Charades',
    rules:'Separate your group into two teams. Write down things or people on slips of paper and add them into a bowl. A player from team one will go up and choose a slip of paper from the bowl and act out that word to the group without talking or mouthing words. If the team successfully guesses, they get a point. Take turns and see which team wins.',
    category: 'drawGames'
  },
  {
    id: 25,
    name: 'Tickle Challenge',
    rules:'See who can handle being tickled for the longest.',
    category: 'noInventoryGames'
  },
  {
    id: 26,
    name: 'Gobbledygook',
    rules:'This challenge is played by giving your friend a task to complete in seven seconds. The friend who completes the most tasks correctly in seven seconds wins the challenge!',
    category: 'noInventoryGames'
  },
  {
    id: 27,
    name: 'Seven Second Challenge',
    rules:'Create a circle of friends and put someone in the middle. This person says a rule like, “cross the middle if you love shopping” and everyone who does scrambles to replace a spot in the circle. If you’re left in the middle, you have to be the next person to call out a rule.',
    category: 'noInventoryGames'
  },
  {
    id: 28,
    name: 'Mail Call',
    rules: 'Create a circle of friends and put someone in the middle. This person says a rule like, “cross the middle if you love shopping” and everyone who does scrambles to replace a spot in the circle. If you’re left in the middle, you have to be the next person to call out a rule.',
    category: 'noInventoryGames'
  },
  {
    id: 29,
    name: 'Telephone',
    rules:'To play this, one person starts out by telling a sentence to the person next to them. Pass the message down an the last person must say what they were told out loud. See how distorted the original sentence gets.',
    category: 'noInventoryGames'
  },
  {
    id: 30,
    name: 'Never Have I Ever',
    rules:'Get a group of friends together and learn about their past. Start out by holding up five or ten fingers. Players go around the circle saying things they’ve never done and if a player has done something, they have to put a finger down.',
    category: 'noInventoryGames'
  },
  {
    id: 31,
    name: 'Would You Rather?',
    rules:'Find out your friends preferences with this fun questions game. Ask a friend or group a round of questions, such as “Would you rather go on a tropical vacation or a trip to the mountains?” Don’t be afraid to get creative!',
    category: 'noInventoryGames'
  },
  {
    id: 32,
    name: 'Heads-Up, Seven-Up',
    rules:'This game will definitely bring you back to elementary school. Players put their heads down and keep their thumbs up. Seven “choosers” go around the room and press one players thumb down. When ready, the “choosers” say, “heads up seven up” and players guess who pressed their thumb down. If correct, the player takes the “choosers” spot.',
    category: 'noInventoryGames'
  },
  {
    id: 33,
    name:  '20 Questions',
    rules:'Grab a friend or two and learn more about each other. Take turns asking each other a list of 20 questions, being truthful for all of them.',
    category: 'noInventoryGames'
  }
]
// Variables--------------------

let generateBtn = document.querySelector('.game__generate-btn');

let gameName = document.querySelector('.game__name');
let gameRules = document.querySelector('.game__rules');
let resultGame = document.querySelector('.game');

let selectGame = document.querySelector('.select')

selectGame.addEventListener('change', (e) => {
  //setting to null after change option
  gameName.textContent = '';
  gameRules.textContent = '';

  let target = e.currentTarget.value;

  let choosenType = gamesList.filter((game) => {
    if (game.category === target) {
      return game
    }
    if (target === 'all') {
      return gamesList
    }
  })

  // Generate Btn----------------------------
  generateBtn.addEventListener('click', () => {
    let randomGame = randomInt(choosenType.length);
    gameName.textContent = choosenType[randomGame].name
    gameRules.textContent = choosenType[randomGame].rules
  })
})

function allItems() {
  // Generate Btn----------------------------
  generateBtn.addEventListener('click', () => {
    let randomGame = randomInt(gamesList.length);
    gameName.textContent = gamesList[randomGame].name
    gameRules.textContent = gamesList[randomGame].rules
  })
}

allItems()














// Random Integer
function randomInt(length) {
  let randomInt = Math.floor(Math.random() * length);
  return randomInt
}

console.log(randomInt(10))