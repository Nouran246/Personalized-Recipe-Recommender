# Personalized Recipe Recommender

A web application that provides personalized recipe recommendations based on available ingredients, dietary preferences, and nutritional requirements.

## Features

- **Ingredient-Based Recipe Generation**: Input available ingredients to get customized recipes
- **Calorie Control**: Set maximum calorie limits for recipe recommendations
- **Serving Size Adjustment**: Easily adjust recipe portions for any number of servings
- **Interactive Chat Interface**: Follow-up questions and recipe modifications through chat
- **Dietary Preferences**: Add special requirements or preferences through notes
- **Real-time Ingredient Management**: Add and remove ingredients with a user-friendly interface

## Tech Stack

- **Frontend**: React.js
- **UI Components**: Custom Button and Chat components
- **Styling**: CSS with responsive design
- **State Management**: React Class Components with local state

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/Personalized-Recipe-Recommender.git
cd Personalized-Recipe-Recommender
```

2. Install dependencies
```bash
cd client
npm install
```

3. Start the development server
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Environment Setup

1. Create a `.env` file in the client directory by copying `.env.template`:
```bash
cp client/.env.template client/.env
```

2. Fill in your environment variables in the `.env` file:
```properties
REACT_APP_API_BASE_URL=https://func-api-4zrqw4pw37sga.azurewebsites.net/api
REACT_APP_API_CODE=your_function_code_here
```

3. Never commit the `.env` file to version control

## Usage

1. **Enter Ingredients**
   - Type ingredients in the input field
   - Click "Add" or press Enter to add to the list
   - Click 'x' to remove ingredients

2. **Set Preferences**
   - Use the slider to set maximum calories
   - Adjust number of servings using + and - buttons
   - Add any dietary restrictions or preferences in the notes

3. **Get Recommendations**
   - Click "Get Recipes" to receive personalized recommendations
   - Use the chat interface for follow-up questions or modifications

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the React community for excellent documentation and resources

project planning: https://github.com/users/Nouran246/projects/8
