"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  className?: string
}

export default function ImageGallery({ images, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isZoomed, setIsZoomed] = useState(false)
  const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(images.length).fill(false))

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === "ArrowRight") {
        navigateImage("next")
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev")
      } else if (e.key === "Escape") {
        closeLightbox()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setIsZoomed(false)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % images.length)
    } else {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
    setIsZoomed(false)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  const handleImageLoad = (index: number) => {
    const newLoadedImages = [...loadedImages]
    newLoadedImages[index] = true
    setLoadedImages(newLoadedImages)
  }

  return (
    <div className={cn("", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <ZoomIn className="text-white w-8 h-8" />
            </div>
            <div
              className={cn("absolute inset-0 bg-muted/50 animate-pulse", loadedImages[index] ? "hidden" : "block")}
            ></div>
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              onLoad={() => handleImageLoad(index)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-accent z-20 bg-black/30 p-2 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={toggleZoom}
              className="absolute top-4 left-4 text-white hover:text-accent z-20 bg-black/30 p-2 rounded-full"
            >
              <ZoomIn className="h-6 w-6" />
            </button>

            <div className="relative w-full max-w-4xl max-h-[80vh] overflow-hidden">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={images[selectedImage].src || "/placeholder.svg"}
                    alt={images[selectedImage].alt}
                    width={images[selectedImage].width}
                    height={images[selectedImage].height}
                    className={cn(
                      "object-contain mx-auto max-h-[80vh] transition-transform duration-300",
                      isZoomed ? "cursor-zoom-out scale-150" : "cursor-zoom-in",
                    )}
                    onClick={toggleZoom}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
                  <p>{images[selectedImage].alt}</p>
                  <p className="text-xs text-white/70">
                    {selectedImage + 1} / {images.length}
                  </p>
                </div>
              </motion.div>
            </div>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
