"use client"

import React from "react"

import { useState } from "react"
import NextImage from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Download, Share2, CheckCircle } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    address: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [personalizedImageUrl, setPersonalizedImageUrl] = useState("")

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const generatePersonalizedImage = (name) => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      if (!ctx) {
        resolve(generateFallbackImage(name))
        return
      }

      canvas.width = 1080
      canvas.height = 1920

      // Create background image
      const backgroundImg = new Image()
      backgroundImg.crossOrigin = "anonymous"

      backgroundImg.onload = () => {
        // Draw background image
        ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)

        // Add overlay for better text visibility
        const overlay = ctx.createLinearGradient(0, 0, 0, canvas.height)
        overlay.addColorStop(0, "rgba(0, 0, 0, 0.3)")
        overlay.addColorStop(0.5, "rgba(0, 0, 0, 0.1)")
        overlay.addColorStop(1, "rgba(0, 0, 0, 0.4)")
        ctx.fillStyle = overlay
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        drawContent(ctx, name, canvas.width, canvas.height)
        resolve(canvas.toDataURL("image/jpeg", 0.95))
      }

      backgroundImg.onerror = () => {
        // If background image fails to load, use fallback
        resolve(generateFallbackImage(name))
      }

      // Try to load background image, fallback if not available
      backgroundImg.src = "/temple-ceremony-background.jpg"
    })
  }

  const drawContent = (ctx, name, width, height) => {
    // Add divine light rays
    ctx.save()
    ctx.translate(width / 2, 200)
    for (let i = 0; i < 12; i++) {
      ctx.rotate(Math.PI / 6)
      const rayGradient = ctx.createLinearGradient(0, 0, 0, 300)
      rayGradient.addColorStop(0, "rgba(255, 215, 0, 0.6)")
      rayGradient.addColorStop(1, "rgba(255, 215, 0, 0)")
      ctx.fillStyle = rayGradient
      ctx.fillRect(-15, 0, 30, 300)
    }
    ctx.restore()

    // Ornate header section
    const headerHeight = 300
    const headerGradient = ctx.createLinearGradient(0, 0, 0, headerHeight)
    headerGradient.addColorStop(0, "rgba(255, 140, 0, 0.95)")
    headerGradient.addColorStop(0.5, "rgba(255, 69, 0, 0.9)")
    headerGradient.addColorStop(1, "rgba(139, 69, 19, 0.85)")
    ctx.fillStyle = headerGradient
    ctx.fillRect(0, 0, width, headerHeight)

    // Decorative border patterns
    ctx.strokeStyle = "#FFD700"
    ctx.lineWidth = 8
    ctx.strokeRect(20, 20, width - 40, headerHeight - 40)

    // Inner decorative border
    ctx.strokeStyle = "#FFFFFF"
    ctx.lineWidth = 3
    ctx.strokeRect(40, 40, width - 80, headerHeight - 80)

    // Draw decorative corners
    drawDecorativeCorners(ctx, 60, 60, width - 120, headerHeight - 120)

    // Main title with enhanced styling
    ctx.textAlign = "center"
    ctx.fillStyle = "#FFFFFF"
    ctx.font = "bold 52px serif"
    ctx.shadowColor = "rgba(0, 0, 0, 0.8)"
    ctx.shadowBlur = 6
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.fillText("🕉️ ಶ್ರೀ ಸಿದ್ಧ ಶಿವ ವರಗಣಪತಿ ಉತ್ಸವ 🕉️", width / 2, 140)

    // Year with divine styling
    ctx.font = "bold 84px serif"
    ctx.fillStyle = "#FFD700"
    ctx.strokeStyle = "#B8860B"
    ctx.lineWidth = 4
    ctx.strokeText("2025", width / 2, 220)
    ctx.fillText("2025", width / 2, 220)

    // Reset shadow
    ctx.shadowColor = "transparent"
    ctx.shadowBlur = 0
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0

    // Middle decorative section
    const middleY = headerHeight + 50
    ctx.font = "64px serif"
    ctx.fillStyle = "#FF6347"
    ctx.fillText("🌺 ✨ 🪔 ✨ 🌺", width / 2, middleY)

    // Enhanced bottom section
    const bottomSectionHeight = 600
    const bottomY = height - bottomSectionHeight

    // Divine bottom gradient
    const bottomGradient = ctx.createLinearGradient(0, bottomY, 0, height)
    bottomGradient.addColorStop(0, "rgba(255, 140, 0, 0.9)")
    bottomGradient.addColorStop(0.3, "rgba(255, 69, 0, 0.95)")
    bottomGradient.addColorStop(0.7, "rgba(139, 69, 19, 0.9)")
    bottomGradient.addColorStop(1, "rgba(101, 67, 33, 0.95)")
    ctx.fillStyle = bottomGradient
    ctx.fillRect(0, bottomY, width, bottomSectionHeight)

    // Ornate bottom border
    ctx.strokeStyle = "#FFD700"
    ctx.lineWidth = 8
    ctx.strokeRect(30, bottomY + 30, width - 60, bottomSectionHeight - 60)
    ctx.strokeStyle = "#FFFFFF"
    ctx.lineWidth = 3
    ctx.strokeRect(50, bottomY + 50, width - 100, bottomSectionHeight - 100)

    // Draw decorative elements in bottom section
    drawDecorativeCorners(ctx, 70, bottomY + 70, width - 140, bottomSectionHeight - 140)

    // Content with better spacing
    ctx.fillStyle = "#FFFFFF"
    ctx.font = "bold 46px serif"
    ctx.fillText("🪔 ಧೂಪ ದೀಪಾರತಿ ಇವರಿಂದ 🪔", width / 2, bottomY + 140)

    // Personalized name with divine styling
    ctx.font = "bold 64px serif"
    ctx.fillStyle = "#FFD700"
    ctx.strokeStyle = "#B8860B"
    ctx.lineWidth = 3
    ctx.shadowColor = "rgba(0, 0, 0, 0.6)"
    ctx.shadowBlur = 4
    ctx.shadowOffsetX = 2
    ctx.shadowOffsetY = 2
    ctx.strokeText(name, width / 2, bottomY + 220)
    ctx.fillText(name, width / 2, bottomY + 220)

    // Reset shadow
    ctx.shadowColor = "transparent"
    ctx.shadowBlur = 0
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0

    // Location and details
    ctx.fillStyle = "#FFFFFF"
    ctx.font = "bold 40px serif"
    ctx.fillText("📍 ಶ್ರೀ ಸಿದ್ಧರೂಢ ಮಠ, ಚಳಕಾಪುರ", width / 2, bottomY + 300)
    ctx.font = "bold 42px serif"
    ctx.fillText("🗓️ ಸೆಪ್ಟೆಂಬರ್ 1, 2025 | ⏰ ಸಂಜೆ 6:00", width / 2, bottomY + 360)

    // Decorative elements
    ctx.font = "56px serif"
    ctx.fillStyle = "#FFD700"
    ctx.fillText("🌺 🪔 ✨ 🪔 🌺", width / 2, bottomY + 420)

    // Invitation message
    ctx.font = "bold 36px serif"
    ctx.fillStyle = "#FFE4B5"
    ctx.fillText("🙏 ಬನ್ನಿ, ಭಕ್ತಿಯಿಂದ ಒಂದಾಗಿ ಹಬ್ಬವನ್ನು ಆಚರಿಸೋಣ 🙏", width / 2, bottomY + 480)

    // Contact details
    ctx.font = "32px serif"
    ctx.fillStyle = "#FFFFFF"
    ctx.fillText("📞 Contact: 9731194053, 9019188438", width / 2, bottomY + 530)
  }

  const drawDecorativeCorners = (
    ctx,
    x,
    y,
    width,
    height,
  ) => {
    const cornerSize = 40
    ctx.strokeStyle = "#FFD700"
    ctx.lineWidth = 4

    // Top-left corner
    ctx.beginPath()
    ctx.moveTo(x, y + cornerSize)
    ctx.lineTo(x, y)
    ctx.lineTo(x + cornerSize, y)
    ctx.stroke()

    // Top-right corner
    ctx.beginPath()
    ctx.moveTo(x + width - cornerSize, y)
    ctx.lineTo(x + width, y)
    ctx.lineTo(x + width, y + cornerSize)
    ctx.stroke()

    // Bottom-left corner
    ctx.beginPath()
    ctx.moveTo(x, y + height - cornerSize)
    ctx.lineTo(x, y + height)
    ctx.lineTo(x + cornerSize, y + height)
    ctx.stroke()

    // Bottom-right corner
    ctx.beginPath()
    ctx.moveTo(x + width - cornerSize, y + height)
    ctx.lineTo(x + width, y + height)
    ctx.lineTo(x + width, y + height - cornerSize)
    ctx.stroke()

    // Add small decorative dots
    ctx.fillStyle = "#FFD700"
    const dotSize = 6
    ctx.fillRect(x - dotSize / 2, y - dotSize / 2, dotSize, dotSize)
    ctx.fillRect(x + width - dotSize / 2, y - dotSize / 2, dotSize, dotSize)
    ctx.fillRect(x - dotSize / 2, y + height - dotSize / 2, dotSize, dotSize)
    ctx.fillRect(x + width - dotSize / 2, y + height - dotSize / 2, dotSize, dotSize)
  }

  const generateFallbackImage = (name) => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return ""

    canvas.width = 1080
    canvas.height = 1920

    // Enhanced gradient background as fallback
    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      Math.max(canvas.width, canvas.height),
    )
    gradient.addColorStop(0, "#FFE4B5")
    gradient.addColorStop(0.5, "#DEB887")
    gradient.addColorStop(1, "#8B4513")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add decorative border
    ctx.strokeStyle = "#FFD700"
    ctx.lineWidth = 20
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80)

    // Add inner border
    ctx.strokeStyle = "#FFFFFF"
    ctx.lineWidth = 8
    ctx.strokeRect(80, 80, canvas.width - 160, canvas.height - 160)

    // Add title
    ctx.fillStyle = "#FFFFFF"
    ctx.font = "bold 64px serif"
    ctx.textAlign = "center"
    ctx.shadowColor = "rgba(0, 0, 0, 0.8)"
    ctx.shadowBlur = 4
    ctx.shadowOffsetX = 2
    ctx.shadowOffsetY = 2
    ctx.fillText("🕉️ ಶ್ರೀ ಸಿದ್ಧ ಶಿವ ವರಗಣಪತಿ ಉತ್ಸವ 🕉️", canvas.width / 2, 250)

    // Add year
    ctx.font = "bold 96px serif"
    ctx.fillStyle = "#FFD700"
    ctx.strokeStyle = "#B8860B"
    ctx.lineWidth = 3
    ctx.strokeText("2025", canvas.width / 2, 380)
    ctx.fillText("2025", canvas.width / 2, 380)

    // Reset shadow
    ctx.shadowColor = "transparent"
    ctx.shadowBlur = 0
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0

    // Add Ganesha emoji/symbol
    ctx.font = "200px serif"
    ctx.fillStyle = "#FF6347"
    ctx.fillText("🐘", canvas.width / 2, 600)

    // Add personalized name
    ctx.font = "bold 64px serif"
    ctx.fillStyle = "#FFFFFF"
    ctx.fillText("🪔 ಧೂಪ ದೀಪಾರತಿ ಇವರಿಂದ 🪔", canvas.width / 2, 750)
    ctx.font = "bold 80px serif"
    ctx.fillStyle = "#FFD700"
    ctx.strokeStyle = "#B8860B"
    ctx.lineWidth = 2
    ctx.strokeText(name, canvas.width / 2, 850)
    ctx.fillText(name, canvas.width / 2, 850)

    // Add venue details
    ctx.font = "bold 48px serif"
    ctx.fillStyle = "#FFFFFF"
    ctx.fillText("📍 ಶ್ರೀ ಸಿದ್ಧರೂಢ ಮಠ, ಚಳಕಾಪುರ", canvas.width / 2, 1000)

    // Add date and time
    ctx.font = "bold 52px serif"
    ctx.fillText("🗓️ ಸೆಪ್ಟೆಂಬರ್ 1, 2025", canvas.width / 2, 1120)
    ctx.fillText("⏰ ಸಂಜೆ 6:00", canvas.width / 2, 1200)

    // Add decorative elements
    ctx.font = "60px serif"
    ctx.fillStyle = "#FF6347"
    ctx.fillText("🌺 ✨ 🪔 ✨ 🌺", canvas.width / 2, 1320)

    // Add blessing message
    ctx.font = "bold 44px serif"
    ctx.fillStyle = "#FFD700"
    ctx.fillText("🙏 ಬನ್ನಿ, ಭಕ್ತಿಯಿಂದ ಒಂದಾಗಿ ಹಬ್ಬವನ್ನು ಆಚರಿಸೋಣ 🙏", canvas.width / 2, 1450)

    // Add contact info
    ctx.font = "36px serif"
    ctx.fillStyle = "#FFFFFF"
    ctx.fillText("📞 Contact: 9731194053, 9019188438", canvas.width / 2, 1600)

    // Add bottom decoration
    ctx.font = "80px serif"
    ctx.fillStyle = "#FFD700"
    ctx.fillText("🌸 ॐ गं गणपतये नमः ॐ 🌸", canvas.width / 2, 1750)

    return canvas.toDataURL("image/jpeg", 0.95)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Call the actual API endpoint
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        console.log("Registration successful:", result)
        // Generate personalized image
        const imageUrl = await generatePersonalizedImage(formData.fullName)
        setPersonalizedImageUrl(imageUrl)
        setIsSubmitted(true)
      } else {
        const errorData = await response.json()
        alert(errorData.message || "Registration failed. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      // For demo purposes, still generate image even if API fails
      const imageUrl = await generatePersonalizedImage(formData.fullName)
      setPersonalizedImageUrl(imageUrl)
      setIsSubmitted(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = personalizedImageUrl
    link.download = `${formData.fullName}_Ganesh_Utsava_2025.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const shareToWhatsApp = () => {
    const message = `🌺 Sri Siddha Shiva VaraGanapati Utsava - 2025 🌺

📍 Shri Siddharoodh Math, Chalakapur
🕯️ Dhoopa Deeparati by: ${formData.fullName}
🗓️ Sep 1, 2025 | ⏰ 6 PM onwards
👥 1001 Women Participation
📞 Contact: 9731194053, 9019188438

🙏 Let's celebrate devotion and unity 🙏
ॐ गं गणपतये नमः 🐘`

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
        <header className="bg-gradient-to-r from-orange-600 via-red-500 to-red-600 text-white shadow-2xl">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2 hover:text-orange-200 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Registration Successful!</h1>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-2xl mx-auto border-green-200 shadow-2xl bg-gradient-to-br from-white to-green-50">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg text-center">
              <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                <CheckCircle className="w-8 h-8" />
                <span>Registration Successful!</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-orange-800 mb-2">Welcome, {formData.fullName}!</h2>
                <p className="text-lg text-gray-600">
                  You have successfully registered for the Dhoopa Deeparati ceremony.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-6 mb-6 shadow-lg">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Your Personalized WhatsApp Status is Ready!</h3>
                <div className="bg-white rounded-lg p-4 mb-4 shadow-inner">
                  <img
                    src={
                      personalizedImageUrl ||
                      "/placeholder.svg?height=400&width=225&query=spiritual invitation with golden temple"
                    }
                    alt="Personalized Ganesh Utsava Status"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg border-2 border-orange-200"
                    style={{ aspectRatio: "9/16" }}
                  />
                </div>
                <p className="text-gray-700 mb-4 font-medium">
                  🙏 Please upload this as your WhatsApp status to spread the divine energy 🙏
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleDownload}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white flex items-center space-x-2 shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Image and Share to whatsapp Status Click Here </span>
                  </Button>

                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-blue-800 mb-2">Event Details</h3>
                <div className="text-left space-y-2 text-blue-700">
                  <p>
                    <strong>Event:</strong> Sri Siddha Shiva VaraGanapati Utsava 2025
                  </p>
                  <p>
                    <strong>Date:</strong> September 1, 2025
                  </p>
                  <p>
                    <strong>Time:</strong> 6:00 PM onwards
                  </p>
                  <p>
                    <strong>Venue:</strong> Shri Siddharoodh Math, Chalakapur
                  </p>
                  <p>
                    <strong>Participants:</strong> 1001 Women
                  </p>
                  <p>
                    <strong>Contact:</strong> 9731194053, 9019188438
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-red-500 to-red-600 text-white shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 hover:text-orange-200 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-orange-600 font-bold text-xl">📝</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Dhoopa Deeparati Registration</h1>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Registration Form */}
          <Card className="border-orange-200 shadow-2xl bg-gradient-to-br from-white to-orange-50">
            <CardHeader className="bg-gradient-to-r from-orange-600 via-red-500 to-red-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Register for Dhoopa Deeparati</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-lg font-semibold text-orange-800">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-2 border-orange-200 focus:border-orange-500 focus:ring-orange-200 text-lg p-3 bg-white shadow-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="mobile" className="text-lg font-semibold text-orange-800">
                    Mobile Number *
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="mt-2 border-orange-200 focus:border-orange-500 focus:ring-orange-200 text-lg p-3 bg-white shadow-sm"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-lg font-semibold text-orange-800">
                    Address *
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-2 border-orange-200 focus:border-orange-500 focus:ring-orange-200 text-lg p-3 bg-white shadow-sm"
                    placeholder="Enter your complete address"
                    rows={4}
                  />
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-4 shadow-sm">
                  <p className="text-green-800 font-semibold">✅ No Registration Fee</p>
                  <p className="text-green-700 text-sm mt-1">
                    Free participation for all devoted women. After registration, you'll receive a personalized WhatsApp
                    status image.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-600 via-red-500 to-red-600 hover:from-orange-700 hover:via-red-600 hover:to-red-700 text-white py-4 text-lg font-semibold rounded-full shadow-lg transform transition-transform hover:scale-105"
                >
                  {isLoading ? "Registering..." : "Register & Get Your Status Image"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Event Information */}
          <div className="space-y-8">
            <Card className="border-red-200 shadow-lg bg-gradient-to-br from-white to-red-50">
              <CardHeader>
                <CardTitle className="text-xl text-red-800">Event Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-red-600 rounded-full shadow-sm"></span>
                    <span>
                      <strong>Date:</strong> September 1, 2025
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-orange-600 rounded-full shadow-sm"></span>
                    <span>
                      <strong>Time:</strong> 6:00 PM onwards
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-red-600 rounded-full shadow-sm"></span>
                    <span>
                      <strong>Venue:</strong> Shri Siddharoodh Math, Chalakapur
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-orange-600 rounded-full shadow-sm"></span>
                    <span>
                      <strong>Participants:</strong> 1001 Women
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 shadow-lg bg-gradient-to-br from-white to-orange-50">
              <CardContent className="p-6">
                <NextImage
                  src="/ganesh.jpg"
                  alt="Lord Ganesha"
                  width={400}
                  height={300}
                  className="rounded-xl w-full object-cover shadow-lg border-2 border-orange-200"
                />
                <h3 className="text-xl font-bold text-orange-800 mt-4 text-center">Seek Blessings of Lord Ganesha</h3>
              </CardContent>
            </Card>

            <Card className="border-orange-200 shadow-lg bg-gradient-to-br from-white to-amber-50">
              <CardHeader>
                <CardTitle className="text-xl text-orange-800">What You'll Receive</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 shadow-sm"></span>
                    <span>Personalized WhatsApp status image with your name</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 shadow-sm"></span>
                    <span>Beautiful Ganesha design with event details</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 shadow-sm"></span>
                    <span>High-quality image for social media sharing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 shadow-sm"></span>
                    <span>Easy download and WhatsApp sharing options</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
