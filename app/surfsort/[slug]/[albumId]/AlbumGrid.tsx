'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

type Photo = {
  id: string
  storage_path: string
  file_name: string | null
  sort_order: number
}

type Props = {
  photos: Photo[]
  supabaseUrl: string
}

export default function AlbumGrid({ photos, supabaseUrl }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const getPhotoUrl = (path: string) =>
    `${supabaseUrl}/storage/v1/object/public/surfsort-portal/${path}`

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const prevPhoto = useCallback(() => {
    setLightboxIndex(i =>
      i !== null ? (i - 1 + photos.length) % photos.length : null
    )
  }, [photos.length])

  const nextPhoto = useCallback(() => {
    setLightboxIndex(i =>
      i !== null ? (i + 1) % photos.length : null
    )
  }, [photos.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevPhoto()
      if (e.key === 'ArrowRight') nextPhoto()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, closeLightbox, prevPhoto, nextPhoto])

  // Bloqueia scroll do body quando lightbox está aberto
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  if (photos.length === 0) {
    return (
      <div className="empty-state">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        <p>Nenhuma foto publicada neste álbum ainda.</p>
      </div>
    )
  }

  return (
    <>
      <div className="photo-grid">
        {photos.map((photo, idx) => (
          <button
            key={photo.id}
            className="photo-item"
            onClick={() => setLightboxIndex(idx)}
            aria-label={`Ver foto ${idx + 1}`}
          >
            <Image
              src={getPhotoUrl(photo.storage_path)}
              alt={photo.file_name || `Foto ${idx + 1}`}
              fill
              sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
              className="photo-img"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          {/* Fechar */}
          <button className="lb-close" onClick={closeLightbox} aria-label="Fechar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Anterior */}
          {photos.length > 1 && (
            <button
              className="lb-nav lb-prev"
              onClick={e => { e.stopPropagation(); prevPhoto() }}
              aria-label="Foto anterior"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Imagem */}
          <div
            className="lb-img-wrap"
            onClick={e => e.stopPropagation()}
            style={{ position: 'relative', width: 'min(90vw, 1100px)', height: '80dvh' }}
          >
            <Image
              src={getPhotoUrl(photos[lightboxIndex].storage_path)}
              alt={photos[lightboxIndex].file_name || ''}
              fill
              className="lb-img"
              sizes="min(90vw, 1100px)"
              priority
            />
          </div>

          {/* Próxima */}
          {photos.length > 1 && (
            <button
              className="lb-nav lb-next"
              onClick={e => { e.stopPropagation(); nextPhoto() }}
              aria-label="Próxima foto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* Contador */}
          <div className="lb-footer">
            <span className="lb-counter">
              {lightboxIndex + 1} / {photos.length}
            </span>
          </div>
        </div>
      )}
    </>
  )
}
