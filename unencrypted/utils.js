const utils = {
    dialogue(text, choice) {
        messages = text.split('\n').map(s => s.trim());
        return [
            ...messages,
            choice
        ];
    },
    end(text) {
        return utils.dialogue(text, { 'Try Again?': 'start', 'Exit': 'exit' });
    }
};

module.exports = utils;