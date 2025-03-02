import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ViewStyle, 
  TextStyle, 
  ActivityIndicator 
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
  icon
}: ButtonProps) {
  const getButtonStyle = () => {
    let buttonStyle: ViewStyle = { ...styles.button };
    
    // Variant styles
    if (variant === 'primary') {
      buttonStyle = { ...buttonStyle, ...styles.primaryButton };
    } else if (variant === 'secondary') {
      buttonStyle = { ...buttonStyle, ...styles.secondaryButton };
    } else if (variant === 'outline') {
      buttonStyle = { ...buttonStyle, ...styles.outlineButton };
    }
    
    // Size styles
    if (size === 'small') {
      buttonStyle = { ...buttonStyle, ...styles.smallButton };
    } else if (size === 'large') {
      buttonStyle = { ...buttonStyle, ...styles.largeButton };
    }
    
    // Disabled style
    if (disabled) {
      buttonStyle = { ...buttonStyle, ...styles.disabledButton };
    }
    
    return buttonStyle;
  };
  
  const getTextStyle = () => {
    let textStyleObj: TextStyle = { ...styles.buttonText };
    
    // Variant text styles
    if (variant === 'primary') {
      textStyleObj = { ...textStyleObj, ...styles.primaryButtonText };
    } else if (variant === 'secondary') {
      textStyleObj = { ...textStyleObj, ...styles.secondaryButtonText };
    } else if (variant === 'outline') {
      textStyleObj = { ...textStyleObj, ...styles.outlineButtonText };
    }
    
    // Size text styles
    if (size === 'small') {
      textStyleObj = { ...textStyleObj, ...styles.smallButtonText };
    } else if (size === 'large') {
      textStyleObj = { ...textStyleObj, ...styles.largeButtonText };
    }
    
    // Disabled text style
    if (disabled) {
      textStyleObj = { ...textStyleObj, ...styles.disabledButtonText };
    }
    
    return textStyleObj;
  };
  
  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'outline' ? '#6366f1' : '#ffffff'} 
          size="small" 
        />
      ) : (
        <>
          {icon && <>{icon}</>}
          <Text style={[getTextStyle(), textStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  primaryButton: {
    backgroundColor: '#6366f1',
  },
  secondaryButton: {
    backgroundColor: '#f1f5f9',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#6366f1',
  },
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  largeButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  disabledButton: {
    backgroundColor: '#e2e8f0',
    borderColor: '#e2e8f0',
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
  },
  secondaryButtonText: {
    color: '#0f172a',
  },
  outlineButtonText: {
    color: '#6366f1',
  },
  smallButtonText: {
    fontSize: 14,
  },
  largeButtonText: {
    fontSize: 18,
  },
  disabledButtonText: {
    color: '#94a3b8',
  },
});