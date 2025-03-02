import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter } from 'lucide-react-native';

export default function DiscoverScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Discover</Text>
          <Text style={styles.headerSubtitle}>Explore urban art around you</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#64748b" />
            <Text style={styles.searchPlaceholder}>Search artworks, artists, locations...</Text>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color="#6366f1" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending Now</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
            {[1, 2, 3, 4].map((item) => (
              <TouchableOpacity key={item} style={styles.trendingItem}>
                <Image 
                  source={{ uri: `https://images.unsplash.com/photo-1551913902-c92207136625?q=80&w=500&auto=format` }} 
                  style={styles.trendingImage} 
                />
                <View style={styles.trendingOverlay}>
                  <Text style={styles.trendingTitle}>Urban Dreams</Text>
                  <Text style={styles.trendingArtist}>by Alex Rivera</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Near You</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
            {[1, 2, 3, 4].map((item) => (
              <TouchableOpacity key={item} style={styles.nearbyItem}>
                <Image 
                  source={{ uri: `https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=500&auto=format` }} 
                  style={styles.nearbyImage} 
                />
                <View style={styles.nearbyInfo}>
                  <Text style={styles.nearbyTitle}>Color Explosion</Text>
                  <Text style={styles.nearbyDistance}>0.8 miles away</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Artists</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
            {[1, 2, 3, 4].map((item) => (
              <TouchableOpacity key={item} style={styles.artistItem}>
                <Image 
                  source={{ uri: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format` }} 
                  style={styles.artistAvatar} 
                />
                <Text style={styles.artistName}>Maya Chen</Text>
                <Text style={styles.artistWorks}>24 works</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#64748b',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  searchPlaceholder: {
    marginLeft: 10,
    color: '#94a3b8',
    fontSize: 15,
  },
  filterButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
  },
  seeAllText: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '500',
  },
  horizontalList: {
    paddingLeft: 20,
  },
  trendingItem: {
    width: 280,
    height: 180,
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
  },
  trendingImage: {
    width: '100%',
    height: '100%',
  },
  trendingOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 16,
  },
  trendingTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  trendingArtist: {
    color: '#e2e8f0',
    fontSize: 14,
    marginTop: 4,
  },
  nearbyItem: {
    width: 200,
    marginRight: 16,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  nearbyImage: {
    width: '100%',
    height: 120,
  },
  nearbyInfo: {
    padding: 12,
  },
  nearbyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 4,
  },
  nearbyDistance: {
    fontSize: 14,
    color: '#64748b',
  },
  artistItem: {
    alignItems: 'center',
    marginRight: 20,
    width: 100,
  },
  artistAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  artistName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    textAlign: 'center',
  },
  artistWorks: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
});