# react-native-expo-wheel-picker

Modern wheel picker for React Native and Expo 53+

## Installation

```bash
npm install react-native-expo-modern-wheel-picker
```

## Usage

```typescript
import WheelPicker from 'react-native-expo-modern-wheel-picker';

const items = [
  { id: 1, name: 'Item 1', value: 1 },
  { id: 2, name: 'Item 2', value: 2 },
];

function App() {
  const [value, setValue] = useState(0);

  return (
    <WheelPicker
      numberOfVisibleRows={5}
      value={value}
      onChange={setValue}
      items={items}
    />
  );
}
```

## Props

| Prop                | Type                    | Required | Default | Description                     |
| ------------------- | ----------------------- | -------- | ------- | ------------------------------- |
| items               | WheelPickerItem[]       | Yes      | -       | Array of items to display       |
| value               | number                  | Yes      | -       | Index of selected item          |
| onChange            | (index: number) => void | Yes      | -       | Callback when selection changes |
| numberOfVisibleRows | number                  | No       | 5       | Number of visible rows          |

## Requirements

- Expo SDK 53+
- React Native 0.76+
- React 18+

## License

MIT
