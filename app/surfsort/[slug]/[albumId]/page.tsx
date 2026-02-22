import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createSupabaseClient } from '@/lib/supabase'
import AlbumGrid from './AlbumGrid'

type Props = { params: { slug: string; albumId: string } }

type Album = {
  id: string
  name: string
  description: string | null
  photo_count: number
  portal_id: string
}

type Photo = {
  id: string
  storage_path: string
  file_name: string | null
  sort_order: number
}

type Portal = {
  id: string
  display_name: string
  slug: string
  status: string
}

export async function generateMetadata({ params }: Props) {
  const supabase = createSupabaseClient()
  const { data: album } = await supabase
    .schema('surfsort')
    .from('portal_albums')
    .select('name')
    .eq('id', params.albumId)
    .maybeSingle()

  if (!album) return { title: 'Álbum não encontrado' }
  return { title: `${album.name} · SurfSort Portal` }
}

export default async function AlbumPage({ params }: Props) {
  const supabase = createSupabaseClient()

  // Verifica o portal pai
  const { data: portal } = await supabase
    .schema('surfsort')
    .from('photographer_portals')
    .select('id, display_name, slug, status')
    .eq('slug', params.slug)
    .maybeSingle<Portal>()

  if (!portal || portal.status !== 'public') notFound()

  // Busca o álbum
  const { data: album } = await supabase
    .schema('surfsort')
    .from('portal_albums')
    .select('id, name, description, photo_count, portal_id')
    .eq('id', params.albumId)
    .eq('portal_id', portal.id)
    .maybeSingle<Album>()

  if (!album) notFound()

  // Busca as fotos
  const { data: photos } = await supabase
    .schema('surfsort')
    .from('portal_photos')
    .select('id, storage_path, file_name, sort_order')
    .eq('album_id', album.id)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true })
    .returns<Photo[]>()

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!

  return (
    <>
      {/* Nav */}
      <nav className="top-nav">
        <Link
          href={`/surfsort/${params.slug}`}
          className="nav-back"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          {portal.display_name}
        </Link>
        <div className="nav-logo">Surf<span>Sort</span></div>
      </nav>

      {/* Album header */}
      <header className="album-hero">
        <div className="album-hero-inner">
          <h1 className="album-hero-name">{album.name}</h1>
          <p className="album-hero-meta">
            {album.photo_count} foto{album.photo_count !== 1 ? 's' : ''}
            {album.description ? ` · ${album.description}` : ''}
          </p>
        </div>
      </header>

      {/* Photo grid com lightbox (client component) */}
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '12px 0 0' }}>
        <AlbumGrid photos={photos ?? []} supabaseUrl={supabaseUrl} />
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
