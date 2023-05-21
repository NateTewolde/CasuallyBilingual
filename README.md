# Casually Bilingual

Casually Bilingual is a Chrome extension that I developed to allow users to casually learn a new language while browsing the web. It translates a configurable percentage of the webpage text from a chosen source language to a chosen target language. The extension is customizable, allowing users to adjust the percentage of translation, text color, background color, and even enable transliteration.

## Demo

coming soon...

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Other Projects](#other-projects)

## Technologies Used

I built this project using the following technologies:

- Plasmo: A browser extension framework
- React.js with TypeScript: For building the user interface
- Styled Components: For styling the extension
- Local Storage: For storing user settings
- [Google Translate API](https://github.com/AidanWelch/google-translate-api): For translation functionality

## Installation

1. Add the extension from the Chrome Web Store [here](https://chrome.google.com/webstore/detail/casually-bilingual/jfeabfigfjbfaidmdlcdpipdboladkie?hl=en).
2. Click on the extension icon and choose your settings.

## Usage

After installation and setting up your preferences, simply navigate to a webpage. A percentage of the webpage text, based on your settings, will be translated from your chosen source language to your chosen target language.

## Challenges and Solutions

During the development of this extension, I faced a few challenges:

- **Challenge 1**: Implementing the translation feature was initially a challenge due to the complexity of handling different languages and scripts.
  - **Solution**: I utilized the Google Translate API to handle the translation process, which greatly simplified the task.

- **Challenge 2**: Storing user preferences and settings across sessions was another hurdle.
  - **Solution**: I used Plasmo's Storage API to persist user settings, ensuring a consistent user experience across browsing sessions.

## Future Enhancements

I'm always looking to improve Casually Bilingual. Here are some features I'm planning to add:

1. Text-to-speech functionality for users to hear the pronunciation of translated words.
2. Transliteration and text-to-speech support for Tigrinya.
3. A feature for users to add difficult words to a personal dictionary.
4. Sentence translation capability.
5. A feature to allow users to highlight and translate specific sections of text.
6. Integration with other browsers beyond Chrome.

## Contributing

I welcome contributions to Casually Bilingual! If you have an idea for a feature or enhancement, feel free to open an issue to discuss it. Please ensure your pull requests adhere to the following guidelines:

- Write clear, concise commit messages.
- Ensure your changes do not break any existing functionality.
- Update the README with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations, and container parameters.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Other Projects

Check out my other projects on GitHub [here](https://github.com/example).
