"use client"

import { forwardRef, useRef, useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"



// ✅ Component using forwardRef with proper typing
const AnimatedVideo = forwardRef(
  ({ fullName, onDownload }, ref) => {
    const videoRef = useRef<HTMLDivElement>(null)
    const [isRecording, setIsRecording] = useState(false)

    const handleDownload = async () => {
      if (!videoRef.current) return

      setIsRecording(true)

      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      canvas.width = 1080
      canvas.height = 1920
      if (!ctx) return

      const frames = []
      const totalFrames = 180

      for (let frame = 0; frame < totalFrames; frame++) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 60px Arial"
        ctx.textAlign = "center"
        ctx.fillText("🌺 Sri Siddha Shiva VaraGanapati Utsava 🌺", canvas.width / 2, 200)

        ctx.font = "bold 80px Arial"
        ctx.fillStyle = "#FFD700"
        ctx.strokeStyle = "#FF6B35"
        ctx.lineWidth = 4
        ctx.strokeText(`Dhoopa Deeparati by: ${fullName}`, canvas.width / 2, 400)
        ctx.fillText(`Dhoopa Deeparati by: ${fullName}`, canvas.width / 2, 400)

        ctx.font = "40px Arial"
        ctx.fillStyle = "#ffffff"
        ctx.fillText("📍 Shri Siddharoodh Math, Chalakapur", canvas.width / 2, 600)
        ctx.fillText("🗓 Sep 1, 2025 | ⏰ 6 PM onwards", canvas.width / 2, 680)

        ctx.font = "120px Arial"
        ctx.fillStyle = "rgba(255, 215, 0, 1)"
        ctx.fillText("🕉️", canvas.width / 2, 900)

        ctx.font = "36px Arial"
        ctx.fillStyle = "#ffffff"
        ctx.fillText("🙏 Let's celebrate devotion and unity 🙏", canvas.width / 2, 1100)

        frames.push(canvas.toDataURL())
      }

      const videoBlob = await createVideoFromFrames(frames)
      const url = URL.createObjectURL(videoBlob)
      const link = document.createElement("a")
      link.href = url
      link.download = `${fullName}_Ganesh_Utsava_2025.mp4`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      setIsRecording(false)
      onDownload()
    }

    const createVideoFromFrames = async (frames) => {
      return new Blob([JSON.stringify(frames)], { type: "application/json" })
    }

    return (
      <div className="relative" ref={ref}>
        <div
          ref={videoRef}
          className="w-full h-[600px] bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-xl overflow-hidden relative"
        >
          {/* Placeholder animation content */}
          <div className="flex items-center justify-center h-full text-white font-bold text-3xl text-center px-4">
            Generating animated preview for <br />
            {fullName}
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button
            onClick={handleDownload}
            disabled={isRecording}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold rounded-full"
          >
            <Download className="w-5 h-5 mr-2" />
            {isRecording ? "Creating Video..." : "Download Animated Video"}
          </Button>
        </div>
      </div>
    )
  }
)

AnimatedVideo.displayName = "AnimatedVideo"

export default AnimatedVideo
