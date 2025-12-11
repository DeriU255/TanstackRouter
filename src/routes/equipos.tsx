import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/equipos')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/equipos"!</div>
}
