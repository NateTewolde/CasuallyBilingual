# Casually Bilingual

Casually Bilingual is a Chrome extension that allows users to casually learn a new language while browsing the web. It translates a percentage of the webpage text from one language to another. The extension is customizable, allowing users to adjust the percentage of translation, text color, and background color.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Demo](#demo)

## Installation

1. Add the extension from the Chrome Web Store [here](https://chrome.google.com/webstore/detail/casually-bilingual/jfeabfigfjbfaidmdlcdpipdboladkie?hl=en).
2. Click on the extension icon and choose your settings.

## Usage

After installation and setting up your preferences, simply navigate to a webpage. A percentage of the webpage text, based on your settings, will be translated into your chosen language.

## Challenges and Solutions

During the development of this extension, we faced a few challenges:

- **Challenge 1**: Implementing the translation feature was initially a challenge due to the complexity of handling different languages and scripts.
  - **Solution**: We utilized the [Google Translate API](https://github.com/AidanWelch/google-translate-api) to handle the translation process, which greatly simplified the task.

- **Challenge 2**: Storing user preferences and settings across sessions was another hurdle.
  - **Solution**: We utilized Plasmo's storage API to persist user settings, ensuring a consistent user experience across browsing sessions.

## Future Enhancements

We're always looking to improve Casually Bilingual. Here are some features we're planning to add:

1. Text-to-speech functionality for users to hear the pronunciation of translated words.
2. Transliteration and text-to-speech support for Tigrinya.
3. Blacklisted Websites and Words
4. A feature for users to add words to a personal dictionary.
5. Full sentence translation capability.
6. A feature to allow users to highlight and translate specific sections of text.
7. Integration with other browsers beyond Chrome.

## Contributing

We welcome contributions to Casually Bilingual! If you have an idea for a feature or enhancement, feel free to open an issue to discuss it. Please ensure your pull requests adhere to the following guidelines:

- Write clear, concise commit messages.
- Ensure your changes do not break any existing functionality.
- Update the README with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations, and container parameters.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

Thanks to [Aidan Welch](https://github.com/AidanWelch) for his fork of the Google Translate API, which was instrumental in the development of this extension.

## Demo

coming soon...
