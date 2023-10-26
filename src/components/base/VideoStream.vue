<template>
  <div class="overflow-hidden h-full flex items-center">
    <div v-if="isPlaceholderVisible && !hasAutoplay" class="h-full w-full">
      <BasePicture
          v-if="placeholderImage"
          :images="placeholderImage"
          class="h-full relative w-full object-cover"
      />
      <img
          v-else
          :src="youtubeThumbnail || vimeoThumbnail"
          class="h-full relative w-full object-cover"
      />
      <slot name="play-button">
        <BaseButtonIcon
            color="sand"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary z-40"
            @click="$emit('play-button-clicked')"
        >
          <IconPlay/>
        </BaseButtonIcon>
      </slot>
    </div>
    <div
        v-if="consentGiven === false"
        class="two-click absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 h-2/3 lg:h-1/2 w-3/4 bg-gradient-to-b to-gray-500/40 via-gray-700 from-gray-900 flex justify-items-center items-center"
    >
      <p class="text-white lg:text-h5 text-justify p-10 ">{{ vimeoLockOverlayMsg }}</p>
    </div>
    <iframe
        v-if="!isPlaceholderVisible || hasAutoplay"
        class="relative w-full aspect-video _iub_cs_activate"
        :name="videoName"
        :src="consentGiven === true ? srcStream : 'about:blank'"
        :data-suppressedsrc="srcStream"
        data-iub-purposes="3"
        allow="fullscreen;autoplay"
        :class="{
        'w-screen h-[56.25vw] min-h-screen min-w-[177.77vh] !absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2':
          fullScreen
      }"
    />
  </div>
</template>

<script setup>
import {ref, computed, onMounted, getCurrentInstance} from 'vue'
import BasePicture from '../base/Picture.vue'
import BaseButtonIcon from '../base/ButtonIcon.vue'
import IconPlay from '../icons/Play.vue'

const props = defineProps({
  media: {
    type: [Array, Object],
    required: true
  },
  streamSettings: {
    type: Object,
    default: () => ({
      autoplay: false,
      loop: false,
      muted: false
    })
  },
  fullScreen: {
    type: Boolean,
    default: false
  }
})

/** Video Stream */
const isPlaceholderVisible = ref(true)
const hasAutoplay = computed(() => props.streamSettings.autoplay)

const vimeoThumbnail = ref('')
const consentGiven = ref(false)

document.addEventListener('iubendaConsentGiven', () => {
  consentGiven.value = true;
  const instance = getCurrentInstance();
  instance?.proxy?.$forceUpdate();
});

const streamType = computed(
    () => props?.media?.video_stream?.[0].properties?.videoservice
)
const videoName = computed(
    () => props?.media?.video_stream?.[0].properties?.video_title
)
const isVimeo = computed(() => streamType.value === 'vimeo')
const url = computed(() =>
    isVimeo.value
        ? 'https://player.vimeo.com/video'
        : 'https://www.youtube.com/embed'
)

const id = ref(props?.media.video_stream?.[0].properties.video_id)
const start = ref(props?.media.video_stream?.[0].properties?.video_start)
const end = ref(props?.media.video_stream?.[0].properties?.video_end)
const srcStream = computed(() => {
  return `${url.value}/${id.value}?autoplay=1&${
      isVimeo.value ? 'muted' : 'mute'
  }=${props.streamSettings.muted ? 1 : 0}&loop=1&controls=${
      props.streamSettings.controls ? 1 : 0
  }&start=${start.value}&end=${end.value}`
})
const placeholderImage = computed(() => {
  if (props?.media?.video_stream?.[0].properties?.video_poster_image) {
    return props?.media?.video_stream?.[0].properties?.video_poster_image
  }
  return ''
})
const youtubeThumbnail = computed(() => {
  if (isVimeo.value) {
    return ''
  } else {
    const hasParams = id.value.includes('?')
    return `https://img.youtube.com/vi/${
        hasParams ? id.value.slice(0, id.indexOf('?')) : id.value
    }/maxresdefault.jpg`
  }
})

const vimeoLockOverlayMsg = computed(() => {
  const lang = document.documentElement.getAttribute('lang')
  const currentLang = lang ? lang.substring(0, 2).toLowerCase() : "de";
  switch (currentLang) {
    case 'en':
      return "We respect your privacy and have acknowledged your choice not to accept cookies. Therefore, the external video that is normally seen at this point is not available.\nIf you change your mind and would like to accept cookies in order to fully enjoy all the functions of our website, you can change your settings at any time.\nThank you for visiting our website!"
      break;
    case 'fr':
      return "Vous trouverez ici une vidéo externe de Vimeo. Vous pouvez visionner la vidéo si vous (acceptez les cookies d'expérience utilisateur. Vous pouvez révoquer ou modifier votre consentement à l'utilisation des cookies à tout moment. Vous pouvez en savoir plus à ce sujet dans notre Politique de Cookies.\nMerci d'avoir visité notre site Web!"
      break;
    case 'it':
      return "Di seguito è possibile visualizzare un video da Vimeo.\nI video sarà visualizzabile dopo aver accettato i relativi cookie\n¡I consenso all'utilizzo dei cookie può essere revocato o modificato in qualunque momento.\n(E' possibile avere maggiori informazioni al riguardo andando sulla nostra\nGestione dei Cookie\nGrazie per aver visitato il nostro sito!"
      break;
    case 'hu':
      return "lItt talál egy külso videót a Vimeo-ról. A videót akkor tekintheti meg, ha elfogadja a felhasználói élményt biztositó sütiket. A sütik használatához adott hozzajárulását bármikoi\nvisszavonhatja vagy módosithatja. Erröl bövebben a Cookie-szabályzatunkban olvashat.\nKöszönjük, hogy meglátogatta weboldalunkat!"
      break;
    case 'mk':
      return "Овде ке наідете надворешно видео од Vimeo. Видеото можете да го\nпогледнете доколку ги прифатите колачиата за корисничко искуство.\nВашата согласност за користее на колачиь можете да j отповикате или прилагодите во секое време. Повеке за ова можете да дознаете во нашата Политика за колачива.\nВи благодариме што j посетивте нашата веб-страна!"
      break;
    case 'pl':
      return "Tutaj znajdziesz zewnetrzne wideo z Vimeo. Mozesz obejrzec wideo, jesli akceptujesz pliki cookie poprawiajace doswiadczenia uzytkownika. W kazdej chwili mozesz odwolac lub dostosowac swoja zgode na wykorzystywanie plikow cookies. Mozesz dowiedziec sie wiecej na ten temat w naszej Polityce plikow cookie. Dziekujemy za odwiedzenie naszej strony internetowej!"
      break;
    case 'ro':
      return "Aici veți găsi un videoclip extern de la Vimeo. Puteți viziona videoclipul dacă acceptați cookie-uri pentru experiența utilizatorului. Vă puteți revoca sau ajusta oricând consimțământul pentru utilizarea cookie-urilor. Puteți afla mai multe despre acest lucru în Politica noastră privind cookie-urile.\nVă mulțumim că ați vizitat pagina nostră web!"
      break;
    case 'sr':
      return "Ovde cete pronaci eksterni video sa Vimeo-a. Video moñete pogledati ako prihvatite kolacice korisnickog iskustva. Mozete opozvati ili prilagoditi svoju saglasnost za koriscenje kolacica u bilo kom trenutku. Vise o tome moñete saznati u nasoi Politici kolacica.\n'Hvala vam sto ste posetili nasu veb stranicu!"
      break;
    case 'th':
      return "在这里您可以找到来自 Vimeo 的外部视频。如果您接妥通过保存您访问过网站所创建的文件，让您获得更轻松的上网体验，则可以观看视频。您可以随时撤\n1销或调整您对使用“保存您访问过网站所创建的文件”的同意。您可以在我们的\n“关于您访问过的网站所创建的文件政第”中了解更多相关信息。\n感谢您访问我们的网站"
      break;
    case 'vi':
      return "Ở đây bạn sẽ tìm thấy một video bên ngoài từ Vimeo. Bạn có thể xem video nếu bạn chấp nhận Cookies trải nghiệm người dùng. Bạn có thể thu hồi hoặc điều chỉnh sự đồng ý của mình đối với việc sử dụng cookies bất kỳ lúc nào. Bạn có thể tìm hiểu thêm về điều này trong \"Chính sách Cookie\" của chúng tôi.\nCảm ơn bạn đã ghé thăm website của chúng tôi!"
      break;
    case 'zh':
      return "在这里您可以找到来自 Vimeo 的外部视频。如果您接妥通过保存您访问过网站所创建的文件，让您获得更轻松的上网体验，则可以观看视频。您可以随时撤\n1销或调整您对使用“保存您访问过网站所创建的文件”的同意。您可以在我们的\n“关于您访问过的网站所创建的文件政第”中了解更多相关信息。\n感谢您访问我们的网站"
      break;
    case 'zs':
      return "Disini anda akan menemui video luaran daripada Vimeo. Anda boleh menonton video jika anda menerima kuki pengalaman pengguna. Anda boleh membatalkan atau mengubah persetujuan anda terhadap penggunaan kuki pada bila bila masa. Anda boleh mengetahui lebih lanjut tentang perkara ini dalam <b>Dasar Kuki</b> kami.\nTerima kasih kerana melawat laman web kami"
      break;
    case 'es':
      return "Aquí encontrará un video externo de Vimeo. Puede ver el video si acepta las cookies de experiencia de usuario. Puede revocar o ajustar su consentimiento del uso de cookies en cualquier momento. Obtenga más información al respecto en nuestra Política de Cookies. ¡Gracias por visitar nuestro sitio web!";
      break;
    default:
      return "Wir respektieren Ihre Privatsphäre und haben Ihre Wahl, keine Cookies zu akzeptieren, zur Kenntnis genommen. Daher ist das externe Video, das normalerweise an dieser Stelle zu sehen ist, nicht verfügbar.\nFalls Sie Ihre Meinung ändern und doch Cookies akzeptieren möchten, um in den vollen Genuss aller Funktionen unserer Webseite zu kommen, können Sie Ihre Einstellungen jederzeit ändern.\nVielen Dank für Ihren Besuch auf unserer Webseite!";
      break;
  }
})

onMounted(() => {
  if (window._iub && window._iub.cs && window._iub.cs.api) {
    consentGiven.value = window._iub.cs.api.isConsentGiven();
  }
  if (isVimeo.value) {
    const url = `https://vimeo.com/api/v2/video/${id.value}.json`
    fetch(url)
        .then(response => response.json())
        .then(data => {
          vimeoThumbnail.value = data[0].thumbnail_large
        })
  }
})

function playVideo() {
  isPlaceholderVisible.value = false
}
</script>
