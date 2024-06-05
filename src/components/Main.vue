<script>
</script>

<template>
    <div class="backgroundscreen">
      <div class="intro">
        <p class="paragraphinstart">
          <span>Todoit brings all your</span>
          <span> tasks, teammates,</span>
          <span> and tools together. <span>Keep everything in the same place</span></span>
          <span>even if your team isn’t.</span>
        </p>
        <div class="introimage">
          <img src="./TrelloUICollage_4x.png" alt="A image from todoit that shows how you can manage your tasks">
        </div>
      </div>
      <div class="banner">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,288L40,261.3C80,235,160,181,240,186.7C320,192,400,256,480,272C560,288,640,256,720,234.7C800,213,880,203,960,202.7C1040,203,1120,213,1200,224C1280,235,1360,245,1400,250.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  
    <div class="underbannersektion">
      <div class="content">
        <h1>A simple productivity powerhouse</h1>
        <p>Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of what needs to get done.</p>
        <router-link to="/todolist">
          <button class="styled-button">Go to Todo List</button>
        </router-link>
      </div>
      <div class="image">
        <img src="./kontorsbild.png" alt="">
      </div>
    </div>
  </template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.backgroundscreen {
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 20%, rgba(227, 64, 212, 1) 68%, rgba(255, 0, 0, 1) 100%);
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
}

.paragraphinstart {
  color: white;
  font-size: 1.5rem;
  text-align: center;
}

.paragraphinstart span {
  display: block;
  margin-bottom: 0.5rem;
}

.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 100%;
}

.introimage img {
  width: 100%;
  max-width: 300px;
}

.banner {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}

.banner svg {
  display: block;
  width: 100%;
}

.underbannersektion {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.content {
  margin-bottom: 20px;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image img {
  max-width: 100%;
  height: auto;
}

.styled-button {
  background-color: #ff4757; /* Red background */
  color: #fff; /* White text */
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.styled-button:hover {
  background-color: #e84118; /* Darker red background on hover */
}

@media (min-width: 768px) {
  .underbannersektion {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }

  .content {
    width: 50%;
    margin-right: 20px;
  }

  .image {
    width: 50%;
  }
}

@media (min-width: 350px) {
  .paragraphinstart {
    font-size: 1.75rem;
  }

  .introimage img {
    max-width: 350px;
  }
}

@media (min-width: 768px) {
  .backgroundscreen {
    height: 700px;
  }

  .paragraphinstart {
    font-size: 2.5rem;
    text-align: left;
  }

  .intro {
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
  }

  .introimage img {
    width: auto;
    max-width: 50%;
  }
}
</style>