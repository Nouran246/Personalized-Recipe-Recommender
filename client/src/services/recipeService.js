const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://func-api-4zrqw4pw37sga.azurewebsites.net/api';
const API_CODE = process.env.REACT_APP_API_CODE || 'fNcL49D6zIS2YtsCZcuuAleb7vpW6sSqjo8z2FmE2lxCAzFu7bFA_A==';

export const recipeService = {
    async getRecipeRecommendation(data) {
        try {
            console.log('Making API request with data:', data);

            const response = await fetch(`${API_BASE_URL}/ask?code=${API_CODE}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify(data)
            });

            console.log('Response status:', response.status);
            const responseText = await response.text();
            console.log('Response body:', responseText);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}, message: ${responseText}`);
            }

            try {
                // Try to parse as JSON first
                return JSON.parse(responseText);
            } catch {
                // If not JSON, return as text
                return responseText;
            }
        } catch (error) {
            console.error('Detailed API Error:', {
                message: error.message,
                data: data,
                url: `${API_BASE_URL}/ask`,
                stack: error.stack
            });
            throw new Error('Failed to get recipe recommendation. Please try again.');
        }
    }
};