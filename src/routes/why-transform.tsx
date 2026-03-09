import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/why-transform')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/why-transform"!</div>
}
