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
<pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>scss</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C10.8954 3.5 10 4.39543 10 5.5H14C14 4.39543 13.1046 3.5 12 3.5ZM8.53513 3.5C9.22675 2.3044 10.5194 1.5 12 1.5C13.4806 1.5 14.7733 2.3044 15.4649 3.5H17.25C18.9069 3.5 20.25 4.84315 20.25 6.5V18.5C20.25 20.1569 19.1569 21.5 17.25 21.5H6.75C5.09315 21.5 3.75 20.1569 3.75 18.5V6.5C3.75 4.84315 5.09315 3.5 6.75 3.5H8.53513ZM8 5.5H6.75C6.19772 5.5 5.75 5.94772 5.75 6.5V18.5C5.75 19.0523 6.19772 19.5 6.75 19.5H17.25C18.0523 19.5 18.25 19.0523 18.25 18.5V6.5C18.25 5.94772 17.8023 5.5 17.25 5.5H16C16 6.60457 15.1046 7.5 14 7.5H10C8.89543 7.5 8 6.60457 8 5.5Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-scss">Giga-Chat/
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
    <p>Install dependencies:</p>
    <pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm install
<span class="hljs-built_in">cd</span> client
npm install
</code></div></div></pre>
  </li>
  <li>
    <p>Start the backend server:</p>
    <pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">node server/index.js
</code></div></div></pre>
  </li>
  <li>
    <p>Start the frontend development server:</p>
    <pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash"><span class="hljs-built_in">cd</span> client
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