'use client';

// Deno — uses Shawna's real cat photo, cropped to circle
export default function CatAvatar({ size = 56 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
        background: '#e8e8ea',
      }}
    >
      <img
        src="/images/deno-cat.png"
        alt="Deno"
        width={size}
        height={size}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
      />
    </div>
  );
}
