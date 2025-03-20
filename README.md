# Dora for Devs (dora.jblume.dev)

For the implementation, my primary goal was to get the use case running as simply as possible and then iterate from there. Thus, I prioritized leveraging existing components instead of developing too much from scratch. It's always satisfying when you piece things together, and they just work seamlessly.

![Architecture of the DORA for Devs Chatbot](./architecture.jpg)

### Frontend with ChatGPT Minimal

Starting with the user interface: I wanted something similar to ChatGPT that could stream LLM responses directly via the ChatGPT Completion API, but where I could specify my own Completion API endpoint (to add context via my own wrapper). That's when I discovered the [ChatGPT Minimal](https://github.com/blrchen/chatgpt-minimal) project, which served as a perfect base.

I customized the UI slightly to better fit my use case, but even without customization, you can just use the provided Docker image and adjust the Completion API URL. A fantastic option for quickly deploying a custom chatbot, and one I'll definitely use again in future projects.

### Backend as Completion API Wrapper

I implemented a straightforward Go server that:
1. Receives incoming Completion API requests
2. Extracts the user's current prompt
3. Converts the prompt into an embedding using Langchain and retrieves relevant documents from the vector database
4. Sends the user prompt along with the retrieved documents as context to the Completion API
5. Streams the Completion API's response back to the frontend

As always, it's delightful to see how effortlessly you can implement wrappers like these in Go—especially thanks to features like streaming the response body directly using `io.Copy` and preserving the streaming functionality.

### Pinecone as a Vector Database

Pinecone is a SaaS vector database I encountered during a RAG tutorial. It does the job, is free for my purposes, and that's really all I needed. No complicated setups—just load documents into the database using LangChain and start querying right away.

### Langchain for LLM Communication

Speaking of Langchain—I was thrilled to find a Go implementation because I wanted to write my wrapper server in Go. Langchain provides a toolkit for developing AI applications and connecting various LLM components. In this project, it's mainly used for its straightforward interfaces and implementations to communicate with the vector database. Here's the link to the Langchain project: [Langchain](https://github.com/tmc/langchaingo)

### ChatGPT Completion API

For this use case, I didn't want to host my own model. Instead, I simply used the ChatGPT Completion API. I wrote a wrapper to forward requests to the Completion API and return responses directly to the user.

## Evaluation of the RAG Approach

The evaluation of the performance of the RAG approach is still ongoing. I'm currently collecting feedback from users and monitoring the system's performance. The goal is to understand how well the system can answer specific questions and how often it fails to provide a useful response.

A few things I’ve learned so far:
- Obvious, but the harsh truth: The quality of answers strongly depends on the quality of the documentation. If the documentation is incomplete or unclear, even the best chatbot won’t provide good answers. For example, in the case of DORA, the documentation is often very abstract, making it challenging to deliver concrete answers to developer questions.
- Nevertheless, the RAG approach is partly very effective, as it places the questions within the context of the DORA documentation, providing an overview of what’s essential for DORA compliance and my specific use case.
- Currently, I’ve only used the DORA specification itself as documentation. It would be interesting to see how the quality of responses improves when adding additional DORA-related content.
- Another fascinating observation was how significantly the quality of answers depends on the system prompt provided at the start of each conversation. It’s intriguing to see again how AI/LLM optimization often feels quite human and intuitive because it closely mirrors natural language and therefore natural interactions.