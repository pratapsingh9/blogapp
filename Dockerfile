FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src

# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Set environment variables (for demonstration purposes only)
# Note: For sensitive data, use Docker secrets or environment variables from a `.env` file instead


# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
