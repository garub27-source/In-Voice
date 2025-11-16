// A simple list of words to censor. 
// In a real-world app, this list would be much more comprehensive and could be fetched from a server.
const profanityList: string[] = [
    'fuck',
    'shit',
    'bitch',
    'damn',
    'hell',
    'asshole',
    'cunt',
    'piss',
    'dick',
    'cock',
];

/**
 * Censors profane words in a given string.
 * Replaces matched words with '****'.
 * @param inputText The text to censor.
 * @returns The censored text.
 */
export function censorText(inputText: string): string {
    if (!inputText) return '';

    // Create a regular expression from the profanity list.
    // The \b flag ensures we match whole words only (e.g., 'ass' in 'class' won't be censored).
    // The 'gi' flags make the search global and case-insensitive.
    const regex = new RegExp(`\\b(${profanityList.join('|')})\\b`, 'gi');

    return inputText.replace(regex, '****');
}
