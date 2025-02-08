import { useEffect, useRef } from "react"
import PDFObject from "pdfobject"

interface PdfViewerProps {
  fileUrl: string
}

export default function PdfViewer({ fileUrl }: PdfViewerProps) {
  const pdfContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (pdfContainer.current) {
      PDFObject.embed(fileUrl, pdfContainer.current)
    }
  }, [fileUrl])

  return <div ref={pdfContainer} className="w-full h-screen border border-gray-300"></div>
}
