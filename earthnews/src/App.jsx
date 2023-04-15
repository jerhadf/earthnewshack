import React, { useEffect, useState, useMemo } from "react";
import { useMutation, usePaginatedQuery } from "../convex/_generated/react";
import { OrSignIn } from "./components/OrSignIn";
import { AddIdentity } from "./components/AddIdentity";
import { Thread } from "./components/Thread";

// below allows us to access Convex from inside the react app 
import { ConvexProvider, ConvexReactClient } from "convex/react";

// This file is the react web app - it is the client side and pretty much the entire front end! 
export default function App() {
  const { loadMore, results, status } = usePaginatedQuery("messages:list", {
    initialNumItems: 100,
  });
  const messages = useMemo(() => results.slice().reverse(), [results]);

  const [newThreadId, setNewThreadId] = useState(null);
  const createThread = useMutation("threads:add");
  useEffect(() => {
    if (newThreadId && messages.find((m) => newThreadId.equals(m.threadId)))
      setNewThreadId(null);
  }, [newThreadId, messages]);

  return (
    <main>
      <h1>Earth News</h1>
      <p>Hello! Here's Earth News</p>
      {status === "CanLoadMore" && (
        <button onClick={() => loadMore(100)}>Load More</button>
      )}
      {messages
        .reduce((threads, message) => {
          const thread = threads.find(
            (threadMessages) =>
              threadMessages[0].threadId?.toString() ===
              message.threadId?.toString()
          );
          if (thread) {
            thread.push(message);
          } else {
            threads.push([message]);
          }
          return threads;
        }, [])
        .map((messages, index, threads) => (
          <details
            key={"thread" + index}
            open={!newThreadId && index === threads.length - 1}
          >
            <summary>{messages[0]?.body?.substring(0, 100)}...</summary>
            <Thread messages={messages} threadId={messages[0].threadId} />
          </details>
        ))}
      {newThreadId && (
        <>
          <Thread messages={[]} threadId={newThreadId} />
        </>
      )}
      <OrSignIn>
        <button
          onClick={(e) => {
            e.preventDefault();
            createThread().then(setNewThreadId);
          }}
          disabled={newThreadId}
        >
          Start New Thread
        </button>
      </OrSignIn>
      <AddIdentity />
    </main>
  );
}