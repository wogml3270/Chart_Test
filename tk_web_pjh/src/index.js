import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const container = document.getElementById('root')
const root = createRoot(container)
const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
      },
    },
  });
  
root.render(
    <QueryClientProvider client={queryClient}>
       <App />
    </QueryClientProvider>
)