import { Tabs } from 'expo-router';
import React from 'react';

// import { TabBarIcon } from '@/components/navigation/icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { HistoryIcon, OrdersIcon, ProfileIcon, TabBarIcon } from '@/components/navigation/icons';
// import { ProfileIcon, TabBarIcon } from '@/components/navigation/icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            <OrdersIcon/>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            <HistoryIcon color={focused ? 'white': 'gray'}/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            <ProfileIcon/>
          ),
        }}
      />
    </Tabs>
  );
}
