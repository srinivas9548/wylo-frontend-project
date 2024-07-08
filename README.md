WYLO Assignment

1. **Setup and Environment**: Ensure you have Node.js installed, and create a React project using Create React App.

2. **Component Creation**:
    - **PostItem Component**: This component will handle each post's display on the screen. It should include an option (like a button) to edit the post.
    - **PostsDisplay Component**: This will be the main component that displays all the posts. It should retrieve and show a list of post items.
    - **CreatePost Component**: This component will include a form for creating new posts. It should handle input fields for post details such as title and content.

3. **Form Handling**:
    - Validate form inputs before allowing users to submit.
    - Provide feedback for successful or unsuccessful post creation.

4. **API Interaction**:
    - Use `fetch` to interact with any required backend API to fetch posts if necessary.
    - Handle API responses and update the state accordingly.
    
5. **Editing Posts**:
    - Handle the logic for editing a post, which includes showing the current post's data in the form and saving the changes.