<template>
  <main class="about-page">
    <div class="about-page__item">
      <img src="/images/about.webp" alt="Enesha">
    </div>
    <div class="about-page__item">
      <p>
        My name is Enesha. And I am a creator, creative copywriter, copywriter (with the job titles
        in the industry being a bit confusing).
      </p>
      <p>
        I have a higher education in advertising, MADS school, and years of work in agencies.
      </p>
      <p>
        But my path in creativity was not easy: client side, agency side, lots of professions in the
        industry... all of this was confusing and there was no understanding of where to go and how
        to develop.
      </p>
      <p>
        But it gave me the ability <span class="second-font">to work in different conditions</span>
        and quickly understand different topics: from diabetes to cars.
      </p>
      <p>A few facts</p>
      <div>
        Education
        <ul>
          <li>
            Master's in Advertising and PR (Plekhanov Russian University of Economics, diploma with
            honors)
          </li>
          <li>Conceptual Thinking '21-'22 (MADS)</li>
        </ul>
      </div>
      <div>
        Awards
        <ul>
          <li>Young Glory Bronze</li>
          <li>Silver Mercury</li>
          <li>Tagline</li>
          <li>AKMR</li>
        </ul>
      </div>
      <app-contact></app-contact>
    </div>
  </main>
</template>

<script setup>
import AppContact from '@/components/AppContact.vue';
import { setPageTitle } from '@/utils/helpers';

setPageTitle(import.meta.env.VITE_PAGE_NAME_ABOUT);
</script>

<style lang="stylus">
.about-page
  font-size 16px
  display flex
  column-gap 20px
  background-image url('/images/bg/12.webp')
  background-repeat no-repeat
  background-position right -30px bottom -10px
  padding-bottom 130px

  @media (max-width 800px)
    flex-direction column
    row-gap 20px

    &__item:first-child
      text-align center

  @media (max-width 800px)
    background-position right -30px bottom -10px
    padding-bottom 300px

  @media (max-width 400px)
    background-size 320px

  img
    min-width 280px

  p:first-child
    margin-top 0

  ul
    padding-left 15px
    margin-top 0
</style>
