## 👋  Summary

The goal is to create a "Merchants" screen for an admin portal. The purpose of this screen is to allow admins to view and manipulate a list of merchants. An admin should be able to:

1. View the list of merchants
2. Navigate the list of merchants (pagination)
3. Select page size (pagination, 20-50-100)
4. Search the list of merchants
5. Have access to merchant actions (open, view stores, delete)

### 🛠️  Tech stack

- TypeScript
- React
- Emotion.js
- Redux-Toolkit

### ⚠️  Limitations

1. No libraries for tables, pagination, or search should be used.

### 🔑  API

Endpoint: `https://api.staging.quickcheckoutpage.com/v1/merchants`

Options: `limit, offset, search`

Headers:

```tsx
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjQwMjEwNzcsImlhdCI6MTYyMTQyOTA3NywiaXNzIjoicWMtYXBpIiwibmJmIjoxNjIxNDI5MDc3LCJ1c2VySWQiOiIyMDg2MjZlZS03ZTY5LTQ4NmMtYTAwNC00YWRjNGY0YWUwNWEiLCJ1c2VyUm9sZSI6IiJ9.6d4IEASfBS17Z-rZdIf25PlUxsJ01N5-rHnPtrx2CBU
```

### 💅  Design

[https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FOc4m6pzGodAgWGA3dhxAXC%2FTest-Task-Merchants-List%3Fnode-id%3D173%253A122](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FOc4m6pzGodAgWGA3dhxAXC%2FTest-Task-Merchants-List%3Fnode-id%3D173%253A122)

[Test Task - Merchants List](https://www.figma.com/file/Oc4m6pzGodAgWGA3dhxAXC/Test-Task-Merchants-List?node-id=173%3A122)

### ⭐  Bonus points

1. Deploy the application to Firebase Hosting and send us a link along with the code 😎
