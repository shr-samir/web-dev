const images = [
  {
    src: './assets/img1.jpg',
    alt: 'Image-1',
  },
  {
    src: './assets/img2.jpg',
    alt: 'Image-2',
  },
  {
    src: './assets/img3.jpg',
    alt: 'Image-3',
  },
  {
    src: './assets/img4.jpg',
    alt: 'Image-3',
  },
]

const imgPrev = document.getElementById('leftIcon')
const imgNext = document.getElementById('rightIcon')
const directToggler = document.getElementById('directToggler')
const imgContainer = document.getElementById('imgContainer')

const noOfImages = images.length
let currentImageIndex = 0
const imgWidth = imgContainer.offsetWidth

const addImg = (image) => {
  // adding images
  const imgElement = document.createElement('img')
  imgElement.classList.add('image-collection')
  imgElement.src = image.src
  imgElement.alt = image.alt
  imgContainer.appendChild(imgElement)
}

const createImgToggler = (i) => {
  // Create Image Toggler
  const imgToggler = document.createElement('div')
  imgToggler.classList.add('circle')
  if (i === 0) {
    imgToggler.classList.add('circle-active')
  }

  imgToggler.addEventListener('click', () => changeActiveImg(i))
  directToggler.appendChild(imgToggler)
}

for (let i = 0; i <= noOfImages - 1; i++) {
  addImg(images[i])
  createImgToggler(i)
}

function toNegativePX(pixels) {
  return `-${pixels}px`
}



function toPrevImg() {
  if (currentImageIndex > 0) {
    currentImageIndex--
  } else {
    currentImageIndex = noOfImages - 1
  }
  const leftPX = currentImageIndex * imgWidth
  imgContainer.style.left = toNegativePX(leftPX)

  activeImgToggler()
}

function toNextImg() {
  if (currentImageIndex < noOfImages - 1) {
    currentImageIndex++
  } else {
    currentImageIndex = 0
  }
  const leftPX = currentImageIndex * imgWidth
  imgContainer.style.left = toNegativePX(leftPX)

  activeImgToggler()
}

function activeImgToggler() {
  const currentImage = document.querySelector('.circle-active')
  // console.log('currentImageIndex')
  currentImage.classList.remove('circle-active')
  imgContainer.children[currentImageIndex].classList.add('circle-active')
}

function changeActiveImg(index) {
  currentImageIndex = index
  const leftPX = currentImageIndex * imgWidth 
  imgContainer.style.left = toNegativePX(leftPX)

  activeImgToggler()
}

imgPrev.addEventListener('click', () => {
  toPrevImg()
})

imgNext.addEventListener('click', () => {
  toNextImg()
})

// setInterval(() => toNextImg(), 2000)


console.log(currentImageIndex)

