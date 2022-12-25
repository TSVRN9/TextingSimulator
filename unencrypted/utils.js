const utils = {
    /**
     * @param {string} text 
     * @param {string | Object<string, string>} choice 
     * @returns Array
     */
    dialogue(text, choice) {
        messages = text.split('\n').map(s => s.trim());
        return [
            ...messages,
            choice
        ];
    },
    /**
     * @param {string} text 
     * @returns Array
     */
    end(text) {
        return utils.dialogue(text, { "Let's try again": 'start', "Whatever, I'm out": 'exit' });
    }
};

module.exports = utils;