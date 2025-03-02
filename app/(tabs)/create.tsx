import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, Layers, Type, Image as ImageIcon, Shapes, Sparkles, Share2 } from 'lucide-react-native';

export default function CreateScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Create</Text>
        <Text style={styles.headerSubtitle}>Express yourself through AR</Text>
      </View>

      <View style={styles.canvasContainer}>
        <View style={styles.canvas}>
          <Text style={styles.canvasPlaceholder}>Tap to start creating</Text>
        </View>
      </View>

      <View style={styles.toolbarContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.toolbar}>
          <TouchableOpacity style={styles.toolButton}>
            <Camera size={24} color="#0f172a" />
            <Text style={styles.toolText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <Layers size={24} color="#0f172a" />
            <Text style={styles.toolText}>Layers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <Type size={24} color="#0f172a" />
            <Text style={styles.toolText}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <ImageIcon size={24} color="#0f172a" />
            <Text style={styles.toolText}>Images</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <Shapes size={24} color="#0f172a" />
            <Text style={styles.toolText}>Shapes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <Sparkles size={24} color="#0f172a" />
            <Text style={styles.toolText}>Effects</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Save Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryActionButton}>
          <Share2 size={20} color="#ffffff" style={styles.actionButtonIcon} />
          <Text style={styles.primaryActionButtonText}>Publish</Text>
        </TouchableOpacity>
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
  canvasContainer: {
    flex: 1,
    margin: 20,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvas: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvasPlaceholder: {
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
  },
  toolbarContainer: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingVertical: 12,
  },
  toolbar: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toolButton: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  toolText: {
    marginTop: 4,
    fontSize: 12,
    color: '#0f172a',
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#ffffff',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0f172a',
  },
  primaryActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#6366f1',
  },
  actionButtonIcon: {
    marginRight: 8,
  },
  primaryActionButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
});