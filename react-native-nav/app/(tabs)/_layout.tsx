import { Tabs } from 'expo-router';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="Chats" 
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#075E54',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#d0d0d0',
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="Chats"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Status"
        options={{
          title: 'Status',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="donut-large" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Calls"
        options={{
          title: 'Calls',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Communities"
        options={{
          title: 'Communities',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="group" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
