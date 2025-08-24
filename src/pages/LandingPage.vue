<template>
 
  <main class="app__main landing__main">
    

    <!-- middle Section -->
    <section class="middle-page-content">
      
      
    <div class="carousel-container">
    <header class="middle-header">
        <h1 class="middle-page-h1 animate__animated animate__fadeInDown">{{ title }}</h1>
        <p class="middle-page-p">Découvrez des antiquités authentiques et des pièces d'exception</p>
      </header>
    <div class="carousel-wrapper" ref="carouselWrapper">
      <div class="carousel-track" ref="carouselTrack">
        <div 
          v-for="(slide, index) in slides" 
          :key="index"
          class="carousel-slide"
          ref="slideRefs"
        >
          <div class="slide-content">
            <img :src="slide.image" :alt="slide.title" class="slide-image">
            <h3 class="slide-title">{{ slide.title }}</h3>
            <p class="slide-description">{{ slide.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="carousel-controls">
      <button @click="prevSlide" class="nav-button prev-button" ref="prevButton">
        ➖ 
      </button>
      <div class="indicators">
        <span 
          v-for="(slide, index) in slides" 
          :key="index"
          :class="['indicator', { active: index === currentSlide }]"
          @click="goToSlide(index)"
        ></span>
      </div>
      <button @click="nextSlide" class="nav-button next-button" ref="nextButton">
        ➕
      </button>
    </div>
    </div>
   <section class="button-section">
    
   <a href="#" >
        <RouterLink to="/products" class="cta-button">{{
          collectionText
        }}</RouterLink></a
      >

      </section>
  
    </section>
   
  </main>

</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'

// Carousel data
const slides = ref([
  {
    title: "Platine Vinyle Vintage",
    description: "Platine Vinyle Vintage Avec Disque Vinyle Odeon",
    image: "https://images.pexels.com/photos/33523058/pexels-photo-33523058.jpeg"
  },
  {
    title: "Montre", 
    description: "Montre De Poche Blanche",
    image: "https://images.pexels.com/photos/3210711/pexels-photo-3210711.jpeg"
  },
  {
    title: "Projecteur",
    description: "Projecteur Noir Rolleiflex Reel To Reel",
    image: "https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg"
  },
  {
    title: "Volkswagen",
    description: "Volkswagen Beetle Orange",
    image: "https://images.pexels.com/photos/1209774/pexels-photo-1209774.jpeg"
  },
  {
    title: "Cruche",
    description: "Gros Plan D'une Cruche Antique ",
    image: "https://images.pexels.com/photos/16983102/pexels-photo-16983102.jpeg"
  }
])

// References
const carouselWrapper = ref<HTMLElement>()
const carouselTrack = ref<HTMLElement>()
const slideRefs = ref<HTMLElement[]>([])
const prevButton = ref<HTMLElement>()
const nextButton = ref<HTMLElement>()

// State
const currentSlide = ref(0)
const isAutoPlaying = ref(true)
const slideWidth = ref(0)

// GSAP Variables 
let autoPlayInterval: NodeJS.Timeout | null = null
let tl: gsap.core.Timeline

// Calculated 
const calculateSlideWidth = () => {
  if (carouselWrapper.value) {
    slideWidth.value = carouselWrapper.value.offsetWidth
  }
}

// Transition of Animation 
const animateToSlide = (slideIndex: number, direction: 'next' | 'prev' = 'next') => {
  if (!carouselTrack.value) return

  const targetX = -slideIndex * slideWidth.value
  
  // Main Animation 
  gsap.to(carouselTrack.value, {
    x: targetX,
    duration: 0.8,
    ease: "power2.inOut"
  })

  // Individual animation 
  slideRefs.value.forEach((slide, index) => {
    if (slide) {
      if (index === slideIndex) { 
        gsap.fromTo(slide.querySelector('.slide-content'), 
          { 
            scale: 0.9, 
            opacity: 0.7,
            rotationY: direction === 'next' ? 20 : -20
          },
          { 
            scale: 1, 
            opacity: 1,
            rotationY: 0,
            duration: 0.6,
            delay: 0.2,
            ease: "power2.out"
          }
        )
      } else { 
        gsap.to(slide.querySelector('.slide-content'), {
          scale: 0.9,
          opacity: 0.7,
          duration: 0.4,
          ease: "power2.out"
        })
      }
    }
  })
}

// Navigation
const nextSlide = () => {
  const nextIndex = (currentSlide.value + 1) % slides.value.length
  currentSlide.value = nextIndex
  animateToSlide(nextIndex, 'next')
}

const prevSlide = () => {
  const prevIndex = (currentSlide.value - 1 + slides.value.length) % slides.value.length
  currentSlide.value = prevIndex
  animateToSlide(prevIndex, 'prev')
}

const goToSlide = (index: number) => {
  const direction = index > currentSlide.value ? 'next' : 'prev'
  currentSlide.value = index
  animateToSlide(index, direction)
}
 
const startAutoPlay = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
  autoPlayInterval = setInterval(nextSlide, 4000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

const toggleAutoPlay = () => {
  isAutoPlaying.value = !isAutoPlaying.value
  if (isAutoPlaying.value) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
}
 
const handleResize = () => {
  calculateSlideWidth()
  animateToSlide(currentSlide.value)
}

onMounted(async () => {
  await nextTick()
  
  calculateSlideWidth()
   
  tl = gsap.timeline()
   
  tl.from('.title', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
  })
   
  .from(carouselWrapper.value, {
    duration: 0.8,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)"
  }, "-=0.5")
   
  .from('.carousel-controls', {
    duration: 0.6,
    y: 30,
    opacity: 0,
    ease: "power2.out"
  }, "-=0.3")
  
  .from('.controls', {
    duration: 0.6,
    y: 20,
    opacity: 0,
    ease: "power2.out"
  }, "-=0.3")
 
  if (prevButton.value && nextButton.value) {
    [prevButton.value, nextButton.value].forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.1, duration: 0.3, ease: "power2.out" })
      })
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" })
      })
    })
  }
 
  animateToSlide(0)
   
  startAutoPlay()
   
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  stopAutoPlay()
  window.removeEventListener('resize', handleResize)
  if (tl) tl.kill()
})

 

const title = "Market Hall";
const description =
  "Découvrez des antiquités authentiques et des pièces d'exception";
const collectionText = "Explorer la Collection";
// Static data
const exampleText =
 "Trouver un objet ancien exceptionnelle";
const exampleText2 =
  "En saisissant Table type Louis XVI dans la barre de recherche, vous trouverez des tables de ce type avec les Prix proposés par les particuliers (commission incluse).";

const socialComment1 = "Franck D. 75 : Au cours de plusieurs années de chine d’antiquités en tous genres, j’ai connu bon nombre de désillusions sur l’authenticité des pièces achetées. En rencontrant Mr Gérard Rigot, j’ai découvert un marchand aux qualités rarement associées : expertise, courtoisie, honnêteté, intérêt de la belle vente plutôt que de son montant, me faisant ainsi changer de regard sur le monde des marchands d’objets d’art ancien.";

</script>

<style scoped>

.button-section { 
   height: 100px; 
}
.carousel-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: bold;
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 15px; 
  box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3);
  height: 300px;
  background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
}

.carousel-track {
  display: flex;
  height: 100%;
  width: 500%;  
  will-change: transform;
 
}

.carousel-slide {
  flex: 0 0 20%;  
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem; 
}

.slide-content {
  text-align: center;
  color: white;
  max-width: 300px;
  will-change: transform, opacity; 
}

.slide-image {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.slide-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.slide-description {
  font-size: 1.1rem;
  line-height: 1.5;
  opacity: 0.9;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding: 0 1rem; 
}

.nav-button { 
  background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3); 
  transition: all 0.3s ease;
}

.nav-button:hover {
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.indicators {
  display: flex;
  gap: 0.5rem; 
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  
  background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
  transform: scale(1.3);
}

.controls {
  text-align: center;
  margin-top: 1.5rem;
}

.control-button { 
  
  background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
}

.control-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-container {
    padding: 1rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .carousel-wrapper {
    height: 350px;
  }
  
  .slide-content {
    padding: 0.5rem;
  }
  
  .slide-image {
    width: 150px;
    height: 100px;
  }
  
  .nav-button {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
}

.landing__main {
  background-color: rgba(139, 69, 19, 0.3);
  padding: 2rem;
  align-items: center;
  justify-content: center;
}
.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #8b4513, #a0522d);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3);
  position: relative;
  overflow: hidden;
  animation: bounceIn 1.5s ease-out;
}
.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.4);
}

.cta-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.cta-button:hover::before {
  left: 100%;
}


.middle-page-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  background-size: contain;
  background-position: center;
  
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  height: 500px; 
  position: relative; 
}

.middle-page-h1 {
  font-size: 3rem; 
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(137, 104, 104, 0.5);  

   height: 70px;
}


.middle-page-p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: rgb(139, 69, 19 );
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
 
   height: 80px;
}


.middle-page {
  height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

 
</style>
