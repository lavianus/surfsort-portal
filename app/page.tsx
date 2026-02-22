import { redirect } from 'next/navigation'

// Rota raiz — redireciona para o domínio ou exibe 404 simples
export default function RootPage() {
  redirect('/not-found')
}
