import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, MessageSquare, User, Star, Bell } from 'lucide-react-native';

const NOTIFICATIONS = [
  {
    id: '1',
    type: 'like',
    user: 'Sarah Johnson',
    content: 'liked your artwork "Urban Jungle"',
    time: '2 minutes ago',
    read: false,
  },
  {
    id: '2',
    type: 'comment',
    user: 'Mike Chen',
    content: 'commented on your artwork "Neon Dreams"',
    time: '1 hour ago',
    read: false,
  },
  {
    id: '3',
    type: 'follow',
    user: 'Alex Rivera',
    content: 'started following you',
    time: '3 hours ago',
    read: true,
  },
  {
    id: '4',
    type: 'feature',
    user: 'Urban Art Collective',
    content: 'featured your artwork in "Weekly Highlights"',
    time: '1 day ago',
    read: true,
  },
  {
    id: '5',
    type: 'like',
    user: 'Jamie Lee',
    content: 'liked your artwork "Digital Waves"',
    time: '2 days ago',
    read: true,
  },
  {
    id: '6',
    type: 'comment',
    user: 'Taylor Wong',
    content: 'replied to your comment',
    time: '3 days ago',
    read: true,
  },
];

const NotificationItem = ({ item }) => {
  const getIcon = () => {
    switch (item.type) {
      case 'like':
        return <Heart size={20} color="#ef4444" />;
      case 'comment':
        return <MessageSquare size={20} color="#6366f1" />;
      case 'follow':
        return <User size={20} color="#10b981" />;
      case 'feature':
        return <Star size={20} color="#f59e0b" />;
      default:
        return <Bell size={20} color="#6366f1" />;
    }
  };

  return (
    <TouchableOpacity 
      style={[
        styles.notificationItem, 
        !item.read && styles.unreadNotification
      ]}
    >
      <View style={styles.iconContainer}>
        {getIcon()}
      </View>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationText}>
          <Text style={styles.username}>{item.user}</Text> {item.content}
        </Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
      {!item.read && <View style={styles.unreadIndicator} />}
    </TouchableOpacity>
  );
};

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.markAllReadText}>Mark all as read</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
  },
  markAllReadText: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '500',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  unreadNotification: {
    backgroundColor: '#f1f5f9',
    borderColor: '#cbd5e1',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 20,
  },
  username: {
    fontWeight: '600',
    color: '#0f172a',
  },
  timeText: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
  },
  unreadIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#6366f1',
    marginLeft: 8,
  },
});