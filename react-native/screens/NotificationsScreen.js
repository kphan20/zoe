import React from 'react';
import {View, Text} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

function NotificationsScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text>Notifications!</Text>
      </View>
    </SafeAreaView>
  );
}

export default NotificationsScreen;