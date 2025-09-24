// DOM Elements
const progressBar = document.querySelector(".progress-fill")
const navButtons = document.querySelectorAll(".nav-btn[data-section]")
const musicToggle = document.getElementById("music-toggle")
const playPauseBtn = document.getElementById("play-pause-btn")
const muteBtn = document.getElementById("mute-btn")
const backgroundMusic = document.getElementById("background-music")
const startJourneyBtn = document.getElementById("start-journey")
const sections = document.querySelectorAll(".story-section")

// State
let currentSection = "inicio"
let isPlaying = false
let isMuted = false

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation()
  initializeMusicPlayer()
  initializeScrollEffects()
  initializeVideoPlayers()
  updateProgressBar()
})

// Navigation functionality
function initializeNavigation() {
  // Add click listeners to navigation buttons
  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section")
      scrollToSection(sectionId)
    })
  })

  // Start journey button
  if (startJourneyBtn) {
    startJourneyBtn.addEventListener("click", () => {
      scrollToSection("parte1")
    })
  }

  // Update active navigation on scroll
  window.addEventListener("scroll", updateActiveNavigation)
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

function updateActiveNavigation() {
  const scrollPosition = window.scrollY + window.innerHeight / 2

  sections.forEach((section) => {
    const top = section.offsetTop
    const bottom = top + section.offsetHeight

    if (scrollPosition >= top && scrollPosition <= bottom) {
      const sectionId = section.id

      // Update current section
      if (currentSection !== sectionId) {
        currentSection = sectionId

        // Update navigation buttons
        navButtons.forEach((btn) => {
          btn.classList.remove("active")
          if (btn.getAttribute("data-section") === sectionId) {
            btn.classList.add("active")
          }
        })
      }
    }
  })

  updateProgressBar()
}

// Progress bar functionality
function updateProgressBar() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollPercent = (scrollTop / docHeight) * 100

  if (progressBar) {
    progressBar.style.width = Math.min(scrollPercent, 100) + "%"
  }
}

// Music player functionality
function initializeMusicPlayer() {
  if (playPauseBtn) {
    playPauseBtn.addEventListener("click", togglePlayPause)
  }

  if (muteBtn) {
    muteBtn.addEventListener("click", toggleMute)
  }

  if (musicToggle) {
    musicToggle.addEventListener("click", togglePlayPause)
  }

  // Handle audio events
  if (backgroundMusic) {
    backgroundMusic.addEventListener("ended", () => {
      isPlaying = false
      updateMusicButtons()
    })

    backgroundMusic.addEventListener("loadeddata", () => {
      console.log("[v0] Audio loaded successfully")
    })

    backgroundMusic.addEventListener("error", (e) => {
      console.log("[v0] Audio error:", e)
    })
  }
}

function togglePlayPause() {
  if (!backgroundMusic) return

  if (isPlaying) {
    backgroundMusic.pause()
    isPlaying = false
  } else {
    backgroundMusic.play().catch((error) => {
      console.log("[v0] Audio play error:", error)
    })
    isPlaying = true
  }

  updateMusicButtons()
}

function toggleMute() {
  if (!backgroundMusic) return

  isMuted = !isMuted
  backgroundMusic.muted = isMuted
  updateMusicButtons()
}

function updateMusicButtons() {
  if (playPauseBtn) {
    playPauseBtn.textContent = isPlaying ? "Pausar" : "Música"
  }

  if (muteBtn) {
    muteBtn.textContent = isMuted ? "🔇" : "🔊"
  }

  if (musicToggle) {
    musicToggle.textContent = isPlaying && !isMuted ? "🔊" : "🔇"
  }
}

// Scroll effects and parallax
function initializeScrollEffects() {
  window.addEventListener("scroll", handleScrollEffects)
}

function handleScrollEffects() {
  const scrollY = window.scrollY

  // Parallax effect for background images
  const parallaxElements = document.querySelectorAll(".parallax-bg")
  parallaxElements.forEach((element) => {
    const speed = 0.5
    const yPos = -(scrollY * speed)
    element.style.transform = `translateY(${yPos}px)`
  })

  // Fade in animations for story cards
  const storyCards = document.querySelectorAll(".story-card")
  storyCards.forEach((card) => {
    const rect = card.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0

    if (isVisible) {
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }
  })
}

// Video player functionality
function initializeVideoPlayers() {
  const playButtons = document.querySelectorAll(".play-button")

  playButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const videoContainer = this.parentElement
      const video = videoContainer.querySelector("video")

      if (video) {
        if (video.paused) {
          video.play()
          this.style.display = "none"
        } else {
          video.pause()
          this.style.display = "flex"
        }
      }
    })
  })

  // Handle video events
  const videos = document.querySelectorAll("video[controls]")
  videos.forEach((video) => {
    video.addEventListener("play", function () {
      const playButton = this.parentElement.querySelector(".play-button")
      if (playButton) {
        playButton.style.display = "none"
      }
    })

    video.addEventListener("pause", function () {
      const playButton = this.parentElement.querySelector(".play-button")
      if (playButton) {
        playButton.style.display = "flex"
      }
    })

    video.addEventListener("ended", function () {
      const playButton = this.parentElement.querySelector(".play-button")
      if (playButton) {
        playButton.style.display = "flex"
      }
    })
  })
}

// Smooth scroll behavior for older browsers
function smoothScrollTo(element) {
  const targetPosition = element.offsetTop
  const startPosition = window.scrollY
  const distance = targetPosition - startPosition
  const duration = 1000
  let start = null

  function animation(currentTime) {
    if (start === null) start = currentTime
    const timeElapsed = currentTime - start
    const run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  function ease(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}

// Intersection Observer for better performance
function initializeIntersectionObserver() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Observe story cards
  const storyCards = document.querySelectorAll(".story-card")
  storyCards.forEach((card) => {
    observer.observe(card)
  })
}

// Initialize intersection observer if supported
if ("IntersectionObserver" in window) {
  document.addEventListener("DOMContentLoaded", initializeIntersectionObserver)
}

// Handle window resize
window.addEventListener("resize", () => {
  updateProgressBar()
})

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  const sectionsArray = Array.from(sections)
  const currentIndex = sectionsArray.findIndex((section) => section.id === currentSection)

  switch (e.key) {
    case "ArrowDown":
    case "PageDown":
      e.preventDefault()
      if (currentIndex < sectionsArray.length - 1) {
        scrollToSection(sectionsArray[currentIndex + 1].id)
      }
      break
    case "ArrowUp":
    case "PageUp":
      e.preventDefault()
      if (currentIndex > 0) {
        scrollToSection(sectionsArray[currentIndex - 1].id)
      }
      break
    case "Home":
      e.preventDefault()
      scrollToSection("inicio")
      break
    case "End":
      e.preventDefault()
      scrollToSection("informacion")
      break
    case " ":
      e.preventDefault()
      togglePlayPause()
      break
  }
})

// Add CSS animations for story cards
const style = document.createElement("style")
style.textContent = `
    .story-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .story-card.visible {
        opacity: 1;
        transform: translateY(0);
    }
`
document.head.appendChild(style)

console.log("[v0] Muisca website initialized successfully")
