import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { createSupabaseClient, getPhotoUrl } from '@/lib/supabase'

type Props = { params: { slug: string } }

type Portal = {
  id: string
  display_name: string
  slug: string
  status: string
}

type Album = {
  id: string
  name: string
  description: string | null
  cover_storage_path: string | null
  photo_count: number
  created_at: string
}

function getInitials(name: string): string {
  return name
    .trim()
    .split(' ')
    .filter(Boolean)
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export async function generateMetadata({ params }: Props) {
  const supabase = createSupabaseClient()
  const { data: portal } = await supabase
    .schema('surfsort')
    .from('photographer_portals')
    .select('display_name')
    .eq('slug', params.slug)
    .eq('status', 'public')
    .maybeSingle()

  if (!portal) return { title: 'Portal não encontrado' }

  return {
    title: `${portal.display_name} · SurfSort Portal`,
    description: `Veja as fotos de ${portal.display_name} no SurfSort Portal.`,
  }
}

export default async function PortalPage({ params }: Props) {
  const supabase = createSupabaseClient()

  const { data: portal } = await supabase
    .schema('surfsort')
    .from('photographer_portals')
    .select('id, display_name, slug, status')
    .eq('slug', params.slug)
    .maybeSingle<Portal>()

  if (!portal) notFound()

  if (portal.status === 'disabled') {
    return (
      <main className="portal-offline">
        <div className="portal-offline-icon">🌊</div>
        <h1>Portal indisponível</h1>
        <p>Este portal está temporariamente desativado pelo fotógrafo.</p>
      </main>
    )
  }

  if (portal.status === 'draft') {
    return (
      <main className="portal-offline">
        <div className="portal-offline-icon">📷</div>
        <h1>Em breve</h1>
        <p>O fotógrafo ainda está preparando o portal. Volte em breve!</p>
      </main>
    )
  }

  const { data: albums } = await supabase
    .schema('surfsort')
    .from('portal_albums')
    .select('id, name, description, cover_storage_path, photo_count, created_at')
    .eq('portal_id', portal.id)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false })
    .returns<Album[]>()

  const initials = getInitials(portal.display_name)

  return (
    <>
      {/* Nav */}
      <nav className="top-nav">
        <div className="nav-logo">Surf<span>Sort</span></div>
        <div className="portal-badge">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          PORTAL
        </div>
      </nav>

      {/* Hero */}
      <header className="portal-hero">
        <div className="portal-avatar">{initials}</div>
        <h1 className="portal-name">{portal.display_name}</h1>
        <p className="portal-sub">Surf Photography</p>
      </header>

      {/* Albums */}
      <main className="section-wrap">
        <div className="section-header">
          <span className="section-title">ÁLBUNS</span>
          {albums && albums.length > 0 && (
            <span className="section-count">{albums.length}</span>
          )}
        </div>

        {!albums || albums.length === 0 ? (
          <div className="empty-state">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
            <p>Nenhum álbum publicado ainda.</p>
          </div>
        ) : (
          <div className="album-grid">
            {albums.map(album => (
              <Link
                key={album.id}
                href={`/surf-sort/${params.slug}/${album.id}`}
                className="album-card"
              >
                <div className="album-cover">
                  {album.cover_storage_path ? (
                    <Image
                      src={getPhotoUrl(album.cover_storage_path)}
                      alt={album.name}
                      fill
                      sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="album-cover-placeholder">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="album-info">
                  <div className="album-info-name">{album.name}</div>
                  <div className="album-info-meta">
                    <span>{album.photo_count} foto{album.photo_count !== 1 ? 's' : ''}</span>
                    <span className="album-info-dot" />
                    <span>{formatDate(album.created_at)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="portal-footer">
        <div className="portal-footer-inner">
          Powered by&nbsp;<span>SurfSort</span>
        </div>
      </footer>
    </>
  )
}
