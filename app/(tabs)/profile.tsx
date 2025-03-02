import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, Grid2x2 as Grid, Bookmark, Award, CreditCard as Edit2 } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity>
            <Settings size={24} color="#0f172a" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.profileHeader}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format' }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editProfileButton}>
              <Edit2 size={16} color="#ffffff" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.profileName}>Maya Chen</Text>
          <Text style={styles.profileBio}>Digital artist exploring the intersection of urban spaces and augmented reality.</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Artworks</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1.2k</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>384</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Grid size={20} color="#6366f1" />
            <Text style={[styles.tabText, styles.activeTabText]}>Artworks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Bookmark size={20} color="#64748b" />
            <Text style={styles.tabText}>Saved</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Award size={20} color="#64748b" />
            <Text style={styles.tabText}>Achievements</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.galleryContainer}>
          <View style={styles.galleryRow}>
            <TouchableOpacity style={styles.galleryItem}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1551913902-c92207136625?q=80&w=500&auto=format' }}
                style={styles.galleryImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.galleryItem}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1547619292-8816ee7cdd50?q=80&w=500&auto=format' }}
                style={styles.galleryImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.galleryRow}>
            <TouchableOpacity style={styles.galleryItem}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=500&auto=format' }}
                style={styles.galleryImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.galleryItem}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1561059488-916d69792237?q=80&w=500&auto=format' }}
                style={styles.galleryImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.galleryRow}>
            <TouchableOpacity style={styles.galleryItem}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1551512248-03a38ac252af?q=80&w=500&auto=format' }}
                style={styles.galleryImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.galleryItem}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=500&auto=format' }}
                style={styles.galleryImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profileHeader: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  editProfileButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#6366f1',
    borderRadius: 20,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },
  profileBio: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  statDivider: {
    width: 1,
    height: '80%',
    backgroundColor: '#e2e8f0',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 24,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#eff6ff',
  },
  tabText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  activeTabText: {
    color: '#6366f1',
  },
  galleryContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  galleryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  galleryItem: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#e2e8f0',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
  },
});