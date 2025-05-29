import React from 'react'

type Props = {
  certificates: string[]
}

const CertificateGrid = ({ certificates }: Props) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {certificates.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Certificate ${idx + 1}`}
          className="rounded-lg shadow hover:scale-105 transition"
        />
      ))}
    </div>
  )
}

export default CertificateGrid
