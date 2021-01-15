<template>
  <div>
      <div class="parent-container flex-container">
          <div class="A"> 
              <img class="photo-about" src="@/assets/AboutPhoto1.jpeg"/>
          </div>
          <div class="B"><p>I am an Edinburgh based Software Developer with a creative and problem solving background.  In October 2020 I started on <b>Codeclan's Professional Software Development </b>Course.  This is an Industry Led 16 week immersive course which is SQA approved and involved more than 800 hours of coding.  It teaches software fundamentals and skills including Python, Javascript, Java, HTML, CSS, Agile methodoligies, Restful API's and UX design.  With a strong emphasis on the SOLID principles of OOP and Test Driven Development I have used the following technologies and frameworks; GitHub, PostgreSQL, MongoDB, Express, Flask, Node,js, Vue.js.   </p></div>
          <div class="Cabout"><p>When I'm not coding I love being outdoors, especially at the beach with my pups!  I am an avid reader, Love cooking (and eating..) and enjoy crocheting funky blankets to help me relax (and keep me cosy!).</p></div>
          <div class="Dphoto">
              <img class="photo-about" src="@/assets/Beach.jpeg"/>
            </div>          
            <!-- <div class="E"><p>photo</p></div>
          <div class="F"><p>blurb</p></div> -->
      </div>
  </div>
</template>

<script>

import navBar from '../components/header.vue'
import footNote from '../components/footer.vue'

export default {
    name: 'about',
    components: {
        'nav-bar': navBar,
        'foot-note': footNote
    }

}
</script>

<style>

.parent-container{
    display: grid;
    max-width: 90%;
    margin: 1rem auto;
    grid-template-areas: "A A B B"
                        "C C D D"
}

.A{
    grid-area: A;
    padding-top: 36px;
}

.B{
    grid-area: B;
    padding: 50px;
}

.Cabout{
    grid-area: C;
    padding-top: 50px;
    padding-right: 50px;
}

.Dphoto{
    grid-area: D;
    text-align: right;
    padding-right: 50px;
}

.E{
    grid-area: E;
}

.F{
    grid-area: F;
}

.photo-about{
    height:300px;
    width: 450px;
}

/* .flex-container{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row
}
    
.box{
    height: 200px;
    width: 200px;
    border: black solid 5px;
    

} */



</style>