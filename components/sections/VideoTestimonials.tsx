'use client';

const VIDEOS = [
  { url: 'https://www.instagram.com/p/DXWkydKkcrK/', treatment: 'Invisalign Treatment', thumbnail: '/invas.jpg' },
  { url: 'https://www.instagram.com/p/DTIlg5IjGEM/', treatment: 'Braces Treatment', thumbnail: '/braces.jpg' },
  { url: 'https://www.instagram.com/p/DW6Uf9LjC39/', treatment: 'Smile Makeover', thumbnail: '/nistha.webp' },
  { url: 'https://www.instagram.com/p/DUf2zFqDIPP/', treatment: 'Dental Implants', thumbnail: '/equipment.webp' },
  { url: 'https://www.instagram.com/p/DTnfL8OkVUB/', treatment: 'Teeth Whitening', thumbnail: '/teeth-whitening.jpg' },
];

function VideoCard({ video }: { video: typeof VIDEOS[0] }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl overflow-hidden shadow-sm border border-gray-150 bg-gray-50"
      style={{ aspectRatio: '9/16' }}
      aria-label={`Watch ${video.treatment} on Instagram`}
    >
      <img
        src={video.thumbnail}
        alt={video.treatment}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <svg className="w-5 h-5 text-[#1a5f4a] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Instagram badge top-right */}
      <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-1 rounded-full">
        <svg viewBox="0 0 24 24" fill="white" className="w-2.5 h-2.5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
        </svg>
        Reel
      </div>

      {/* Bottom treatment label */}
      <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
        <p className="text-white font-semibold text-xs leading-tight">{video.treatment}</p>
        <p className="text-white/70 text-[10px] mt-0.5">Tap to watch</p>
      </div>
    </a>
  );
}

export default function VideoTestimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Video Testimonials</h2>
            <p className="text-gray-500 text-sm mt-1">Hear from our happy patients</p>
          </div>
          <a
            href="https://www.instagram.com/bouquetdental/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-[#1a5f4a] hover:underline whitespace-nowrap shrink-0"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
            </svg>
            View All on Instagram →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {VIDEOS.map((v, i) => (
            <div key={i} className={i === 4 ? 'hidden sm:block' : ''}>
              <VideoCard video={v} />
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Click any video to watch on Instagram
        </p>
      </div>
    </section>
  );
}
