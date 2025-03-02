import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navigation, Compass, Layers, List } from 'lucide-react-native';

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <Text style={styles.headerSubtitle}>Discover art in your city</Text>
      </View>

      <View style={styles.mapContainer}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?q=80&w=1000&auto=format' }}
          style={styles.mapImage}
        />
        
        <View style={styles.mapOverlay}>
          <View style={styles.mapControls}>
            <TouchableOpacity style={styles.mapControlButton}>
              <Navigation size={20} color="#0f172a" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mapControlButton}>
              <Compass size={20} color="#0f172a" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mapControlButton}>
              <Layers size={20} color="#0f172a" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Map Markers */}
        <View style={[styles.mapMarker, { top: '30%', left: '40%' }]}>
          <View style={styles.markerDot} />
        </View>
        <View style={[styles.mapMarker, { top: '50%', left: '60%' }]}>
          <View style={styles.markerDot} />
        </View>
        <View style={[styles.mapMarker, { top: '65%', left: '25%' }]}>
          <View style={styles.markerDot} />
        </View>
        <View style={[styles.mapMarker, { top: '20%', left: '70%' }]}>
          <View style={[styles.markerDot, styles.markerActive]} />
        </View>
      </View>

      <View style={styles.artworkPreview}>
        <View style={styles.artworkPreviewHeader}>
          <Text style={styles.artworkPreviewTitle}>Nearby Artworks</Text>
          <TouchableOpacity style={styles.viewListButton}>
            <List size={16} color="#6366f1" />
            <Text style={styles.viewListText}>List View</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.artworkCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1547619292-8816ee7cdd50?q=80&w=500&auto=format' }}
            style={styles.artworkImage}
          />
          <View style={styles.artworkInfo}>
            <Text style={styles.artworkTitle}>Digital Dreams</Text>
            <Text style={styles.artworkArtist}>by Jamie Lee</Text>
            <Text style={styles.artworkDistance}>0.3 miles away</Text>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View in AR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  mapContainer: {
    flex: 1,
    position: 'relative',
    margin: 20,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#e2e8f0',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  mapOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapControls: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 4,
  },
  mapControlButton: {
    padding: 8,
    borderRadius: 4,
    marginVertical: 4,
  },
  mapMarker: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: -12 }, { translateY: -12 }],
  },
  markerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#6366f1',
  },
  markerActive: {
    backgroundColor: '#ef4444',
  },
  artworkPreview: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 5,
  },
  artworkPreviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  artworkPreviewTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
  },
  viewListButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewListText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '500',
  },
  artworkCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  artworkImage: {
    width: 120,
    height: 120,
  },
  artworkInfo: {
    flex: 1,
    padding: 16,
  },
  artworkTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 4,
  },
  artworkArtist: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  artworkDistance: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 12,
  },
  viewButton: {
    backgroundColor: '#6366f1',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  viewButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
});