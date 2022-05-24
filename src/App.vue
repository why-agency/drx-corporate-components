<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import O9902Quote from './components/organisms/o-99-02-quote.ce.vue'
import O0304FullscreenMediaText from './components/organisms/o-03-04-fullscreen-media-text.ce.vue'
</script>

<template>
  <!-- <o-99-02-quote class="mt-10" headline="headline" /> -->
  <div>
    <section class="mb-24">
      <o-03-04-fullscreen-media-text :data="mediaImage" />
    </section>
    <section class="mb-24">
      <o-03-04-fullscreen-media-text :data="mediaVideo" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mediaImage: {
        data: {
          header: 'With image',
          header_layout: 1,
          bodytext:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donecadipiscing tristique. Arcu ac tortor dignissim convallis aenean et tortor.Vitae auctor eu augue ut lectus. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Pharetra sit amet aliquam id diam maecenas ultricies. Non pulvinar neque laoreet suspendisse interdum consectetur libero idfaucibus. Integer eget aliquet nibh praesent tristique magna sit. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Cras fermentum odioeu feugiat pretium nibh ipsum consequat. Ultrices in iaculis nunc sed augue. Est ultricies integer quis auctor.</p>',
          pi_flexform: {
            buttonlink: 't3://page?uid=4133',
            buttontext: 'Button'
          }
        },
        image: [
          [
            {
              properties: {
                type: 'image'
              },
              publicUrl:
                'https://draexlmaier.loc/fileadmin/Group/Carreers/Apprentice/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
              useCase: 'default'
            },
            {
              properties: {
                type: 'image'
              },
              publicUrl:
                'https://draexlmaier.loc/fileadmin/Group/Carreers/Apprentice/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
              useCase: 'mobile'
            }
          ]
        ]
      },
      mediaVideo: {
        data: {
          header: 'With video',
          header_layout: 2,
          bodytext:
            '<p>Video video Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donecadipiscing tristique. Arcu ac tortor dignissim convallis aenean et tortor.Vitae auctor eu augue ut lectus. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Pharetra sit amet aliquam id diam maecenas ultricies. Non pulvinar neque laoreet suspendisse interdum consectetur libero idfaucibus. Integer eget aliquet nibh praesent tristique magna sit. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Cras fermentum odioeu feugiat pretium nibh ipsum consequat. Ultrices in iaculis nunc sed augue. Est ultricies integer quis auctor.</p>',
          pi_flexform: {
            buttonlink: 't3://page?uid=4133',
            buttontext: 'Watch video'
          }
        },
        image: [
          [
            {
              properties: {
                type: 'video'
              },
              publicUrl:
                'https://draexlmaier.loc/fileadmin/Videos/DRX_productvideo_v2.mp4'
            }
          ]
        ]
      }
    }
  }
}
</script>
