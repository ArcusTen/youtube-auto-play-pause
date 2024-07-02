# YouTube Auto Play/Pause Chrome Extension

Automatically pauses YouTube videos when you switch tabs/windows and resumes playing when you return.

## Features

- **Auto-pause** YouTube videos when the tab is not active.
- **Auto-resume** YouTube videos when you return to the tab.
- **Simple** and **easy** to use.

## Setup Instructions

### Prerequisites

- Google Chrome browser
- Basic knowledge of using the browser's Developer Mode

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/ArcusTen/youtube-auto-play-pause.git
    cd youtube-auto-play-pause
    ```

2. **Add the Extension to Chrome**

    1. Open Chrome and navigate to `chrome://extensions/`.
    2. Enable **Developer mode** by clicking the toggle switch in the top right corner.
    3. Click on the **Load unpacked** button and select the directory where you cloned the repository (`youtube-auto-play-pause`).


### Files Description

- **manifest.json**: Configuration file for the Chrome extension.
- **background.js**: Handles tab activation and updating events.
- **content.js**: Contains the logic to pause and resume YouTube videos based on tab visibility.
- **assets**: Directory containing the icons for the extension.

## Usage

1. Once the extension is loaded, navigate to YouTube and play any video.
2. Switch to a different tab and the video will automatically pause.
3. Return to the YouTube tab and the video will automatically resume.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements.
