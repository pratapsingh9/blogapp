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
ENV GOOGLE_CLIENT_ID="320956193669-n7l8nd542op5m0jrlrrlvh00vf9peet5.apps.googleusercontent.com" \
    GOOGLE_CLIENT_SECRET="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" \
    NEXTAUTH_SECRET="pratap@admin" \
    NEXTAUTH_URL="http://localhost:3000" \
    NEXT_PUBLIC_SANITY_PROJECT_ID="nudycgit" \
    NEXT_PUBLIC_SANITY_DATASET="blogsdb"

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
