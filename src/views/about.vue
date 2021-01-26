<template>
    <div>
        <section class="parent-container">
            <div class="Aphoto"> 
                <a  href="https://codeclan.com"><img class="photo-about1" src="@/assets/codeclan.png"/></a>
            </div>
            <div class="Babout"> 
                <p>I am an Edinburgh based Software Developer with a creative and problem solving background, which gives me strong transferrable skills to take into my career in programming.  Coding really fires my imagination and I enjoy all aspects of developing, in particular the problem solving aspect of it.  I love nothing more than solving a complex issue and seeing my code run! In October 2020 I started on 
                    <b>Codeclan's Professional Software Development 
                    </b>Course.  This is an Industry Led 16 week immersive course which is SQA approved and involved more than 800 hours of coding.  It teaches software fundamentals and skills including Python, Javascript, Java, HTML, CSS, Agile methodologies, Restful API's and UX design.  With a strong emphasis on the SOLID principles of OOP and Test Driven Development I have used the following technologies and frameworks; GitHub, PostgreSQL, MongoDB, Express, Flask, Node.js, Vue.js.   
                </p>
            </div>
            <div class="Cabout">
                <p class="Cabout_text">When I'm not coding I love being outdoors, especially at the beach with my pups!  I am an avid reader, Love cooking (and eating..) and enjoy crocheting funky blankets to help me relax (and keep me cosy!). 
                </p> 
                <p class="Cabout_text"><b>Want to know more?</b>  Follow my <a class="link" href="http://www.myroadtocode.co.uk"><b>blog</b></a>, send me an <a class="link" href="mailto: ehack78@gmail.com"><b>email</b></a> or connect with me on <a class="link" href="https://linkedin.com/in/emma-hack"><b>Linkedin</b></a> using the icons below. 
                </p>
                <a href="http://www.myroadtocode.co.uk">
                    <button class="blog_button">Read My Blog Here!</button>
                </a>
            </div>
            <div class="Dphoto">
                <img class="photo-about" src="@/assets/Beach.jpeg"/> 
            </div>  
        </section>
    </div>
</template>

<script>


export default {
    name: 'about'
    
}
</script>

<style>

.parent-container{
    display: block;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.Babout{
    padding-left:20px;
    padding-right:25px;
    line-height: 25px;
    text-align: justify;
}

.Cabout{
    padding-left:20px;
    padding-right:25px;
    line-height: 25px;
}

.Cabout_text{
    text-align: justify;
}

.photo-about1{
    margin-top: 50px;
    height:100px;
    width: 300px;
}

.photo-about{
    height:150px;
    width: 300px;
}

.link{
    color: orange;
    text-decoration: none;
}

.blog_button{
    margin-bottom: 36px;
    padding: 5px;
    border-style: none;
    color: white;
    background-color: #484848;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
}

.blog_button:hover{
    background-color: orange;
}

@media (min-width: 1080px){

.parent-container{
    display: grid;
    max-width: 90%;
    margin: 1rem auto;
    grid-template-areas: "A A B B"
                        "C C D D"
}

.Aphoto{
    grid-area: A;
    padding-top: 0px;
    height: 250px;
    width: 550px;
}

.Babout{
    grid-area: B;
    padding: 50px;
    padding-top: 0px;
    margin-left: 50px;
}

.Cabout{
    grid-area: C;
    padding-top: 50px;
    padding-right: 50px;
}

.Dphoto{
    grid-area: D;
    text-align: right;
    /* padding-right: 50px; */
}

.photo-about1{
    width: auto;
    margin-top: 100px;
    /* height:250px;
    width: 550px; */
}

.photo-about{
    height:300px;
    width: 450px;
    padding: 50px;
    margin-left: 50px;
}

.Cabout_text{
    margin-top: 0;
}

}

</style>