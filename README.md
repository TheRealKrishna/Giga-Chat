<h1>GigaChat - Chat Application</h1>
<p>Presenting my Chat Application GigaChat crafted with React, Node.js, WebSocket, and MongoDB. Engage in real-time
  conversations with friends and colleagues effortlessly. Seamlessly send messages and connect with others in a dynamic
  and responsive interface. Backed by MongoDB for efficient data management, this application ensures secure and
  seamless communication. Experience the power of instant messaging with this feature-rich chat platform.</p>
<h2>Technologies Used</h2>
<ul>
  <li>React</li>
  <li>Node.js</li>
  <li>WebSocket</li>
  <li>MongoDB</li>
</ul>
<h2>Folder Structure</h2>
<pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-scss">Giga-Chat/
│   ├── client (React frontend)
│   │   └── ...
│   ├── server (Node.js backend)
│   │   └── ...
│   └── README<span class="hljs-selector-class">.md</span>
</code></div></div></pre>
<h2>Environment Variables</h2>
<h3>For Frontend (client/.env)</h3>
<ul>
  <li><code>REACT_APP_API_URL</code>: Backend API endpoint URL.</li>
</ul>
<h3>For Backend (server/.env)</h3>
<ul>
  <li><code>MONGO_URI</code>: MongoDB connection URI.</li>
  <li><code>JWT_SECRET</code>: Secret key for JWT token generation.</li>
  <li><code>DOMAIN</code>: Frontend domain for CORS.</li>
</ul>
<h2>Setting Up</h2>
<ol>
  <li>
    <p>Clone the repository:</p>
    <pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git <span class="hljs-built_in">clone</span> https://github.com/TheRealKrishna/Giga-Chat
</code></div></div></pre>
  </li>
  <li>
    <p>Navigate to the project directory:</p>
    <pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash"><span class="hljs-built_in">cd</span> Giga-Chat
</code></div></div></pre>
  </li>
  <li>
    <p>Set up environment variables by creating a <code>.env</code> file in the <code>server</code> directory and add
      the necessary variables mentioned above.</p>
  </li>
  <li>
    <p>Set up environment variables by creating a <code>.env</code> file in the <code>client</code> directory and add
      the necessary variables mentioned above.</p>
  </li>
  <li>
    <p>Install dependencies:</p>
    <pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">cd</span> client
      npm install
<span class="hljs-built_in">cd</span> ../server
npm install
</code></div></div></pre>
  </li>
  <li>
    <p>Start the backend server:</p>
    <pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">node index.js
</code></div></div></pre>
  </li>
  <li>
    <p>Start the frontend development server:</p>
    <pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash"><span class="hljs-built_in">cd</span> ../client
npm start
</code></div></div></pre>
  </li>
  <li>
    <p>Access the application at <code>http://localhost:3000</code>.</p>
  </li>
</ol>
<h2>License</h2>
<p>This project's licensing information is not provided.</p>
<p>Feel free to reach out if you have any questions or suggestions! 😊</p>
<p>GitHub Link: <a target="_new" href="https://github.com/TheRealKrishna/Giga-Chat">GigaChat Repository</a></p>