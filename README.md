## Example App

To run the example app:

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/react-native-expo-wheel-picker.git
cd react-native-expo-wheel-picker

# Install dependencies and build
npm install
npm run prepare

# Install example dependencies
npm run example:install

# Run example
npm run example

# Or run on specific platform
npm run example:ios      # iOS Simulator
npm run example:android  # Android Emulator
npm run example:web      # Web Browser
```

## Development

When developing the library, changes to `src/` will automatically reflect in the example app thanks to the linked package.

```bash
# Watch for changes and rebuild
npm run build -- --watch

# In another terminal, run example
npm run example
```
