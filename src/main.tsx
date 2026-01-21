import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

posthog.init('phc_3BWEZGRxPSCE0KYV1mOYlfkCtJKP5L99O4yVRlAB5Lq', {
  api_host: 'https://us.i.posthog.com',
  // defaults: '2025-11-30',
  person_profiles: 'always', // or 'always' to create profiles for anonymous users as well
  capture_pageview: false
  
})

const container = document.getElementById('root')

if (!container) {
  throw new Error('Root container missing in index.html')
}

createRoot(container).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
    <App />
    </PostHogProvider>
  </StrictMode>
)
