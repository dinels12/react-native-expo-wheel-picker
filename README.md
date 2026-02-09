# react-native-expo-wheel-picker

Modern wheel picker for React Native and Expo 53+

## Installation

```bash
npm install react-native-expo-wheel-picker
# or
yarn add react-native-expo-wheel-picker
```

## Peer Dependencies

Make sure you have these installed:

```bash
npx expo install react-native-reanimated
```

## Configuration

Ensure your `babel.config.js` includes:

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"], // Must be last!
  };
};
```

## Usage

```typescript
import WheelPicker from 'react-native-expo-wheel-picker';

const items = [
  { id: 1, name: 'Item 1', value: 1 },
  { id: 2, name: 'Item 2', value: 2 },
];

function App() {
  const [value, setValue] = useState(1);

  return (
    <WheelPicker
      numberOfVisibleRows={7}
      value={value}
      onChange={(index) => setValue(index)}
      items={items}
    />
  );
}
```

## Props

| Prop                | Type     | Default  | Description                     |
| ------------------- | -------- | -------- | ------------------------------- |
| items               | Array    | required | Array of items to display       |
| value               | number   | required | Currently selected value        |
| onChange            | function | required | Callback when selection changes |
| numberOfVisibleRows | number   | 5        | Number of visible rows          |

## Requirements

- Expo SDK 53+
- React Native 0.76+
- React 18+

## License

MIT
