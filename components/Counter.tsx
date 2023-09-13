import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <View>
          <Text>Count: {count}</Text>  
        	<Button onPress={increment} title='Increment' />
        	<Button onPress={decrement} title='Decrement' />
        </View>
    );
}

export default Counter;
