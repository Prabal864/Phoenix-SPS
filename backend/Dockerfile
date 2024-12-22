FROM node:20.17.0

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory
COPY . .

# Build the application
RUN npm run build

# Expose the desired port
EXPOSE 5000

# Start the application
CMD ["node", "dist/index.js"]
