# PROJECT D — React Native Mobile App

> **Contact List** mobile application built with React Native + Expo.
> Connects to any backend from Projects A, B, or C.

---

## Stack

| Layer | Technology |
|---|---|
| **Framework** | React Native + Expo (managed workflow) |
| **Navigation** | React Navigation (stack + tabs) |
| **Data Fetching** | Axios + TanStack React Query |
| **Storage** | AsyncStorage / expo-secure-store |
| **Language** | TypeScript |
| **Styling** | StyleSheet API + NativeWind (optional) |

---

## What This Project Covers

- Expo managed workflow (setup, dev client, build)
- Core RN components: View, Text, FlatList, TextInput, TouchableOpacity, Image
- React Navigation: Stack Navigator, Tab Navigator, passing params
- Platform-specific code (`Platform.OS`, `.ios.tsx` / `.android.tsx`)
- Expo modules (expo-contacts, expo-image-picker for contact avatars)
- AsyncStorage for offline caching
- expo-secure-store for auth tokens
- Pull-to-refresh, infinite scroll
- Connecting to REST API (same backend as web projects)
- EAS Build basics (building for iOS/Android)

---

## MVP Features

1. **Contact list** — FlatList with search, pull-to-refresh
2. **Contact detail** — full info screen
3. **Add / Edit contact** — form with TextInput fields
4. **Delete contact** — swipe-to-delete or long-press menu
5. **Favourite toggle** — star icon
6. **Auth** — login screen, secure token storage
7. **Tab navigation** — Contacts tab + Settings tab

---

## Folder Structure

```
project-d-react-native/
├── app/
│   ├── _layout.tsx                ← Root layout (navigation)
│   ├── (tabs)/
│   │   ├── index.tsx              ← Contacts list (home tab)
│   │   ├── _layout.tsx            ← Tab navigator config
│   │   └── settings.tsx           ← Settings tab
│   ├── contact/
│   │   ├── [id].tsx               ← Contact detail screen
│   │   └── form.tsx               ← Add/edit contact screen
│   └── login.tsx                  ← Login screen
├── components/
│   ├── ContactCard.tsx            ← List item component
│   ├── ContactForm.tsx            ← Reusable form
│   └── SearchInput.tsx            ← Search bar
├── services/
│   └── api.ts                     ← Axios client to backend
├── hooks/
│   ├── useContacts.ts             ← React Query hooks
│   └── useAuth.ts                 ← Auth logic
├── app.json                       ← Expo config
├── package.json
└── README.md
```

---

## Task List

### Phase 1 — Setup
- [ ] Create Expo project with TypeScript template
- [ ] Configure app.json (name, icon, splash)
- [ ] Install React Navigation (stack + tabs)
- [ ] Set up Tab Navigator with Contacts and Settings tabs

### Phase 2 — Screens
- [ ] Build Contact List screen (FlatList, search, pull-to-refresh)
- [ ] Build Contact Detail screen (read-only view)
- [ ] Build Contact Form screen (create + edit mode)
- [ ] Build Login screen

### Phase 3 — API Integration
- [ ] Set up Axios client pointing to backend (Project A or B)
- [ ] Create React Query hooks for contacts CRUD
- [ ] Implement auth flow (login → store token → attach to requests)
- [ ] Store JWT in expo-secure-store

### Phase 4 — Polish
- [ ] Add loading states and error handling
- [ ] Implement swipe-to-delete (react-native-gesture-handler)
- [ ] Add pull-to-refresh
- [ ] Platform-specific styling (iOS vs Android)

### Phase 5 — Native Features
- [ ] Use expo-contacts to import from phone contacts
- [ ] Use expo-image-picker for contact avatars

---

## React Native vs React Web — Key Differences

| Concept | React Web | React Native |
|---|---|---|
| **Elements** | `<div>`, `<span>`, `<input>` | `<View>`, `<Text>`, `<TextInput>` |
| **Styling** | CSS / CSS Modules | StyleSheet.create() |
| **Lists** | `array.map()` | `<FlatList>` (virtualised) |
| **Navigation** | React Router | React Navigation |
| **Click** | onClick | onPress |
| **Scrolling** | CSS overflow | `<ScrollView>`, `<FlatList>` |
| **Storage** | localStorage | AsyncStorage / SecureStore |
