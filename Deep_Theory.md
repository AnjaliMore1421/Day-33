#  Day 33 – React Native Deep Theory Notes

---

## 1️. Mobile Gesture System

Mobile apps rely heavily on gestures for user interaction. Gestures are touch-based inputs like tap, swipe, drag, pinch, and long press.

###  Types of Gestures
- Tap (single press)
- Long Press
- Swipe (left/right/up/down)
- Pan (dragging)
- Pinch (zoom in/out)

###  How React Native Handles Gestures
- Uses **Gesture Responder System**
- Detects touch start → move → release
- Decides which component should respond

###  Libraries for Gestures
- `react-native-gesture-handler` (recommended)
- Provides smooth, native-like gesture handling

###  Key Components
- `Swipeable` → swipe actions
- `PanGestureHandler` → drag
- `TapGestureHandler` → tap

---

## 2️. TouchableOpacity vs Pressable vs GestureHandler

###  TouchableOpacity
- Basic button component
- Adds opacity effect when pressed
- Easy to use

```js
<TouchableOpacity onPress={handleClick}>
  <Text>Click</Text>
</TouchableOpacity>

 Simple
 Limited control

🔹 Pressable
Modern replacement of Touchable components
Provides more control over press states
<Pressable onPress={handleClick}>
  {({ pressed }) => (
    <Text style={{ opacity: pressed ? 0.5 : 1 }}>
      Click
    </Text>
  )}
</Pressable>

✔ More flexible
✔ Supports hover, focus, press states

🔹 Gesture Handler
Advanced gesture system
Better performance than default touch system
import { Swipeable } from 'react-native-gesture-handler';

✔ Smooth animations
✔ Native performance
✔ Used for swipe, drag, etc.


3️. ScrollView vs FlatList (Performance)
🔹 ScrollView
Renders ALL items at once
<ScrollView>
  {items.map(item => <Text>{item}</Text>)}
</ScrollView>

 Good for small lists
 Poor performance for large data

🔹 FlatList
Renders only visible items (virtualization)
<FlatList
  data={data}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>

✔ High performance
✔ Lazy loading
✔ Memory efficient

 Key Difference
Feature	                      ScrollView	                    FlatList
Rendering	                    All items	                   Visible items only
Performance                   	Low                         	High
Use case	                     Small data	                 Large data



4️. Rendering Large Lists Efficiently

Handling large data efficiently is important for performance.

🔹 Techniques
1)Use FlatList
Avoid ScrollView for large lists
2)KeyExtractor
keyExtractor={(item) => item.id}
3) Pagination (Infinite Scroll)
onEndReached={loadMore}
4) Pull-to-refresh
<RefreshControl refreshing={loading} onRefresh={reload} />
5) Avoid inline functions
Improves performance
6) Use memoization
React.memo

useCallback
🔹 FlatList Optimization Props
initialNumToRender
maxToRenderPerBatch
windowSize
removeClippedSubviews



5️. Image Caching & Performance in React Native

Images can slow down apps if not optimized.

🔹 Problems
Large images = slow loading
Re-rendering images = performance drop

🔹 Solutions
1) Use optimized image size
Avoid large resolution images
2) Use caching libraries
react-native-fast-image
npm install react-native-fast-image
3) Lazy loading
Load images only when needed
4) Use CDN (Cloudinary, AWS)
