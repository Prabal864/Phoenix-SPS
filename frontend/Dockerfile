FROM node:20.17.0

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g serve
# Copy the entire project directory
COPY . .
# Build the application
RUN npm run build
# Expose the desired port
EXPOSE 5173

# Start the application
CMD ["serve", "-s", "dist", "-l", "5173"]
