### Running the Project

## Backend Setup:

1. Navigate to the backend directory.
2. Adjust the MongoDB URI in your .env.
3. Install dependencies with npm install.
4. Run the backend server with node app.js.

## Frontend Setup:

1. Navigate to the frontend directory.
2. Install dependencies with npm install.
3. Run the frontend with npm start.

## MongoDB collection

For this file uploader application, you’ll need two main collections in MongoDB:

1. users Collection: To store user registration details.
2. files Collection: To store information about uploaded files and folders, including folder structure and relationships.

# users Collection

```json
{
    "_id": ObjectId,
    "name": String,          // User's full name
    "email": String,         // User's unique email address
    "password": String       // Hashed password
}
```

# files Collection

```json
{
    "_id": ObjectId,
    "name": String,               // Name of the file or folder
    "type": String,               // "file" or "folder"
    "parent": ObjectId,           // ID of the parent folder (null if in the root directory)
    "path": String,               // File path for easy access
    "owner": ObjectId             // Reference to the user who owns this file/folder
}
```