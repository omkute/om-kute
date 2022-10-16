import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";
import myimg from './assets/Snapchat-604200710.jpg'
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
    
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full"
            alt="hero"
            src="https://pbs.twimg.com/profile_images/1561543832474230785/78NBH2XZ_400x400.jpg"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hi, I am OM
            </h1>
            <p class="mb-8 leading-relaxed">
              I am 2nd year engineering student studiyang comuter science. <br />
              I like development, currenty I am learning web development.

            </p>

            <section class="text-gray-600 body-font">
 
    
    
     
  
</section>
            
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
