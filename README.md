# Chatbot Flow Builder

## Description

The Chatbot Flow Builder is a React-based application that allows users to create and manage chatbot flows. The application features a drag-and-drop interface for adding and connecting text message nodes, a settings panel for editing node content, and a save button with validation to ensure flow integrity.

## Deployed Link

[Link]([https://bites-chat-bot.netlify.app/](https://dazzling-piroshki-44d0e5.netlify.app))

## Features

1. **Text Node**:

   - Our flow builder currently supports only one type of message (i.e Text Message).
   - There can be multiple Text Nodes in one flow.
   - Nodes are added to the flow by dragging and dropping a Node from the Nodes Panel.

2. **Nodes Panel**:

   - This panel houses all kind of Nodes that our Flow Builder supports.
   - Right now there is only Message Node, but weʼd be adding more types of Nodes in the future so make this section extensible 

3. **Edges**:

   - Connects two Nodes together.

4. **Source Handle**:

   - Source of a connecting edge 
   - Can only have one edge originating from a source handle

5. **Target Handle**:

   - Target of a connecting edge
   - Can have more than one edge connecting to a target handle 

6. **Settings Panel**:

   - Settings Panel will replace the Nodes Panel when a Node is selected
   - It has a text field to edit text of the selected Text Node

7. **Save Button**:

   - Button to save the flow 
   - Save button press will show an error if there are more than one Nodes and more than one Node has empty target handles 


## Technologies Used

- **React**: For building the user interface.
- **React Flow**: For managing the node-based editor.
- **JavaScript**: Used for implementation.
- **CSS/Styled Components**: For styling the application.


## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/nikhilshekar/chatbot-flow-builder.git
   cd chatbot-flow-builder
   ```

2. **Install Dependencies:**

   ```
   npm install
   ```

3. **Start the Development Server:**
   ```
   npm start
   ```
4. **Build for Production:**
   ```
   npm run build
   ```



