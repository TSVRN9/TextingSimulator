const { dialogue, end } = require("./utils");

/**
 * Export to allow encrypt.js to access
 */
module.exports = {
    /**
     * Allows for per file password/id, used as the key for encrypting data
     */
    password: 'demo',
    /**
     * The client always looks for the start property first
     */
    start: [
        'Welcome to the TextingSimulator', // any amount of dialogue
        'What do you think?',
        { // choice
            'It\'s cool': 'cool',
            'It sucks': 'sucks',
        }
    ],
    cool: dialogue( // helper method
        'Woohoo!',
        'toLearn' // If there's just a string for the last index, it automatically chooses it as the next name to go to
    ),
    sucks: dialogue(
        'Sorry to hear that',
        'toLearn'
    ),
    toLearn: dialogue( // dialogue splits newlines for longer strings
        `Well, if you see
        It can adapt to messages that are long, and taking a longer period of time to write long, verbose, lengthy, messages
        Short text takes less time`,
        {
            'Inch resting': 'interesting',
            'Boring': 'boring',
        }
    ),
    interesting: dialogue(
        "I'm glad someone appreciates it...",
        'simpletree'
    ),
    boring: dialogue(
        "Thanks for the support...",
        'simpletree'
    ),
    /**
     * Under the hood, end() adds the choices { 'Try Again?': 'start', 'Exit': 'exit' }
     * 'exit' is a sentinal value to reprompt for a password
     */
    simpletree: end(
        `Unfortunately, the texting simulator has a relatively simple tree structure.
        There's no support for variables or any memory, and there probably won't be
        Unless the developer adds a couple of features.
        Anyways, I hope you enjoyed the demo!!`
    )
}